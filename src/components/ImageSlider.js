import React, { useState } from "react";
import { Image, HStack, Box, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return images ? (
    <div>
      <div>
        <HStack>
          <IconButton
            variant="ghost"
            size="md"
            colorScheme="none"
            icon={
              <ArrowBackIcon
                color="gray.600"
                onClick={prevImage}
                cursor="pointer"
              />
            }
          />
          <Image
            src={images[currentIndex]}
            alt={`Product Image ${currentIndex}`}
            h="400px"
            w="350px"
            backgroundColor="gray.200"
          />
          <IconButton
            variant="ghost"
            size="md"
            colorScheme="none"
            icon={
              <ArrowForwardIcon
                color="gray.600"
                onClick={nextImage}
                cursor="pointer"
              />
            }
          />
        </HStack>
        <div></div>
      </div>
      <Box ml="90px">
        <HStack>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              w="50px"
              h="auto"
              curosr="pointer"
              m="5px"
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </HStack>
      </Box>
    </div>
  ) : (
    "Loading..."
  );
};

export default ImageSlider;
