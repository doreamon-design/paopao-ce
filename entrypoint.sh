#!/bin/sh

if [ -z "$COMPANY_NAME" ]; then
  echo "COMPANY_NAME is required"
  exit 1
fi

if [ -z "$COMPANY_DOMAIN" ]; then
  echo "COMPANY_DOMAIN is required"
  exit 1
fi

if [ -z "$DATABASE_HOST" ]; then
  echo "DATABASE_HOST is required"
  exit 1
fi

if [ -z "$DATABASE_PORT" ]; then
  echo "DATABASE_PORT is required"
  exit 1
fi

if [ -z "$DATABASE_USERNAME" ]; then
  echo "DATABASE_USERNAME is required"
  exit 1
fi

if [ -z "$DATABASE_PASSWORD" ]; then
  echo "DATABASE_PASSWORD is required"
  exit 1
fi


if [ -z "$DATABASE_NAME" ]; then
  echo "DATABASE_NAME is required"
  exit 1
fi

if [ -z "$REDIS_HOST" ]; then
  echo "REDIS_HOST is required"
  exit 1
fi

if [ -z "$REDIS_PORT" ]; then
  echo "REDIS_PORT is required"
  exit 1
fi

# if [ -z "$REDIS_USERNAME" ]; then
#   echo "REDIS_USERNAME is required"
#   exit 1
# fi

# if [ -z "$REDIS_PASSWORD" ]; then
#   echo "REDIS_PASSWORD is required"
#   exit 1
# fi

# if [ -z "$REDIS_DB" ]; then
#   echo "REDIS_DB is required"
#   exit 1
# fi

if [ -z "$MEILISEARCH_HOST" ]; then
  echo "MEILISEARCH_HOST is required"
  exit 1
fi


if [ -z "$MEILISEARCH_PORT" ]; then
  echo "MEILISEARCH_PORT is required"
  exit 1
fi


if [ -z "$MEILISEARCH_MASTER_KEY" ]; then
  echo "MEILISEARCH_MASTER_KEY is required"
  exit 1
fi

if [ -z "$OSS_ACCESS_KEY_ID" ]; then
  echo "OSS_ACCESS_KEY_ID is required"
  exit 1
fi

if [ -z "$OSS_ACCESS_KEY_SECRET" ]; then
  echo "OSS_ACCESS_KEY_SECRET is required"
  exit 1
fi

if [ -z "$OSS_BUCKET" ]; then
  echo "OSS_BUCKET is required"
  exit 1
fi

if [ -z "$OSS_ENDPOINT" ]; then
  echo "OSS_ENDPOINT is required"
  exit 1
fi

if [ -z "$OSS_DOMAIN" ]; then
  echo "OSS_DOMAIN is required"
  exit 1
fi

if [ ! -f "/app/paopao-ce/config.yaml" ]; then
cat /etc/config.yaml.docker |
    sed "s%<COMPANY_NAME>%${COMPANY_NAME}%g" |
    sed "s%<COMPANY_DOMAIN>%${COMPANY_DOMAIN}%g" |
    sed "s%<DATABASE_HOST>%${DATABASE_HOST}%g" |
    sed "s%<DATABASE_PORT>%${DATABASE_PORT}%g" |
    sed "s%<DATABASE_USERNAME>%${DATABASE_USERNAME}%g" |
    sed "s%<DATABASE_PASSWORD>%${DATABASE_PASSWORD}%g" |
    sed "s%<DATABASE_NAME>%${DATABASE_NAME}%g" |
    sed "s%<REDIS_HOST>%${REDIS_HOST}%g" |
    sed "s%<REDIS_PORT>%${REDIS_PORT}%g" |
    sed "s%<REDIS_USERNAME>%${REDIS_USERNAME}%g" |
    sed "s%<REDIS_PASSWORD>%${REDIS_PASSWORD}%g" |
    sed "s%<REDIS_DB>%${REDIS_DB}%g" |
    sed "s%<MEILISEARCH_HOST>%${MEILISEARCH_HOST}%g" |
    sed "s%<MEILISEARCH_PORT>%${MEILISEARCH_PORT}%g" |
    sed "s%<MEILISEARCH_MASTER_KEY>%${MEILISEARCH_MASTER_KEY}%g" |
    sed "s%<OSS_ACCESS_KEY_ID>%${OSS_ACCESS_KEY_ID}%g" |
    sed "s%<OSS_ACCESS_KEY_SECRET>%${OSS_ACCESS_KEY_SECRET}%g" |
    sed "s%<OSS_BUCKET>%${OSS_BUCKET}%g" |
    sed "s%<OSS_ENDPOINT>%${OSS_ENDPOINT}%g" |
    sed "s%<OSS_DOMAIN>%${OSS_DOMAIN}%g" >/app/paopao-ce/config.yaml
fi

/app/paopao-ce/paopao serve
