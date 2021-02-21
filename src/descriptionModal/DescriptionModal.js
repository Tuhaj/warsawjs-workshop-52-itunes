import {
  Button,
  Modal, ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Link
} from "@chakra-ui/react";

export function DescriptionModal({ result }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            dangerouslySetInnerHTML={{ __html: result.description }}
          />
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Close
            </Button>
            <Link href={result.trackViewUrl} isExternal='true'><Button type="button" colorScheme="blue">Buy Now</Button></Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
