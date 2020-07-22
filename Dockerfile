# Specify a base image
FROM node:alpine

# Specify workdir
WORKDIR /usr/app

# Copy package.json to container
COPY package*.json .

# Install dependencies
RUN npm install
COPY . .

# Default command
CMD ["npm", "start"]