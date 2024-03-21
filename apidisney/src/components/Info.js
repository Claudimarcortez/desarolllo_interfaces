import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import Navbar from './Navbar'; 

function Info() {
  return (
    <>
      <Navbar />
      <Center>
        <Box
          maxW="md"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p="4"
          boxShadow="md"
          bg="lightblue"
          mt="4"
        >
          <Text fontSize="xl" fontWeight="semibold" mt="4" textAlign="center">
            Soy Claudimar Cortez y este es mi sitio web de API.
          </Text>
        </Box>
      </Center>
    </>
  );
}

export default Info;
