FROM node:alpine

RUN mkdir /usr/src && mkdir /usr/src/app
WORKDIR /usr/src/app
COPY appdynamics-nodejs-standalone-alpine-linux-x64-v10-4.5.6.0.tgz .
RUN npm install express ./appdynamics-nodejs-standalone-alpine-linux-x64-v10-4.5.6.0.tgz && rm appdynamics-nodejs-standalone-alpine-linux-x64-v10-4.5.6.0.tgz
COPY server.js .
COPY package.json . 

EXPOSE 8080
CMD [ "npm", "start" ]

