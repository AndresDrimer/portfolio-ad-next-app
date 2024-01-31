# Establecer la versión de Node.js
FROM node:18.18-alpine

# Crear directorio de la aplicación
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Si estás construyendo tu código para producción
RUN npm ci --only=production

# Copiar el resto del código de la aplicación
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Exponer el puerto que tu aplicación usará
EXPOSE 3000

# Comando para iniciar la aplicación
CMD [ "npm", "run", "start" ]
