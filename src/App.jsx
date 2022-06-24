import { Center, Container, Heading, Image, VStack } from "@chakra-ui/react";

import { BackToTopButton } from "components/BackToTopButton";
import { Bio } from "sections/Bio";
import { ColorModeSwitch } from "components/ColorModeSwitch";
import { Publications } from "sections/Publications";
import { Socials } from "sections/Socials";
import avatar from "./assets/avatar_12b_140.jpg";
import { useMount } from "hooks/useMount";

const updateInnerHeight = () =>
  document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);

function App() {
  useMount(() => {
    updateInnerHeight();

    window.addEventListener("resize", updateInnerHeight);

    return () => window.removeEventListener("resize", updateInnerHeight);
  });

  return (
    <Center minH="var(--vh)" padding={["1rem", "2rem", "4rem"]}>
      <ColorModeSwitch />
      <VStack spacing="2.5rem">
        <Container variant="pixelCircle">
          <Image src={avatar} boxSize="280px" />
        </Container>
        <Heading as="h1" variant="outline" textAlign="center">
          Costas A. Kokke
        </Heading>
        <Bio />
        <Socials />
        <Publications />
      </VStack>
      <BackToTopButton />
    </Center>
  );
}

export default App;