// impler explanation

// The EXPOSE instruction exposes the specified port and makes it available only for inter-container communication. Let’s understand this with the help of an example.

// Let’s say we have two containers, a nodejs application and a redis server. Our node app needs to communicate with the redis server for several reasons.

// For the node app to be able to talk to the redis server, the redis container needs to expose the port. Have a look at the Dockerfile of official redis image and you will see a line saying EXPOSE 6379. This is what helps the two containers to communicate with each other.

// So when your nodejs app container tries to connect to the 6379 port of the redis container, the EXPOSE instruction is what makes this possible.

// Note: For the node app server to be able to communicate with the redis container, it’s important that both the containers are running in the same docker network.
// Binding the container port with the host

// So EXPOSE helps in inter-container communication. What if, there’s a need to bind the port of the container with that of the host machine on which the container is running?

// Pass the -p (lower case p) as a option to the docker run instruction as follows

//     docker run -p <HOST_PORT>:<CONTAINER:PORT> IMAGE_NAME

// Find out more about this in the official documentation.


// Final thoughts

// I don’t think there’s any need to use the EXPOSE instruction in your own Dockerfile if the docker image is simply a web app. You might want to use it when you are distributing your Dockerfile to others and letting them connect to the application.

// One benefit of using the EXPOSE instruction, whether you are running a multi-container application or not, is that it helps others understand what port the application listens by just reading the Dockerfile without the need of going through your code.