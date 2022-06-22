export const Link = {
  baseStyle: ({ colorMode }) => ({
    color: colorMode === "dark" ? "blue.400" : "blue.500",
    _hover: {
      filter: "opacity(0.8)",
    },
  }),
  variants: {
    linkedin: ({ colorMode }) => ({
      color: "#2577b9",
    }),
    github: ({ colorMode }) => ({
      color: colorMode === "dark" ? "#f3f1f1" : "#2a2d2f",
    }),
    kofi: ({ colorMode }) => ({
      color: "#29abe0",
    }),
  },
};
