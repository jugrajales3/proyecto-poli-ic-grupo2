# pull de una imagen oficial de Node
FROM node:20.2.0-alpine3.17

# se establece el directorio de trabajo
WORKDIR /app

# agregar `/app/node_modules/.bin` a la variable de entorno $PATH
ENV PATH /app/node_modules/.bin:$PATH

# instalar dependencias
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]
