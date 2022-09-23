FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY . .
EXPOSE 8022
RUN chown -R node /usr/src/app
USER node
CMD [ "node", "app.js" ]
