/* So far we've been writing React without JSX, something that

I don't know anyone that actually does with their apps. _Everyone_ uses JSX.

I show you this way so what JSX is actually doing is demystified to you.

It doesn't do hardly anything.

It just makes your code a bit more readable.

If I write `React.createElement("h1", { id: "main-title" }, "My Website");`,

 what am I actually trying to have rendered out? `<h1 id="main-title">My Website</h1>`, right?

What JSX tries to do is to shortcut this translation layer in your brain so you can just write what you mean.

Let's convert Pet.js to using JSX. It will look like this:
 */

const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};
export default Pet;

/* I don't know about you, but I find this far more readable.

now you know _what_ JSX is doing for you. It's just translating those HTML tags into `React.createElement` calls. _That's it._ Really.

No more magic here. JSX does nothing else.
 */
