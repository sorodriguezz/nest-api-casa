FROM node:16.20 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:16.20
WORKDIR /usr/src/app
COPY --from=build /usr/src/app .
EXPOSE 3001
CMD ["node", "dist/main"]
