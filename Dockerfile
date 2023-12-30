FROM node:14.21.0
WORKDIR /code

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3000
HEALTHCHECK --interval=5s --timeout=5s --start-period=30s --retries=3 CMD curl -fs http://localhost:3000/api || exit

CMD [ "node","index.js" ]
