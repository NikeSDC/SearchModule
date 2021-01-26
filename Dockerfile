FROM node:latest
RUN mkdir /app/src
WORKDIR /app/src
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]