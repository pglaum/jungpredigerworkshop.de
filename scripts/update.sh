#!/bin/sh

git pull

docker compose up -d --build nuxt

docker compose restart nginx
