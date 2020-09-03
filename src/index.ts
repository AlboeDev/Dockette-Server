import * as shell from 'shelljs';

import { Config, defaults } from './config';
import {
  WORKING_DIRECTORY,
  EULA_FILE_NAME,
  SERVER_JAR_FILE_NAME,
  SERVER_PROPERTIES_FILE_NAME,
  SERVER_START_FILE_NAME,
} from './constants';

/**
 * Minecraft Management Server Class.
 */
export default class MMS {
  protected config: Config;

  protected workingDirectoryExists: boolean;

  /**
   * MMS Constructor.
   *
   * @param config - Configuration object.
   */
  public constructor(config: Config = {}) {
    this.config = {
      ...defaults,
      ...config,
    };
  }

  /**
   * Generate the configuration files for the minecraft server.
   */
  public generateConfig(): void {
    const { serverProperties, eula } = this.config;

    const eulaPath = `${WORKING_DIRECTORY}/${EULA_FILE_NAME}`;
    const serverPropertiesPath = `${WORKING_DIRECTORY}/${SERVER_PROPERTIES_FILE_NAME}`;

    const eulaText = `eula=${eula}`;

    const serverPropertiesText = Object.keys(serverProperties).map(
      (key: string): string => `${key}=${serverProperties[key]}`,
    ).join('\n');

    shell.echo(eulaText).to(eulaPath);
    shell.echo(serverPropertiesText).to(serverPropertiesPath);
  }

  /**
   * Create the working directory.
   */
  public createWorkingDir(): void {
    if (!this.workingDirectoryExists) {
      shell.mkdir(WORKING_DIRECTORY);
      this.workingDirectoryExists = true;
    }
  }

  /**
   * Destory the working directory.
   */
  public destoryWorkingDir(): void {
    if (this.workingDirectoryExists) {
      shell.rm('-rf', WORKING_DIRECTORY);
      this.workingDirectoryExists = false;
    }
  }

  /**
   * Generate the scripts required to start the server.
   */
  public generateScripts(): void {
    const { max, min } = this.config.memory;

    const memoryText = `-Xmx${max} -Xms${min}`;
    const serverStartPath = `${WORKING_DIRECTORY}/${SERVER_START_FILE_NAME}`;

    shell.echo(`java ${memoryText} ${SERVER_JAR_FILE_NAME} nogui`).to(serverStartPath);
  }

  /**
   * Fetch the minecraft server jar file.
   */
  public fetchServerJar(): void {
    const { serverJarUri } = this.config;

    const serverJarPath = `${WORKING_DIRECTORY}/${SERVER_JAR_FILE_NAME}`;

    shell.exec(`curl -o ${serverJarPath} ${serverJarUri}`);
  }

  /**
   * Copy working directory files to the running directory.
   */
  public copyFiles(): void {
    const { runningDirectory } = this.config;

    shell.cp('-R', `${WORKING_DIRECTORY}/*`, runningDirectory);
  }

  /**
   * Perform all actions.
   */
  public process(): void {
    this.createWorkingDir();
    this.generateConfig();
    this.generateScripts();
    this.fetchServerJar();
    this.copyFiles();
    this.destoryWorkingDir();
  }
}
