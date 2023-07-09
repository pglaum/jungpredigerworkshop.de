#!/bin/sh

git pull

docker compose up -d --build nuxt

sleep 3

docker compose restart nginx
