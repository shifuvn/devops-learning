FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY . .
RUN npm install --production --silent && mv node_modules ../
EXPOSE 80
EXPOSE 443
RUN chown -R node /usr/src/app
USER node
CMD ["node", "app.js"]
