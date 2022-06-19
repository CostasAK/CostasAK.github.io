import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      50: "#F1F2F4",
      100: "#D7DBDF",
      200: "#BEC4CB",
      300: "#A5ADB6",
      400: "#8B96A2",
      500: "#727F8D",
      600: "#5B6671",
      700: "#444C55",
      800: "#2D3339",
      900: "#17191C",
    },
    red: {
      50: "#FCECE9",
      100: "#F6CAC0",
      200: "#F0A798",
      300: "#EB8570",
      400: "#E56348",
      500: "#DF4020",
      600: "#B33419",
      700: "#862713",
      800: "#591A0D",
      900: "#2D0D06",
    },
    yellow: {
      50: "#FEFAE6",
      100: "#FDF2BA",
      200: "#FBEA8E",
      300: "#F9E261",
      400: "#F8D935",
      500: "#F6D109",
      600: "#C5A707",
      700: "#947E05",
      800: "#635403",
      900: "#312A02",
    },
    green: {
      50: "#F3FAEB",
      100: "#DFF0C7",
      200: "#CAE6A3",
      300: "#B5DC7E",
      400: "#A0D35A",
      500: "#8CC936",
      600: "#70A12B",
      700: "#547920",
      800: "#385016",
      900: "#1C280B",
    },
    teal: {
      50: "#E9FCF8",
      100: "#C0F6EC",
      200: "#98F1DF",
      300: "#70EBD3",
      400: "#47E6C6",
      500: "#1FE0BA",
      600: "#19B395",
      700: "#138670",
      800: "#0C5A4A",
      900: "#062D25",
    },
    cyan: {
      50: "#E5F9FF",
      100: "#B8EFFF",
      200: "#8AE5FF",
      300: "#5CDAFF",
      400: "#2ED0FF",
      500: "#00C6FF",
      600: "#009ECC",
      700: "#007799",
      800: "#004F66",
      900: "#002833",
    },
    blue: {
      50: "#E7F4FD",
      100: "#BDE2FA",
      200: "#92CFF7",
      300: "#67BCF3",
      400: "#3DA9F0",
      500: "#1296ED",
      600: "#0E78BE",
      700: "#0B5A8E",
      800: "#073C5F",
      900: "#041E2F",
    },
    purple: {
      50: "#EFF2F6",
      100: "#D1DBE6",
      200: "#B3C4D5",
      300: "#96ADC5",
      400: "#7896B5",
      500: "#5A7FA5",
      600: "#486684",
      700: "#364C63",
      800: "#243342",
      900: "#121921",
    },
    pink: {
      50: "#FDE7EA",
      100: "#FBBCC3",
      200: "#F8919D",
      300: "#F56677",
      400: "#F23B50",
      500: "#EF102A",
      600: "#BF0D21",
      700: "#8F0A19",
      800: "#600611",
      900: "#300308",
    },
  },
  fonts: {
    heading: `"Press Start 2P", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `"Press Start 2P", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `"Press Start 2P", SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },
  components: {
    Container: {
      baseStyle: ({ colorMode }) => ({
        padding: "1.5rem 2rem",
        border: "4px solid",
        borderColor: colorMode === "dark" ? "white" : "black",
        boxShadow:
          colorMode === "dark" && "0 0 0 4px var(--chakra-colors-gray-900)",
        bg: colorMode === "dark" ? "gray.900" : "white",
      }),
    },
    Heading: {
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
    },
    Image: {
      variants: {
        invertIfDark: {
          filter: "invert(1)",
        },
      },
    },
    Link: {
      baseStyle: ({ colorMode }) => ({
        color: colorMode === "dark" ? "blue.400" : "blue.500",
      }),
    },
  },
  styles: {
    global: {
      body: {
        imageRendering: "pixelated",
      },
    },
  },
  config: { useSystemColorMode: true, initialColorMode: "system" },
});
