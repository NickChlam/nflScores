FROM node:10

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g @angular/cli@6.0.8

EXPOSE 4200 49153

COPY . /usr/src/app

RUN npm install

COPY . .
