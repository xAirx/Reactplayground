// Why should you care about Docker?

// Docker is simply one of the most important technologies at the moment.
// It lets you run apps inside containers that are mostly isolated from “everything”.

// Each container is like an individual virtual machine stripped out
// of everything that is not needed to run your app.
// This makes containers very light, fast and secure.

// Containers are also meant to be disposable.
// If one goes rogue, you can kill it and make another just
// like it with no effort thanks to the container images system.

// Another thing that makes Docker great is that the app inside containers will run the same
// in every system(Windows, Mac, or Linux).This is awesome if you are developing in your machine
// and then you want to deploy it to some cloud provider like GCP or AWS.

// Before the wide adoption of containerization and docker developers develop
// their web apps and everything works perfectly in development machine but
// when they push it to the production environment it doesn’t work.
// This was because the development environment and production environment
// are not the same and that causes problems.There is also another issue
// if there is an error or a bug in the production environment it is very
// difficult to figure out what is wrong and solve that issue since that
// issue might not be in your local setup.

// This is where containerization technologies like docker come in.
// Docker solves the above issues by packaging your web app with all your dependencies
// and shipping it to production.This container is self - sufficient and can be run anywhere,
// The environment running the container doesn’t care what is in the container(It just works)
// When you use Docker for development and production you will not run into unforeseen productionissues
//  or bugs since you are using the same container you have been running locally in production.