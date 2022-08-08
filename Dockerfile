FROM node:alpine3.14
COPY . /src
RUN cd /src && npm install
EXPOSE 8080
CMD ["node", "/src/server.js"]
