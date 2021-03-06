import "@fontsource/press-start-2p";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import theme from "theme";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider resetCSS={true} theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </StrictMode>
);
