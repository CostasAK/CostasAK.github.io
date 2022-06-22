import { Button, forwardRef, useColorMode } from "@chakra-ui/react";

export const ColorModeSwitch = forwardRef((props, ref) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} pos="fixed" right="8" top="6">
      {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  );
});
