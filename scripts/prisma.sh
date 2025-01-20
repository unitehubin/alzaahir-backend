#!/bin/bash

# Get the current directory
CURRENTDIR=$(pwd)

# Set the filename of the environment file based on the environment
if [ -n "$1" ]; then
  ENV_FILE="./env/$1.env"
  echo "$ENV_FILE"
else
  echo "Error: Specify ENV file"
  exit 1
fi

# Check if the environment file exists
if [ -e "$ENV_FILE" ]; then
  # Read and set each line from the environment file
  while IFS= read -r LINE; do
    NAME=$(echo "$LINE" | cut -d'=' -f1)
    VALUE=$(echo "$LINE" | cut -d'=' -f2-)
    export "$NAME=$VALUE"
    echo "$NAME=$VALUE"
  done < "$ENV_FILE"


  DATABASE_URL="mysql://$MYSQL_USER:$MYSQL_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME"

  export DATABASE_URL
  
  echo "$DATABASE_URL"

  # Now, run the Prisma command
  npx prisma db pull --schema prisma/alzaahir-dev/schema.prisma 
  echo "pull complete"
  npx prisma generate --schema prisma/alzaahir-dev/schema.prisma
  echo "generate complete"
else
  echo "Environment file $ENV_FILE not found."
  exit 1
fi