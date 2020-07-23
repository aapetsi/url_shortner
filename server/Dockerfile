# Specify a base image
FROM node:12-alpine

# Create app directory
RUN mkdir -p /usr/src/app

# Specify workdir
WORKDIR /usr/src/app

# Copy package.json to container
COPY package*.json ./

# Install dependencies
RUN npm install
COPY . .

# Exports
EXPOSE 3000

# Default command
CMD ["npm", "start"]