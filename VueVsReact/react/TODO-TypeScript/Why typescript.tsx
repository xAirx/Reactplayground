/*

Calling something of a null or undefined value its going to help you
Called functions without the right parameters its going to help you.
If you dont know the fields or typed in the wrong field names into objects its going to help you

It will help you code faster and let you know what the right fields are
and help you code the fields right away.

think TypeScript helps enforce some good habits in a few different ways.


#1 Easier Sketching data relationships

once you get used to the typings, you can start to sketch out relationships between data.
it becomes very natural when writing new code to sketch out the interfaces and relationships between data before you start writing code,
because you can use those right away when you start actually implementing your program, rather than just leaving them  as inert comments or
notes or thoughts in your head.


#2 Doing the proper code TS "yelling at you".

Depending on how you configure TypeScript you can make it so it's much more strict about checking for null and undefined,
which is a really good habit to get into.I've been guilty myself of getting lazy and thinking "well this could fail  as null or undefined,
but I'm just going to ignore it because it makes my code a lot simpler."
But if TypeScript is yelling at me I'm much more likely to do the proper thing and that's really good.


#3 Avoid Complexity, cleaner code.

if you're defining a type and it becomes hard to think about or it hard to describe a lot of times that's been an indication to me that "hey I'm making this more complicated than it needs to be"
or I'm I'm trying to do this in a way that might be clever now but it isn't going to stand up to the test of time.
I'm going to come back to this later be super confused or I'm going to have to hand this off to a co-worker and they're going to be super confused.


#4 Better IDE support (Productivity)

Better IDE support is one thing that's great is if you're using something like Visual Studio Code or JetBrains
WebStorm or any other IDE or Smart Text Editor with

TypeScript. You get way better auto completion so you can access things or call
functions and it's going to tell you "hey this is how you call this thing" or "hey that's an error you missed a parameter here" and that kind of thing.
If you've used just plain JavaScript in the past, you'll know that IDEs can be pretty good about guessing
what things might be, but there's a lot of times where you'll start typing a piece of code and it does the auto-completion and gives you every possible field name
that I've defined in my project as an option.

Which is massively unhelpful. With TypeScript you avoid that issue entirely, since it knows what the types
of things are, you get vastly better auto completion support. Which makes you a much
happier and more productive programmer.


*/
