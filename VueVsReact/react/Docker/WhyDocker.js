// Why should you care about Docker?

https://www.youtube.com/watch?v=31ieHmcTUOk&list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7




// it can make developing applications either on your own or in a
// team much easier to manage and the way it does that is by using what's known as
// containers to run applications in isolated environments on a computer like a node application for example or a react application or a mongodb service
// or something else entirely like a python

// imagine if i was in a dev team and i was making an application in a node.js environment and that node.js version that i needed for the application was a
// very specific version that had a feature i needed to use now also imagine that i wanted to share the application with another person on my team so that they
// can run it on their computer as well, well before they do that they'd have to set up their development environment to match mine to make sure the application
// runs correctly for example they'd have to have the same version of node.js installed that the application needs to run correctly they'd also need to

// install all the project dependencies and set up any configuration like
// environment variables to make sure everything works the same way so there'd be a significant setup process
// just to get the application running on another computer

// now imagine the same scenario but with multiple other applications as well all
// requiring their very own specific environment setup and these applications might need to be run on multiple
// different machines that would mean a lot of setup every time we want to run a different application which requires a different
// development environment even on our own machines because different applications might require different versions of node or python or php or something else and

// that's where docker and containers come into play

// so you can think of a container for now as like a box or a package that contains
// everything our application needs to run so all the source code dependencies the correct runtime environment and versions etc and this container can run our
// application then in isolation away from any other processes on our computer so
// it wouldn't matter what versions of node or python or anything else is installed on our computer because everything the application needs to run is inside the

// container and then this makes it much easier for me or other people in my team
// to run these different applications on our computers and we wouldn't need to worry about setting up different
// versions of anything or installing dependencies because it's all in the
// container itself a predictable consistent and isolated environment the
// only thing that i or someone else running these containers will need on their computer is docker to manage those
// containers and that's at the heart of what docker is all about

// it's a tool for managing containers





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
