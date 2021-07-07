FROM node:10-alpine

USER root:node

RUN mkdir -p /App/node_modules && \
    chown -R node:node /App

WORKDIR /App

COPY package.json ./
COPY package-lock.json ./


RUN npm install


COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "app.js" ]
#CMD [ "npm", "start" ]