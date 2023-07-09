#!/bin/sh

git pull

docker compose up --build nuxt

sleep 3

docker compose restart nginx
