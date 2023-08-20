import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  HStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import productService from "../services/product";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);
  const maxLength = 80;

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await productService.getAll();
        setData(result.data);
      } catch (error) {
        console.error("Error Fetching");
      }
    };

    getData();
  }, []);

  return (
    <>
      {data ? (
        <Box w="100vw" minH="100vh" bg="white" mt="30px" pr="20px">
          <Center>
            <Box>
              <HStack>
                {data?.map((product, index) => (
                  <Card
                    minW="280px"
                    maxW="280px"
                    minH="520px"
                    maxH="520px"
                    key={product?._id}
                  >
                    <CardBody>
                      <Image
                        h="300px"
                        src={product?.images[0]}
                        alt={`Thumbnail for ${product?.title}`}
                        borderRadius="lg"
                      />
                      <Stack mt="6" spacing="3">
                        <Heading size="md">{product?.title}</Heading>
                        <Text>
                          {product?.description.length > maxLength
                            ? product?.description.slice(0, maxLength) + "..."
                            : product?.description}
                        </Text>
                        <HStack>
                          <Text color="blue.600" fontSize="2xl">
                            ${product?.price}
                          </Text>
                          <Button colorScheme="blue" size="md" ml="40px">
                            <Link to={`/product/${product?._id}`}>
                              More Details
                            </Link>
                          </Button>
                        </HStack>
                      </Stack>
                    </CardBody>
                  </Card>
                ))}
              </HStack>
            </Box>
          </Center>
        </Box>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default Home;
