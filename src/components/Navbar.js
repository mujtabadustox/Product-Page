import React from "react";
import {
  Flex,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  Text,
  HStack,
  InputGroup,
  InputLeftElement,
  Link,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Flex
      justify="space-between"
      py="10px"
      maxW="calc(100vw - 30px)"
      minW="calc(100vw - 30px)"
    >
      <Box>
        <Link href="/">
          <Text as="b" fontSize="2xl">
            <HStack>
              <Text color="purple.200">M</Text>
              <Text color="orange.200">u</Text>
              <Text color="red.200">j</Text>
              <Text color="blue.200">S</Text>
              <Text color="green.200">t</Text>
              <Text color="yellow.200">o</Text>
              <Text color="pink.200">r</Text>
              <Text color="whitesmoke">e</Text>
            </HStack>
          </Text>
        </Link>
      </Box>

      <Flex gap={5}>
        <Menu>
          <MenuButton
            fontSize="2xl"
            color="white"
            _hover={{
              textDecoration: "underline",
            }}
          >
            Men
          </MenuButton>

          <MenuList>
            <MenuItem as="a" href="#">
              Shoes
            </MenuItem>
            <MenuItem as="a" href="#">
              Bag
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu ml="20px">
          <MenuButton
            fontSize="2xl"
            color="white"
            _hover={{
              textDecoration: "underline",
            }}
          >
            Women
          </MenuButton>

          <MenuList>
            <MenuItem as="a" href="#">
              Shoes
            </MenuItem>
            <MenuItem as="a" href="#">
              Bag
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu ml="20px" p="20px">
          <MenuButton
            fontSize="2xl"
            color="white"
            _hover={{
              textDecoration: "underline",
            }}
          >
            Sale
          </MenuButton>

          <MenuList>
            <MenuItem as="a" href="#">
              Shoes
            </MenuItem>
            <MenuItem as="a" href="#">
              Bag
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Box>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input type="search" placeholder="Dummy Search" color="white" />
        </InputGroup>
      </Box>
    </Flex>
  );
};

export default Navbar;
