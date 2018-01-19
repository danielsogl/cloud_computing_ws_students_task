Tasks
===

* [Start your app locally](#1)
* [Push your app to Cloud Foundry](#2)
* [Bid-as-latest-as-possible](#3)
* [Bid-as-efficient-as-possible](#4)


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

### <a name="3"></a> Bid as latest as possible

Create a bid as latest as possible using the 'timeleft'-information and the 'setTimeout'-function

### <a name="4"></a> Bid as efficient as possible

Fetch data from the bidding round and only bid 10% more than the highest bidder
