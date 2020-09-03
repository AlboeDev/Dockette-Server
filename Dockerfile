FROM openjdk:16-slim

LABEL maintainer "alboe"

WORKDIR /data

COPY start.sh /start.sh

EXPOSE 25565 25565

RUN start.sh

COPY config.json /temp/config.json

VOLUME [ "/data" ]

CMD /data/start.sh
