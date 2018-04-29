FROM node:8.9-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
RUN npm install
CMD npm start