/* There’s no modifier syntax in React.
Preventing defaults and stopping propagation is mostly h
andled in the callback. */

export default function AjaxForm() {
  function submitWithAjax(event) {
    event.preventDefault();
    // ...
  }

  return (
    <form onSubmit={submitWithAjax}>
      {/* ... */}
    </form>
  );
}
/*
If you really want to have something modifier - like,
    you could use a higher order function. */

function prevent(callback) {
  return (event) => {
      event.preventDefault();
      callback(event);
  };
}

export default function AjaxForm() {
  function submitWithAjax(event) {
    // ...
  }

  return (
    <form onSubmit={prevent(submitWithAjax)}>
      {/* ... */}
    </form>
  );
}
