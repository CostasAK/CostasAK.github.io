import { Button, Text, forwardRef } from "@chakra-ui/react";

import { useMount } from "hooks/useMount";
import { useState } from "react";

export const BackToTopButton = forwardRef((props, ref) => {
  const [scrolled, setScrolled] = useState(false);

  const updateScrolled = () =>
    setScrolled(window.scrollY > 0.5 * window.innerHeight);

  useMount(() => {
    updateScrolled();

    window.addEventListener("scroll", updateScrolled);

    return () => window.removeEventListener("scroll", updateScrolled);
  });

  return (
    <Button
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      backgroundColor="red.400"
      color="white"
      pos="fixed"
      bottom="6"
      right="8"
      opacity={scrolled ? 1 : 0}
      transform={scrolled ? "none" : "translate3d(0, 2rem, 0)"}
    >
      <Text transform="rotate(90deg)" marginInlineStart="-3px">
        {"<"}
      </Text>
    </Button>
  );
});
