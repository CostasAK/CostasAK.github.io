import { Center, Heading, Image, VStack } from "@chakra-ui/react";

import { Bio } from "sections/Bio";
import { Socials } from "sections/Socials";
import avatar from "./assets/avatar_140.jpg";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const updateInnerHeight = () =>
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight}px`
      );

    updateInnerHeight();

    window.addEventListener("resize", updateInnerHeight);

    return () => window.removeEventListener("resize", updateInnerHeight);
  }, []);

  return (
    <Center minH="var(--vh)" padding={["1rem", "2rem", "4rem"]}>
      <VStack spacing="2.5rem">
        <Image src={avatar} boxSize="280px" borderRadius="full" />
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
