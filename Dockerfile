# Étape de BUILD
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# RUN npm run build

# Étape de RUN
FROM node:14 as run
WORKDIR /app
COPY --from=build /app .
EXPOSE 8080
CMD [ "node", "server.js" ]
