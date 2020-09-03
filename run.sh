docker run \
  -v /docker/storage/minecraft-prototype:/data \
  -p 10199:25565 \
  --name mms \
  --restart always \
  -d \
  minecraft-prototype:1.0.0
  