import { Container, Heading, forwardRef } from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useIsMounted } from "hooks/useIsMounted";
import { useState } from "react";

const SectionHeader = ({ children, ...props }) =>
  children && (
    <Heading variant="container" {...props}>
      {children}
    </Heading>
  );

export const SectionContainer = forwardRef(
  ({ heading, children, headingAs = "h2", ...props }, ref) => {
    const isMounted = useIsMounted();

    const [isVisible, setIsVisible] = useState(false);

    return (
      <Container
        as={motion.div}
        opacity={isMounted && isVisible ? 1 : 0}
        transform={isMounted && isVisible ? "none" : "translateX(2rem)"}
        marginRight={isMounted && isVisible ? 0 : "-2rem"}
        transitionDuration="slower"
        onViewportEnter={() => setIsVisible(true)}
        onViewportLeave={() => setIsVisible(false)}
        viewport={{ margin: "-32px" }}
        ref={ref}
        {...props}
      >
        <SectionHeader
          as={headingAs}
          id={heading.toLowerCase().replace(" ", "-")}
        >
          {heading}
        </SectionHeader>
        {children}
      </Container>
    );
  }
);
