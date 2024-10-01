FROM node:alpine

COPY .  .

run npm i

expose 3000

CMD ["npm", "run", "dev"]
