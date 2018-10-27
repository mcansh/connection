FROM mhart/alpine-node:11
WORKDIR /usr/src
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
RUN yarn export -o /public
