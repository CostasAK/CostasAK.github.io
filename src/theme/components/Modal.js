import { mode } from "@chakra-ui/theme-tools";

export const Modal = {
  baseStyle: (props) => ({
    dialog: {
      color: "var(--chakra-colors-chakra-body-text)",
      background: mode(
        "var(--chakra-colors-chakra-body-bg)",
        "gray.900"
      )(props),
      paddingBlock: 6,
      paddingInline: 8,
      borderColor: "var(--chakra-colors-chakra-body-text)",
      borderWidth: "4px",
      borderStyle: "solid",
      borderRadius: 0,
      borderImageSlice: 3,
      borderImageWidth: 3,
      borderImageRepeat: "stretch",
      borderImageOutset: 0,
      borderImageSource: `url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(${mode(
        "33,37,41",
        "255,255,255"
      )(props)})" /></svg>')`,
    },
  }),
};
