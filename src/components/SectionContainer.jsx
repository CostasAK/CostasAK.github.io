import { Container, Heading, forwardRef } from "@chakra-ui/react";

import { motion } from "framer-motion";

const SectionHeader = ({ children, ...props }) =>
  children && (
    <Heading variant="container" {...props}>
      {children}
    </Heading>
  );

export const SectionContainer = forwardRef(
  ({ heading, children, headingAs = "h2", ...props }, ref) => {
    return (
      <Container
        as={motion.div}
        direction="right"
        initial={{ opacity: 0, transform: "translate3d(2rem, 0, 0)" }}
        animate={{ opacity: 1, transform: "none" }}
        ref={ref}
        {...props}
      >
        <SectionHeader as={headingAs}>{heading}</SectionHeader>
        {children}
      </Container>
    );
  }
);
