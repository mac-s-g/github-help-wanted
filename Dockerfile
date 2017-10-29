FROM node:8.1.2-slim
MAINTAINER Mac Gainor <mac.gainor@gmail.com>

# install the node modules at container build time
RUN mkdir -p /react
ADD package.json /react/package.json
RUN cd /react && npm install

# add project code
ADD . /react
WORKDIR /react

EXPOSE 3100
ENTRYPOINT ["/react/entrypoints/build.sh"]

