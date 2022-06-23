import { useMount } from "hooks/useMount";
import { useState } from "react";

export const useIsMounted = () => {
  const [mounted, setMounted] = useState(false);

  useMount(() => {
    setMounted(true);

    return () => setMounted(false);
  });

  return mounted;
};
