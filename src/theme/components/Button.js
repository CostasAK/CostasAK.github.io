export const Button = {
  baseStyle: ({ colorMode, backgroundColor }) => {
    return {
      position: "relative",
      display: "inline-block",
      borderStyle: "solid",
      borderWidth: "4px",
      borderRadius: 0,
      borderImageSlice: 2,
      borderImageWidth: 2,
      borderImageRepeat: "stretch",
      borderImageSource:
        colorMode === "dark"
          ? `url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(255,255,255)" /></svg>')`
          : `url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>')`,
      borderImageOutset: 2,
      background: "none",
      backgroundColor:
        colorMode === "dark"
          ? "gray.900"
          : "var(--chakra-colors-chakra-body-bg)",
      padding: "6px 8px",
      margin: "4px",
      textAlign: "center",
      verticalAlign: "middle",
      _before: {
        content: "''",
        position: "absolute",
        inset: "-4px",
      },
      _after: {
        content: "''",
        position: "absolute",
        inset: "-4px",
        boxShadow: "inset -4px -4px rgba(128, 128, 128, 0.5)",
      },
      _hover: {
        background: "none",
        backgroundColor: backgroundColor
          ? backgroundColor
          : colorMode === "dark"
          ? "gray.900"
          : "var(--chakra-colors-chakra-body-bg)",
        _before: {
          boxShadow: `inset 0 0 0 100vmax rgba(128, 128, 128, 0.15)`,
        },
        _after: {
          boxShadow: "inset -6px -6px rgba(128, 128, 128, 0.5)",
        },
      },
      _focus: {
        boxShadow: "0 0 0 6px rgba(128, 128, 128, 0.5)",
      },
      _active: {
        background: "none",
        backgroundColor: backgroundColor
          ? backgroundColor
          : colorMode === "dark"
          ? "gray.800"
          : "gray.100",
        _before: {
          boxShadow: `inset 0 0 0 100vmax rgba(128, 128, 128, 0.15)`,
        },
        _after: {
          boxShadow: "inset 4px 4px rgba(128, 128, 128, 0.5)",
        },
      },
    };
  },
  variants: {
    primary: {
      color: "white",
      backgroundColor: "blue.400",
      _after: {
        boxShadow: "inset -4px -4px var(--chakra-colors-blue-600)",
      },
      _hover: {
        backgroundColor: "blue.500",
        _before: {
          boxShadow: `none`,
        },
        _after: {
          boxShadow: "inset -6px -6px var(--chakra-colors-blue-600)",
        },
      },
      _active: {
        backgroundColor: "blue.500",
        _before: {
          boxShadow: `none`,
        },
        _after: {
          boxShadow: "inset 4px 4px var(--chakra-colors-blue-600)",
        },
      },
    },
    success: {
      color: "white",
      backgroundColor: "green.400",
      _after: {
        boxShadow: "inset -4px -4px var(--chakra-colors-green-600)",
      },
      _hover: {
        backgroundColor: "green.500",
        _before: {
          boxShadow: `none`,
        },
        _after: {
          boxShadow: "inset -6px -6px var(--chakra-colors-green-600)",
        },
      },
      _active: {
        backgroundColor: "green.500",
        _before: {
          boxShadow: `none`,
        },
        _after: {
          boxShadow: "inset 4px 4px var(--chakra-colors-green-600)",
        },
      },
    },
    warning: {
      color: "gray.900",
      backgroundColor: "yellow.400",
      _after: {
        boxShadow: "inset -4px -4px var(--chakra-colors-yellow-600)",
      },
      _hover: {
        backgroundColor: "yellow.500",
        _before: {
          boxShadow: `none`,
        },
        _after: {
          boxShadow: "inset -6px -6px var(--chakra-colors-yellow-600)",
        },
      },
      _active: {
        backgroundColor: "yellow.500",
        _before: {
          boxShadow: `none`,
        },
        _after: {
          boxShadow: "inset 4px 4px var(--chakra-colors-yellow-600)",
        },
      },
    },
    error: {
      color: "white",
      backgroundColor: "red.400",
      _after: {
        boxShadow: "inset -4px -4px var(--chakra-colors-red-600)",
      },
      _hover: {
        backgroundColor: "red.500",
        _before: {
          boxShadow: `none`,
        },
        _after: {
          boxShadow: "inset -6px -6px var(--chakra-colors-red-600)",
        },
      },
      _active: {
        backgroundColor: "red.500",
        _before: {
          boxShadow: `none`,
        },
        _after: {
          boxShadow: "inset 4px 4px var(--chakra-colors-red-600)",
        },
      },
    },
  },
};
