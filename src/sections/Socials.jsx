import {
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

import { GithubIcon } from "assets/github";

export const Socials = () => (
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
      <Link href="https://www.linkedin.com/in/costasak/" isExternal={true}>
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
);
