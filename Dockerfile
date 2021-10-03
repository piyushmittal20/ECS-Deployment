FROM mhart/alpine-node:12

WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]