import React, { useEffect, useState } from 'react';
import { Box, Button, Center, Image, Spinner, Text } from '@chakra-ui/react';
import Navbar from './Navbar'; // Asegúrate de que la ruta de importación sea correcta

function Personaje() {
  const [personaje, setPersonaje] = useState(null);
  const [id, setId] = useState(300);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.disneyapi.dev/character/${id}`)
      .then((resp) => resp.json())
      .then((datos) => {
        console.log(datos);
        setPersonaje(datos.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, [id]);

  const handleSiguienteClick = () => {
    setId(id + 1);
  };

  const handleAtrasClick = () => {
    setId(id - 1);
  };

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
          {isLoading ? (
            <Center h="200px">
              <Spinner size="xl" />
            </Center>
          ) : (
            <>
              {personaje ? (
                <Box bg="lightblue" p="4" borderRadius="md" mb="4">
                  <Image src={personaje.imageUrl} alt={personaje.name} borderRadius="md" mb="4" />
                  <Text fontSize="xl" fontWeight="semibold" mt="4" textAlign="center" margin="0 0.5rem">
                    <span style={{ fontWeight: 'bold' }}>
                      {personaje.name}
                    </span>
                  </Text>
                  <Text fontSize="lg" textAlign="center" margin="0 0.5rem">
                    <span style={{ fontWeight: 'bold' }}>
                      ID: {personaje._id}
                    </span>
                  </Text>
                </Box>
              ) : (
                <Text fontSize="xl" fontWeight="semibold" mt="4" textAlign="center">
                  No se encontraron datos
                </Text>
              )}
              <Button colorScheme="pink" mt="4" onClick={handleSiguienteClick} w="100%" size="lg">
                Siguiente
              </Button>
              <Button colorScheme="blue" mt="2" onClick={handleAtrasClick} w="100%" size="lg">
                Atrás
              </Button>
            </>
          )}
        </Box>
      </Center>
    </>
  );
}

export default Personaje;

