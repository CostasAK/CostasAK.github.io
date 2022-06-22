import { Link, Text } from "@chakra-ui/react";

import { SectionContainer } from "components/SectionContainer";

export const Bio = () => (
  <SectionContainer heading="Bio">
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
  </SectionContainer>
);
