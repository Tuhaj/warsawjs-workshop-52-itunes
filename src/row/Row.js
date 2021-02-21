import {
  Button,
  Image,
  Td,
  Tr,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { DescriptionModal } from "../descriptionModal/DescriptionModal";

export const Row = props =>{
  const result = props.result
  return (
    <Tr>
      <Td>
        <Image src={result.artworkUrl60} />
      </Td>
      <Td>{result.trackName}</Td>
      <Td isNumeric>{result.formattedPrice}</Td>
      <Td>
        <DescriptionModal result={result} />
      </Td>
    </Tr>
  );
}
