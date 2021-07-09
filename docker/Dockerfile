FROM node:14.17.2

#ARG DEBIAN_FRONTEND=noninteractive

WORKDIR "/app"
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]