import {
  Box,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Td,
  Text,
  Tr,
  VStack,
  forwardRef,
  useDisclosure,
} from "@chakra-ui/react";

import { CrossIcon } from "assets/cross";

const PublicationElement = ({ name, children }) =>
  children ? (
    <Box>
      <Heading
        as="h2"
        size="xs"
        color="gray.600"
        _dark={{ color: "gray.400" }}
        textTransform="uppercase"
      >
        {name}
      </Heading>
      <Text>{children}</Text>
    </Box>
  ) : null;

export const Publication = forwardRef(
  (
    {
      title,
      authors,
      cited,
      published,
      conference,
      pages,
      publisher,
      abstract,
      ...props
    },
    ref
  ) => {
    const {
      isOpen: modalIsOpen,
      onOpen: onModalOpen,
      onClose: onModalClose,
    } = useDisclosure();

    return (
      <>
        <Tr
          onClick={onModalOpen}
          cursor="pointer"
          _hover={{ background: "gray.50" }}
          _dark={{ _hover: { background: "gray.800" } }}
        >
          <Td>{title}</Td>
          <Td>{published && published.slice(0, -3)}</Td>
        </Tr>
        <Modal
          isOpen={modalIsOpen}
          onClose={onModalClose}
          size="4xl"
          motionPreset="slideInRight"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton borderRadius={0}>
              <CrossIcon />
            </ModalCloseButton>
            <ModalBody>
              <VStack spacing={6} align="start">
                <PublicationElement name="Authors">
                  {authors}
                </PublicationElement>
                <PublicationElement name="cited">{cited}</PublicationElement>
                <PublicationElement name="published">
                  {published}
                </PublicationElement>
                <PublicationElement name="conference">
                  {conference}
                </PublicationElement>
                <PublicationElement name="pages">{pages}</PublicationElement>
                <PublicationElement name="publisher">
                  {publisher}
                </PublicationElement>
                <PublicationElement name="abstract">
                  {abstract}
                </PublicationElement>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }
);
