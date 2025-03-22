# Specify the parent image from which we build
FROM --platform=linux/amd64 node:19-alpine 

# Set the working directory

WORKDIR /app

# Copy files from your host to your current working directory

COPY package.json .

RUN npm install --force -y

COPY . .

# Command docker runs to start the app
CMD ["npm", "start"]