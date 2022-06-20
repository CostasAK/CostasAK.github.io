export const Heading = {
  variants: {
    container: ({ colorMode }) => ({
      padding: "0 0.5rem",
      margin: "-1.8rem 0 1rem",
      fontSize: "md",
      fontWeight: "normal",
      bg: colorMode === "dark" ? "gray.900" : "white",
      w: "max",
    }),
    outline: ({ colorMode }) => {
      const bgColor =
        colorMode === "dark" ? "var(--chakra-colors-gray-900)" : "white";
      return {
        textShadow: `-4px 4px 0 ${bgColor}, 4px 4px 0 ${bgColor}, 4px -4px 0 ${bgColor}, -4px -4px 0 ${bgColor}, 0px -4px 0 ${bgColor}, 0px 4px 0 ${bgColor}, -4px 0px 0 ${bgColor}, 4px 0px 0 ${bgColor}`,
      };
    },
  },
};
