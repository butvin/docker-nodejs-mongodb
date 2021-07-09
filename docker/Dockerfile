FROM node:14.17.2

WORKDIR "/app"
COPY package.json .
#RUN npm install --save express mongodb body-parser
#COPY package-lock.json .
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]