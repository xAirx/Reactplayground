/* With React, you need to manually pass className and style props.
Note that style must be an object with React, strings are not supported.
 */

//parent passing properties to child component using props property
{/* <Post
  title="About CSS"
  className="margin-bottom"
  style={{ color: 'red' }}
/> */}

export default function Post({ title, className, style }) {
  return (
    <article className={className} style={style}>
      {title}
    </article>
  );
}

/* If you want to pass down all remaining props, the object rest spread operator comes in handy.
 */

export default function Post({ title, ...props }) {
  return (
    <article {...props}>
      {title}
    </article>
  );
}
