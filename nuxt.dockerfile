FROM node:20.2-alpine

RUN apk add --no-cache git

RUN mkdir /nuxt
WORKDIR /nuxt

COPY .docker/nuxt-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

ENTRYPOINT ["docker-entrypoint"]
