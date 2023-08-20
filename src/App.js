import React from "react";
import Product from "./views/Product";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Flex, VStack, Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Flex>
        <VStack>
          <Box w="100vw" h="60px" bg="#1c1c1c">
            <Navbar />
          </Box>
          <Box w="100vw" minH="100vh" bg="white">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
              </Routes>
            </BrowserRouter>
          </Box>
          <Box w="100vw" h="80px" bg="gray.900" color="white">
            <Footer />
          </Box>
        </VStack>
      </Flex>
    </>
  );
};

export default App;
