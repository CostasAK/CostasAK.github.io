export const Container = {
  baseStyle: ({ colorMode }) => ({
    padding: "1.5rem 2rem",
    border: "4px solid",
    borderColor: colorMode === "dark" ? "white" : "black",
    boxShadow:
      colorMode === "dark" && "0 0 0 4px var(--chakra-colors-gray-900)",
    bg: colorMode === "dark" ? "gray.900" : "white",
  }),
};
