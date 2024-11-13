FROM node:20

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY ./apps/auth-backend/ ./

EXPOSE 3000

CMD ["npm", "run", "server"]
