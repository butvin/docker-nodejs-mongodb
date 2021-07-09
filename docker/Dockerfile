FROM node:14.17.2

WORKDIR "/app"
COPY package.json .

RUN npm install express --save
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]