# Dependency installation stage.
FROM node:16-alpine AS dependencies

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
# to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /frontend/fullstack-react-docker-boilerplate/

COPY package.json package-lock.json ./

RUN npm ci

# React app build stage.
FROM node:alpine AS builder

WORKDIR /frontend/fullstack-react-docker-boilerplate/

COPY . .

COPY --from=dependencies /frontend/fullstack-react-docker-boilerplate/node_modules ./node_modules

RUN npm run build && npm install --production --ignore-scripts --prefer-offline

# Nginx configuration and running stage.
FROM nginx:alpine AS runner

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=builder /frontend/fullstack-react-docker-boilerplate/build .

# Setup Nginx Reverse Proxy

#COPY --from=build ***************/build /usr/share/nginx/html

#COPY --from=build **************nginx.conf /etc/nginx/conf.d/default.conf

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]


# Production

# Now that we have seen our development docker config let’s see the production one. The production docker config only needs the Dockerfile to run.

# The first stage of our Dockerfile is the same as the above config. Let's start with the build stage.

# In this stage, we are choosing alpine as build stage base image.
# We are also setting the working directory to /app then we are copying all files in the current directory to the /app directory.

# After that, we are copying all dependencies downloaded and stored in the /app/node_modules directory to node_modules directory
# from the previous dependencies stage.

# After that, we are running npm run build after npm install --production --ignore-scripts --prefer-offlineThis will build an optimized build of our ReactJs application.

# The next stage is where we run our web server using Nginx This is where things get interesting. We are going to use the default Nginx config since we don’t need anything other than that to run our app.

# Nginx has some default configs and behaviors we need to know. Before getting into our docker config let’s see a few of them.

# Nginx serves static assets found in /usr/share/nginx/html directory. So all static assets like HTML, CSS, and Js need to be in this directory in order forNginx to serve them (We can also change this behavior by editing the default config file). By default Nginx runs on port 80

# We are choosing nginx:alpine as our runner since it has all packages we need and it is minimal in size.

# We are also setting our working directory to /user/share/nginx/html the default location where static assets are served from. Then we are removing all assets found in that directory using this directive RUN rm -rf ./* .

# Then we will copy our optimized build from the builder stage to the current working directory. Then we are going to run Nginx web server using the command nginx -g daemon off

# To build our docker image from this config run

# docker build -t reactjs-prod -f ./production/Dockerfile .

# We are naming the image reactjs-prod and we are going to use the production Dockerfile in the production directory.

# To run the built image in interactive mode we will use the following docker command.

# docker run -it -p 80:80 reactjs-prod:latest

# The -it flag tells docker to run the container in interactive mode so that we can see the log. The -p flag tells docker to map port 80 of our machine to port 80 of our container.

# This command will spin up the production docker container running Nginx server.