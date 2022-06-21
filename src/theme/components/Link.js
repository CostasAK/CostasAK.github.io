export const Link = {
  baseStyle: ({ colorMode }) => ({
    color: colorMode === "dark" ? "blue.400" : "blue.500",
  }),
  variants: {
    linkedin: ({ colorMode }) => ({
      color: "#2577b9",
      _hover: {
        filter: colorMode === "dark" ? "brightness(1.25)" : "brightness(0.75)",
      },
    }),
    github: ({ colorMode }) => ({
      color: colorMode === "dark" ? "#f3f1f1" : "#2a2d2f",
      _hover: {
        filter: colorMode === "dark" ? "brightness(1.25)" : "brightness(0.75)",
      },
    }),
    kofi: ({ colorMode }) => ({
      color: "#ff5e5b",
      _hover: {
        filter: colorMode === "dark" ? "brightness(1.25)" : "brightness(0.75)",
      },
    }),
  },
};
