# Usa la imagen oficial de Node.js como base
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia todos los archivos del proyecto al contenedor
COPY . .

# Expone el puerto 3000 para la API
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "src/index.js"]