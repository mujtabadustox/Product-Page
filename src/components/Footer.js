import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Flex
        justify="center"
        py="30px"
        maxW="calc(100vw - 30px)"
        minW="calc(100vw - 30px)"
        maxH="calc(100vw - 1500px)"
        minH="calc(100vw - 1500px)"
      >
        <Text>Mujtaba Ali</Text>
      </Flex>
    </>
  );
};

export default Footer;
