import { Button, Text, forwardRef } from "@chakra-ui/react";

import { useMount } from "hooks/useMount";
import { useState } from "react";

export const BackToTopButton = forwardRef((props, ref) => {
  const [scrolled, setScrolled] = useState(false);

  const updateScrolled = () => setScrolled(window.scrollY > 320);

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
      variant="error"
      pos="fixed"
      bottom="3"
      right="4"
      opacity={scrolled ? 1 : 0}
      transform={scrolled ? "none" : "translate3d(0, 2rem, 0)"}
      aria-label="Back to top"
    >
      <Text transform="rotate(90deg)" marginInlineStart="-3px">
        {"<"}
      </Text>
    </Button>
  );
});
