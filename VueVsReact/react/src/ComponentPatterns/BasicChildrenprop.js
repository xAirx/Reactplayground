/* React is great for building reusable components.

Components often come in multiple variations – most of the time we can pass props to the component and all good.

<Buttoncolor="red"text="Click me!"/>

However, what if we build a component that doesn’t only change in style but also contains different JSX?

This is often the case with complex, nested components like accordions, carousels and tabs or buttons with text and icon.

To keep it simple, imagine a <Post /> component for a blog post. All posts look alike but vary in content. */

//App.js

<Post>
  <h1> Post title</h1>
  <p> Post content</p>
  <p> Post content</p>
</Post>;

// Simple post component

export const Post = () => {
  return (
    <section>
      <div>.....Post content here....</div>
    </section>
  );
};

/* It’s just that this solution doesn’t look simple and clean. It’s not that we want to pass certain properties to the component, it’s more that we want to define what’s inside.

In this case, use React children! */

const PostContainer = ({ post }) => (
<Post>
  header={<h1> Post title</h1>}
  title=<p> Post content</p>
  content=<p> Post content</p>
  </Post>
  }

const User = ({ user }) => (
  <Profile
    user={user}
    avatar={<AvatarRound user={user} />}
    biography={<BiographyFat user={user} />}
  />
);

//The profile component recieves the user prop and renders the avatar and biography

const Profile = ({ user, avatar, biography }) => (
  <div className="profile">
    <div>{avatar}</div>
    <div>
      <p>{user.name}</p>
      {biography}
    </div>
  </div>
);

// content (can be function, component, anything really) passed via children prop

export const Post = ({ children }) => {
  return <section>{children}</section>;
};
