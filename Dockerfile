FROM node:16.14-alpine3.14

WORKDIR /app

COPY package* ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]