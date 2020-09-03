FROM openjdk:14.0.2-slim-buster

LABEL maintainer "alboe"

COPY . /working

RUN /working/initialize.sh

EXPOSE 25565 25565

VOLUME [ "/data" ]

CMD /working/start.sh