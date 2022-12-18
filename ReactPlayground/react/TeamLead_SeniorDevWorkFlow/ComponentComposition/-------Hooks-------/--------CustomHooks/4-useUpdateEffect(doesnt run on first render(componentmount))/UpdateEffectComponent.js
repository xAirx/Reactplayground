import { useState } from "react";
import useUpdateEffect from "./useUpdateEffect";
//www.youtube.com/watch?v=0c6znExIqRw&list=PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK&index=30
https: export default function UpdateEffectComponent() {
  const [count, setCount] = useState(10);
  useUpdateEffect(() => alert(count), [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
