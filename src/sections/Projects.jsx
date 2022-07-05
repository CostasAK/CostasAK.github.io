import {
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";

import { SectionContainer } from "components/SectionContainer";

const projects = [
  {
    name: "Destiny 2 Buddy",
    href: "https://destiny2.kokke.eu",
    image: {
      src: "https://destiny2.kokke.eu/icons/mstile-icon-558.png",
      width: 558,
      height: 558,
    },
    description:
      "Reset timers, activity schedules, breakdowns and more for Destiny 2",
  },
  {
    name: "FFXIV Buddy",
    href: "https://ffxiv.kokke.eu",
    description: "Timers, checklists and more helpers for Final Fantasy XIV",
    image: {
      src: "https://ffxiv.kokke.eu/apple-touch-icon.png",
      width: 76,
      height: 76,
    },
  },
  {
    name: "Closed loop adaptive radar resource allocation (CLARA)",
    href: "https://cas.tudelft.nl/Research/project.php?id=184&pid=759",
    description:
      "My PhD project at the Delft University of Technology in cooperation with the Netherlands Organisation for applied scientific research and Netherlands Defence Academy.",
  },
];

export const Projects = () => {
  return (
    <SectionContainer heading="Projects">
      <VStack spacing={6} align="stretch">
        {projects.map((project, index) => {
          const name = project?.name;
          const description = project?.description;
          const image = project?.image?.src;
          const imageWidth = 2 * project?.image?.width + "px" || 24;
          const imageHeight = 2 * project?.image?.height + "px" || 24;

          return (
            <LinkBox
              key={index}
              _hover={{ background: "gray.50" }}
              _dark={{ _hover: { background: "gray.800" } }}
              px={2}
              py={1}
            >
              <Flex
                direction={index % 2 ? "row-reverse" : "row"}
                gap={4}
                align="center"
              >
                {image && (
                  <Image
                    src={image}
                    maxW={imageWidth}
                    maxH={imageHeight}
                    w={24}
                    h={24}
                    py={1}
                    alt={`${project.name} icon`}
                  ></Image>
                )}
                <VStack align="stretch">
                  <Heading as="h3" size="md">
                    <LinkOverlay href={project.href} isExternal>
                      {name}
                    </LinkOverlay>
                  </Heading>
                  {description && <Text>{description}</Text>}
                </VStack>
              </Flex>
            </LinkBox>
          );
        })}
      </VStack>
    </SectionContainer>
  );
};
