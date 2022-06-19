import {
  Center,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

import { GithubIcon } from "./assets/github";

function App() {
  return (
    <Center h="100vh">
      <VStack spacing="2.5rem">
        <Heading as="h1" variant="outline">
          Costas A. Kokke
        </Heading>
        <Container>
          <Heading as="h2" variant="container">
            Bio
          </Heading>
          <Text>
            I'm currently researching adaptive radar technologies and optimised
            resource allocation as a doctoral student at the{" "}
            <Link href="https://www.tudelft.nl/en/" isExternal={true}>
              Delft University of Technology
            </Link>{" "}
            in cooperation with the{" "}
            <Link href="https://www.tno.nl/en/" isExternal={true}>
              Netherlands Organisation for applied scientific research
            </Link>{" "}
            and{" "}
            <Link
              href="https://english.defensie.nl/topics/netherlands-defence-academy"
              isExternal={true}
            >
              Netherlands Defence Academy
            </Link>
            .
          </Text>
        </Container>
        <Container>
          <Heading as="h2" variant="container">
            Socials
          </Heading>
          <Flex
            justify="space-evenly"
            align="flex-end"
            wrap="wrap"
            spacing="8"
            shouldWrapChildren={true}
          >
            <Link
              href="https://www.linkedin.com/in/costasak/"
              isExternal={true}
            >
              LinkedIn
            </Link>
            <Link href="https://github.com/CostasAK" isExternal={true}>
              <VStack align="center">
                <Icon as={GithubIcon} boxSize="48px" />
                <Text>GitHub</Text>
              </VStack>
            </Link>
            <Link href="https://ko-fi.com/CostasAK" isExternal={true}>
              Ko-fi
            </Link>
          </Flex>
        </Container>
      </VStack>
    </Center>
  );
}

export default App;
