export const Link = {
  baseStyle: ({ colorMode }) => ({
    color: colorMode === "dark" ? "blue.400" : "blue.500",
    _hover: {
      filter: "opacity(0.8)",
    },
  }),
  variants: {
    linkedin: ({ colorMode }) => ({
      color: colorMode === "dark" ? "#2577b9" : "#0a66c2",
    }),
    github: ({ colorMode }) => ({
      color: colorMode === "dark" ? "#f3f1f1" : "#2a2d2f",
    }),
    mastodon: ({ colorMode }) => ({
      color: colorMode === "dark" ? "#8c8dff" : "#595aff",
    }),
    kofi: ({ colorMode }) => ({
      color: "#29abe0",
    }),
  },
};
