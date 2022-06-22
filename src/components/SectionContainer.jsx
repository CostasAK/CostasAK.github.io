import { Container, Heading, forwardRef } from "@chakra-ui/react";

const SectionHeader = ({ children, ...props }) =>
  children && (
    <Heading variant="container" {...props}>
      {children}
    </Heading>
  );

export const SectionContainer = forwardRef(
  ({ heading, children, headingAs = "h2", ...props }, ref) => (
    <Container ref={ref} {...props}>
      <SectionHeader as={headingAs}>{heading}</SectionHeader>
      {children}
    </Container>
  )
);
