FROM node AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "build"]

FROM nginx 
WORKDIR /usr/share/nginx/html
COPY --from=build ./app/build .
CMD ["nginx", "-g", "daemon off;"]