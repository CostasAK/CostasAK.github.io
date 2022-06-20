import { colors } from "theme/colors";
import { components } from "theme/components";
import { config } from "theme/config";
import { extendTheme } from "@chakra-ui/react";
import { fonts } from "theme/fonts";
import { styles } from "theme/styles";

export default extendTheme({
  config,
  styles,
  colors,
  fonts,
  components,
});
