import {
  Center,
  Container,
  HStack,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";

import { BackToTopButton } from "components/BackToTopButton";
import { Bio } from "sections/Bio";
import { ColorModeSwitch } from "components/ColorModeSwitch";
import { ContentsButton } from "components/ContentsButton";
import { Projects } from "sections/Projects";
import { Publications } from "sections/Publications";
import { Socials } from "sections/Socials";
import avatar from "./assets/avatar_12b_140.jpg";
import { useMount } from "hooks/useMount";

const sections = [
  {
    name: "Bio",
    component: Bio,
  },

  {
    name: "Socials",
    component: Socials,
  },

  {
    name: "Projects",
    component: Projects,
  },

  {
    name: "Publications",
    component: Publications,
  },
];

const updateInnerHeight = () =>
  document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);

function App() {
  useMount(() => {
    updateInnerHeight();

    window.addEventListener("resize", updateInnerHeight);

    return () => window.removeEventListener("resize", updateInnerHeight);
  });

  return (
    <Center minH="var(--vh)" padding={[4, 8, 16]} overflowX="hidden">
      <HStack pos="fixed" right="4" top="3" zIndex="sticky" spacing={4}>
        <ColorModeSwitch />
        <ContentsButton sections={sections} />
      </HStack>
      <VStack spacing={10}>
        <Container variant="pixelCircle">
          <Image src={avatar} boxSize="280px" />
        </Container>
        <Heading as="h1" variant="outline" textAlign="center">
          Costas A. Kokke
        </Heading>
        {sections.map((section, index) => (
          <section.component key={index} />
        ))}
      </VStack>
      <BackToTopButton />
    </Center>
  );
}

export default App;
