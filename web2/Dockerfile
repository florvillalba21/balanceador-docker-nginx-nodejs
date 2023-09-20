FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 80

# Establecer una variable de entorno personalizada en el contenedor
ENV NODE_ENV=web2

CMD ["npm", "start"]
