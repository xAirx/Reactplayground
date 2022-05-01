import { useEffect, useRef } from "react";
//www.youtube.com/watch?v=0c6znExIqRw&list=PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK&index=30
https: export default function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}
