// Dockerfile

// According to documentation:
// a Dockerfile is a text document that contains all the commands a user could call on the
// command line to assemble an image.
// Docker can build images automatically by reading the instructions from a Dockerfile.

// # Use a lighter version of Node as a parent image
// FROM mhart/alpine-node:8.11.4# Set the working directory to /api
// WORKDIR /api# copy package.json into the container at /api
// COPY package*.json /api/# install dependencies
// RUN npm install# Copy the current directory contents into the container at /api
// COPY . /api/# Make port 80 available to the world outside this container
// EXPOSE 80# Run the app when the container launches
// CMD ["npm", "start"]
