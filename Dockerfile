# Étape de BUILD pour le backend et le frontend
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
RUN npm run build
WORKDIR /app

# Étape de RUN
FROM node:14 as run
WORKDIR /app
COPY --from=build /app .
EXPOSE 8080
CMD [ "node", "server/start.js" ]