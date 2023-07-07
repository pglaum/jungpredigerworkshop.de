#!/bin/sh

source .env

echo "Nuxt entrypoint [$NUXT_ENV]"

if [[ $NUXT_ENV == 'dev' ]];
then

	yarn install
	yarn dev

else

	yarn install
	yarn generate

fi
