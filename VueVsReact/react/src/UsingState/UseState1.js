/* React alternative: The useState hook
 */
/* In Vue the data option is used to store local component state.
 */

/* React exposes a useState hook which returns a two-element array containing the current state value and a setter function.
 */
import { useState } from 'react';

export default function ButtonCounter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

/* You can choose whether you prefer to distribute state between multiple useState calls, or keep it in a single object.
 */
import { useState } from 'react';

export default function ProfileForm() {
  const [name, setName] = useState('Sebastian');
  const [email, setEmail] = useState('sebastian@spatie.be');

  // ...
}

import { useState } from 'react';

export default function ProfileForm() {
  const [values, setValues] = useState({
    name: 'Sebastian',
    email: 'sebastian@spatie.be'
  });

  // ...
}
