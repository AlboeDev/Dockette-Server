# MMS

Minecraft Managed Server

## Description

This project acts as a general cache for the [Docker](https://www.docker.com/) scripts used to initialize a docker image and container to run a [Minecraft Server](https://www.minecraft.net/en-us/download/server). This repository is not meant to be utilized as-is by any third parties, but rather, act as an example on how to generate the scripts needed to run a [Docker](https://www.docker.com/)-hosted [Minecraft Server](https://www.minecraft.net/en-us/download/server).

## Usage

The expected usage of this project is entirely experimental, and can typically be initiated by using the following logical flow:

- Run `docker build` on the projects directory with the tag `minecraft-prototype:1.0.0`
- Execute the `run.sh` script to start a container using the built image.
