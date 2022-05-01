import {
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface IImageViewer {
  isOpen: boolean;
  onClose: () => void;
  images: Array<string>;
}

export default function ImageViewer({ isOpen, onClose, images }: IImageViewer) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent maxWidth="1200px" border="1px" borderColor="#E0E0E0">
        <ModalBody p="0" bgColor="rgba(38,38,38,0.8)">
          <Carousel autoPlay infiniteLoop>
            {images.map((image, index) => (
              <Flex key={index} height="500px" pt="5">
                <Image src={image} width="80px" objectFit="scale-down" />
              </Flex>
            ))}
          </Carousel>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
