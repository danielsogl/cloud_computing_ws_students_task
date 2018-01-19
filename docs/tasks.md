Tasks
===

* [Start your app locally](#1)
* [Push your app to Cloud Foundry](#2)


### <a name="1"></a> Start Your App locally

```
npm install
npm start
```

### <a name="2"></a> Push your app to Cloud Foundry

Prerequisites: Cloud Foundry CLI installed

Create a manifest.yaml in the project-folder

```
---
applications:
- name: give-your-app-a-name
  memory: 512M
  disk_quota: 512MB
  buildpack: nodejs_buildpack
  command: node index.js

```

Push your application to Cloud Foundry
```
cf push -f manifest.yaml
```
