/* React has no equivalent for watchers.

You can implement something like that using useEffect hook.
I will show you that hook in next section.

But I oftern think that there're not so many use-cases for the watch option, because most of the time,
it can be replaced with on - change event. */

import { useEffect, useState } from 'react';

export default function AjaxToggle() {
  const [checked, setChecked] = useState(false);

  function syncWithServer(checked) {
    // ...
  }

  useEffect(() => {
    syncWithServer(checked);
  }, [checked]);

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
}

/* Note that useEffect will also run in the first render. This is the same as using the immediate parameter in a Vue watcher.

If you don’t want the effect to run on the first render, you’ll need to create a ref to store whether or not the first render has happened yet or not.
 */

import { useEffect, useRef, useState } from 'react';

export default function AjaxToggle() {
  const [checked, setChecked] = useState(false);
  const firstRender = useRef(true);

  function syncWithServer(checked) {
    // ...
  }

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    syncWithServer(checked);
  }, [checked]);

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
}
