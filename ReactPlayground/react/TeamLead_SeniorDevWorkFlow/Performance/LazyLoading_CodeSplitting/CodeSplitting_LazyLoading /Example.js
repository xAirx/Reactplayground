/* Use lazy - loading / code splitting
https://www.freecodecamp.org/news/best-practices-for-react/


If you've spent some time in the JavaScript and React universe, you've most likely stumbled across bundling.For those of you who are hearing this term for the first time, let's see what the official React docs say:

Most React apps will have their files “bundled” using tools like Webpack, Rollup or Browserify.Bundling is the process of following imported files and merging them into a single file: a “bundle”. This bundle can then be included on a webpage to load an entire app at once.

Basically this is a great technique, but with the growth of your app comes a challenge.Your bundle starts growing as well.Especially when you're using big third-party libraries like three.js.

The pitfall is that this bundle needs to be always loaded completely, even when the user needs only a fraction of the code.This leads to performance issues because it can take an unnecessarily long time to load up your app.

To avoid this, there's a technique called code splitting where you split up your bundle into the pieces of the code your user needs. This is supported by the most common bundlers like Webpack, Rollup, and Browserify. The great benefit of it is that you can create multiple bundles and load them dynamically.

Splitting up your bundle helps you to lazy load only the things that are needed by the user.

To illustrate this, imagine you're going into a grocery store and just want to grab some bananas, apples, and bread. In that case you aren't buying the whole range of the store and then grab your bananas, apples and bread out of it.You're just interested in a fraction of the range. So why would you buy everything? It would take way longer and is of course more expensive.

I think it's important to be aware of the potential challenges that can arise as your app grows, and that there are certain techniques at hand to get rid of those issues. For further reading checkout the React docs. */