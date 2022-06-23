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
        pos="fixed"
        right="8"
        top="6"
        zIndex="sticky"
        paddingInline="2px"
      >
        <Icon
          as={colorMode === "light" ? UmbralIcon : AstralIcon}
          boxSize="32px"
          transform="translateY(-7px)"
        />
      </Button>
    </Tooltip>
  );
});
