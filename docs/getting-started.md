Getting Started
===

* [Prerequisites App](#prerequisites)
* [Build](#build)
* [Run](#run)
* [Login to Cloud Foundry](#login-to-cf)
* [Push to Cloud Foundry](#push-to-cf)
* [Delete the app from Cloud Foundry](#delete-the-app)
* [Create a Docker Image](#create-docker-img)
* [Run Docker Container](#run-docker-container)
* [Delete Docker Container](#delete-docker-container)


### <a name="prerequisites"></a> Prerequisites App

* install [Node](https://nodejs.org/)
* install [Cloud Foundry CLI](https://pivotal.io/de/platform/pcf-tutorials/getting-started-with-pivotal-cloud-foundry/install-the-cf-cli)
* (optional) create a free trial account on [Pivotal.io](https://pivotal.io/platform/pcf-tutorials/getting-started-with-pivotal-cloud-foundry/introduction)

### <a name="build"></a> Build

* Please install also the NPM dependencies via

```
npm install
```

### <a name="run"></a> Run

Run the app locally with

```
npm start
```

### <a name="login-to-cf"/> Login to Cloud Foundry

To Deploy the app to Cloud Foundry first login to the portal

```
cf login -a api.run.pivotal.io
```

(optional) and navigate to your space

```
cf t -s your-space
```

### <a name="push-to-cf"/> Push to Cloud Foundry

Create a manifest file 'manifest.yaml' e.g.:

```
---
applications:
- name: the-app-name
  memory: 512M
  disk_quota: 512MB
  buildpack: nodejs_buildpack
  command: node index.js
  env:
    MONGO_DB: mongodb://user:password@db-server/dhbw
```

and run

```
cf push -f manifest.yaml
```

MONGO_DB env-variable is used to set the MongoDB via Connection-URI

### <a name="delete-the-app"/> Delete the app from Cloud Foundry

Execute

```
cf delete the-app-name
```

### <a name="create-docker-img"/> Create a Docker Image

Run the build command to build the docker image via the Dockerfile

```
docker build -t name-your-image .
```

### <a name="run-docker-container"/> Run Docker Container

Run the created docker image with

```
docker run --name your-container-name -p 80:3000 -e "MONGO_DB=the-mongo-uri-to-set" -it your-image-name
```

### <a name="delete-docker-container"/> Delete Docker Container

Delete the created docker container with

```
docker rm your-container-name
```
