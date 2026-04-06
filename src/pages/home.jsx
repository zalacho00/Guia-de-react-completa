import { Box, Heading, Text, Button, VStack, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'  // importamos useNavigate para la navegacion

function Home() {
  const navigate = useNavigate()

  return (
    <Box bg="gray.800" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <VStack spacing="6" textAlign="center">
        <Heading color="yellow.400">Página Principal</Heading>
        <Text color="gray.300">Desde aquí puedes ir a las otras páginas</Text>
        <Flex gap="4">
          <Button colorScheme="yellow" onClick={() => navigate('/pagina1')}>Ir a Página 1</Button>
          <Button colorScheme="yellow" onClick={() => navigate('/pagina2')}>Ir a Página 2</Button>
        </Flex>
      </VStack>
    </Box>
  )
}
// jsuto ahora esta en la pagina principal, con los botones se va para la pagina 1 y la pagina 2, y en esas paginas tambien se puede devolver

export default Home