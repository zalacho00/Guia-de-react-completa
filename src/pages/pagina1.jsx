import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Pagina1() {
  const navigate = useNavigate()

  return (
    <Box bg="gray.800" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <VStack spacing="6" textAlign="center">
        <Heading color="blue.400">Página 1</Heading>
        <Text color="gray.300">Estás en la página 1</Text>
        <Button colorScheme="blue" onClick={() => navigate('/')}>Volver al inicio</Button>
      </VStack>
    </Box>
  )
}

export default Pagina1