
FROM node:14
# COPY . /home
WORKDIR /home

RUN apt-get update
RUN apt-get install -y r-base
RUN npm i -g nodemon

# install node if base image is 'r-base'
# RUN apt-get install --assume-yes nodejs
# RUN apt-get install --assume-yes npm

# run nodemon while development
CMD ["nodemon", "app"]

