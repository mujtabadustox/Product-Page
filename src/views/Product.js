import React, { useState, Fragment, useEffect } from "react";
import ImageSlider from "../components/ImageSlider";
import productService from "../services/product";

import {
  Box,
  Center,
  Card,
  HStack,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  IconButton,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

import { AddIcon, MinusIcon, StarIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState(0);

  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await productService.getById(id);
        setData(result.data);
      } catch (error) {
        console.error("Error Fetching");
      }
    };

    getData();
  }, [id]);

  const plusQuantity = (stockQty) => {
    setQuantity((prevState) => Math.min(prevState + 1, stockQty));
  };

  const minusQuantity = () => {
    setQuantity((prevState) => Math.max(prevState - 1, 1));
  };

  const handleCart = () => {
    setCart((prevState) => prevState + quantity);
  };

  return data ? (
    <>
      <Box
        maxW="calc(100vw - 100px)"
        minW="calc(100vw - 100px)"
        minH="100vh"
        bg="white"
        p="20px"
      >
        <Box ml={{ lg: "1250px" }}>
          <Badge color="secondary" badgeContent={cart}>
            <ShoppingCartIcon />{" "}
          </Badge>
        </Box>
        <Center>
          <Box>
            <HStack>
              {/* <Image
                    src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/183c1a83-662d-4536-a1d0-5e94eb300a10/elemental-premium-backpack-21l-ZSLGT2.png"
                    alt="image-show"
                    h="400px"
                    w="350px"
                    backgroundColor="gray.200"
                  /> */}
              <Box mt="30px">
                <ImageSlider images={data?.images} />
              </Box>
              <Card h="500px" w="500px" ml="30px" mt="30px">
                <CardHeader>
                  <Text fontSize="4xl">{data?.title}</Text>

                  <Box>
                    <HStack>
                      {data?.rating.map((rate, index) => (
                        <Fragment key={index}>
                          {rate === 1 ? (
                            <StarIcon color="yellow.300" />
                          ) : (
                            <StarIcon color="gray.300" />
                          )}
                        </Fragment>
                      ))}{" "}
                      <Text>
                        | <Text as="u">{data?.reviews} Reviews</Text>
                      </Text>
                    </HStack>
                  </Box>
                </CardHeader>

                <CardBody>
                  <Box mb="10px">
                    <Text fontSize="1xl">{data?.description}</Text>
                  </Box>
                  <Box mb="10px">
                    <UnorderedList>
                      {data?.bullets.map((bullet, index) => (
                        <ListItem key={index}>
                          <Text
                            as={index === 0 ? "b" : "none"}
                            color={index === 0 ? "orange.300" : "none"}
                          >
                            {bullet}
                          </Text>
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </Box>
                  <Box mb="10px">
                    <HStack>
                      <Text fontSize="2xl" as="b" maxW="85px" minW="85px">
                        {" "}
                        $ {data?.price * quantity}
                      </Text>
                      <Box
                        border="1px"
                        borderRadius="10px"
                        borderColor="gray.300"
                        p="10px"
                        mx="20px"
                        bg="gray.50"
                        maxW="330px"
                      >
                        <HStack>
                          <IconButton
                            colorScheme="gray"
                            aria-label="Call Segun"
                            size="xs"
                            w="150px"
                            icon={<MinusIcon color="gray.600" />}
                            onClick={minusQuantity}
                          />
                          <Text as="b">{quantity}</Text>
                          <IconButton
                            colorScheme="gray"
                            aria-label="Call Segun"
                            size="xs"
                            w="150px"
                            icon={<AddIcon color="gray.600" />}
                            onClick={() => plusQuantity(data?.stock)}
                          />
                        </HStack>
                      </Box>
                    </HStack>
                  </Box>

                  <Box>
                    <Button
                      colorScheme="purple"
                      mt="10px"
                      variant="outline"
                      w="460px"
                      bg="purple.400"
                      onClick={handleCart}
                    >
                      <Text color="white">Add to Cart</Text>
                    </Button>
                  </Box>
                </CardBody>
                <CardFooter>
                  <Text fontSize="sm" color="gray.600">
                    Shipping & Import Fees Deposit to Pakistan Details
                  </Text>
                </CardFooter>
              </Card>
            </HStack>
          </Box>
        </Center>
      </Box>
    </>
  ) : (
    "Loading..."
  );
};

export default Product;
