import { Center, Container, Heading, Image, VStack } from "@chakra-ui/react";

import { Bio } from "sections/Bio";
import { Socials } from "sections/Socials";
import avatar from "./assets/avatar_140.jpg";
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
      <VStack spacing="2.5rem">
        <Container variant="pixelCircle">
          <Image src={avatar} boxSize="280px" />
        </Container>
        <Heading as="h1" variant="outline" textAlign="center">
          Costas A. Kokke
        </Heading>
        <Bio />
        <Socials />
      </VStack>
    </Center>
  );
}

export default App;
