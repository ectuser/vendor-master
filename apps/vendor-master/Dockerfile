FROM node:20

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY ./apps/vendor-master/ ./

EXPOSE 5111

CMD ["npm", "run", "frontend"]
