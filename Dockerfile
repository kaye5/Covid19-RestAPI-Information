FROM node:alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

ENV PORT=3000
ENV JWT_KEY=3000

RUN yarn install --pure-lockfile --non-interactive

COPY . .

EXPOSE 3000

CMD ["node","server.js"]