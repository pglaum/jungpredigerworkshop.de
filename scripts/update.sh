#!/bin/sh

git pull

docker compose up --build nuxt

echo "Waiting for 3 seconds..."
sleep 3

docker compose restart nginx
