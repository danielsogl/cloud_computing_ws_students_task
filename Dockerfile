# Base OS from Dockerhub
FROM node:8-alpine
# copy local data into image
ADD . /myApp/
# install packages
RUN cd /myApp && npm install
# set working directory
WORKDIR /myApp
# set default MongoDB URI
ENV MONGO_DB mongodb://localhost:27017/dhbw
# start command
CMD node index.js
