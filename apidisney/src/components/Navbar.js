import React from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Flex bg="blue.500" p="4" justifyContent="center" alignItems="center">
      <Flex gap="4">
        <Link to="/">
          <Button colorScheme="blue" variant="ghost" color="black" _hover={{ bg: "white", color: "blue.500" }}>
            Home
          </Button>
        </Link>
        <Link to="/info">
          <Button colorScheme="blue" variant="ghost" color="black" _hover={{ bg: "white", color: "blue.500" }}>
            Info
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Navbar;
