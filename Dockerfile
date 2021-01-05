FROM node:lts

WORKDIR /root

COPY package*.json ./
RUN ["npm", "install", "-g", "npm"]
RUN ["npm", "audit", "fix"]
RUN ["npm", "install"]

COPY ./*.js ./
COPY static ./static
COPY views ./views

COPY conf.d/* /etc/dashboard/

EXPOSE 80

CMD ["node", "index.js"]
