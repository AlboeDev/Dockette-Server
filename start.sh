cp -r /working/server.jar /data/server.jar
chmod -R 777 /data
cd /data
java -Xmx4G -Xms2G -jar server.jar nogui
