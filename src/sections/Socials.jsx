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
import { KofiIcon } from "assets/kofi";
import { LinkedinIcon } from "assets/linkedin";

export const Socials = () => (
  <Container>
    <Heading as="h2" variant="container">
      Socials
    </Heading>
    <Flex justify="space-evenly" align="flex-end" wrap="wrap" gap="6">
      <Link
        href="https://www.linkedin.com/in/costasak/"
        isExternal={true}
        variant="linkedin"
      >
        <VStack align="center">
          <Icon as={LinkedinIcon} boxSize="64px" />
          <Text>LinkedIn</Text>
        </VStack>
      </Link>
      <Link
        href="https://github.com/CostasAK"
        isExternal={true}
        variant="github"
      >
        <VStack align="center">
          <Icon as={GithubIcon} boxSize="64px" />
          <Text>GitHub</Text>
        </VStack>
      </Link>
      <Link href="https://ko-fi.com/CostasAK" isExternal={true} variant="kofi">
        <VStack align="center">
          <Icon as={KofiIcon} boxSize="64px" />
          <Text>Ko-fi</Text>
        </VStack>
      </Link>
    </Flex>
  </Container>
);
