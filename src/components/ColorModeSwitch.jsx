import {
  Button,
  Icon,
  Tooltip,
  forwardRef,
  useColorMode,
} from "@chakra-ui/react";

import { AstralIcon } from "assets/astral";
import { UmbralIcon } from "assets/umbral";

export const ColorModeSwitch = forwardRef((props, ref) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip label={colorMode === "light" ? "Dark Mode" : "Light Mode"}>
      <Button
        onClick={toggleColorMode}
        size=""
        p="3px 4px"
        aria-label={`Switch to ${
          colorMode === "light" ? "Dark Mode" : "Light Mode"
        }`}
      >
        <Icon
          as={colorMode === "light" ? UmbralIcon : AstralIcon}
          boxSize="32px"
        />
      </Button>
    </Tooltip>
  );
});
