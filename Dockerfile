# syntax=docker/dockerfile:1
FROM node:22-alpine
LABEL maintainer="Appvia Ltd <info@appvia.io>"

# Install dependencies needed for building native modules
RUN apk add --no-cache python3 py3-setuptools make g++

WORKDIR /app
COPY ./app/yarn.lock ./
COPY ./app/package.json ./
RUN yarn install --production
COPY ./app .
EXPOSE 3000
CMD ["node", "src/index.js"]
