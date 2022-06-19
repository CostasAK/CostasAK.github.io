import { Center, Heading, VStack } from "@chakra-ui/react";

import { Bio } from "sections/Bio";
import { Socials } from "sections/Socials";

function App() {
  return (
    <Center h="100vh">
      <VStack spacing="2.5rem">
        <Heading as="h1" variant="outline">
          Costas A. Kokke
        </Heading>
        <Bio />
        <Socials />
      </VStack>
    </Center>
  );
}

export default App;
