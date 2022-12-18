/* React way

There is no special way in React.

className is just an equivalent for

class attribute.

class is one of reserved keywords in JavaScript so JSX calls this className. */

return <button className="btn btn-primary">...</button>;

/* Although, classnames library will help you dealing with HTML classes.
 */

import classNames from "classnames";

/*
It's just like v-bind:class. */

const buttonClass = classNames({
  btn: true,
  "btn-primary": isPrimary,
});

return <button className={buttonClass}>...</button>;
