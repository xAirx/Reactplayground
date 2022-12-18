//  Docker compose handles the network layer for you by itself and allows you to refer other containers by the service name mentioned in the docker-compose.yml file.


// Overview of Docker Compose

//     Accelerating new features in Docker Desktop

//     Docker Desktop helps you build, share, and run containers easily on Mac and Windows as you do on Linux. Docker handles the complex setup and allows you to focus on writing the code. Thanks to the positive support we received on the subscription updates, we’ve started working on Docker Desktop for Linux which is the second-most popular feature request in our public roadmap. If you are interested in early access, sign up for our Developer Preview program.

//     Looking for Compose file reference? Find the latest version here.

// Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration. To learn more about all the features of Compose, see the list of features.

// Compose works in all environments: production, staging, development, testing, as well as CI workflows. You can learn more about each case in Common Use Cases.

// Using Compose is basically a three-step process:

//     Define your app’s environment with a Dockerfile so it can be reproduced anywhere.

//     Define the services that make up your app in docker-compose.yml so they can be run together in an isolated environment.

//     Run docker compose up and the Docker compose command starts and runs your entire app. You can alternatively run docker-compose up using the docker-compose binary.

// A docker-compose.yml looks like this:

// version: "3.9"  # optional since v1.27.0
// services:
//   web:
//     build: .
//     ports:
//       - "8000:5000"
//     volumes:
//       - .:/code
//       - logvolume01:/var/log
//     links:
//       - redis
//   redis:
//     image: redis
// volumes:
//   logvolume01: {}

// For more information about the Compose file, see the Compose file reference.

// Compose has commands for managing the whole lifecycle of your application:

//     Start, stop, and rebuild services
//     View the status of running services
//     Stream the log output of running services
//     Run a one-off command on a service
