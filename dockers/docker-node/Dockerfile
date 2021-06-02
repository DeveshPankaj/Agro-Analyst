FROM node:14

# Create app directory
WORKDIR /home

RUN apt-get update

# Install app dependencies
RUN npm install
RUN npm i -g nodemon


# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
# COPY . .

EXPOSE 3000/tcp

# run nodemon while development
CMD [ "nodemon", "app" ]

