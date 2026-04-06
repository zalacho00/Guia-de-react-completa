// Este componente aparecerá en TODAS las páginas
import { Box, Flex, Button, Text } from '@chakra-ui/react' // esto es solo del framework chakra ui
import { useNavigate } from 'react-router-dom' // esto es para navegar entre paginas sin recargar la pagina lo hace que sea mas rapida

function Navbar() {                  // esta es la funcion que se exporta para ser usada en otras partes de la aplicacion
  const navigate = useNavigate()

  return (
    <Box bg="gray.900" px="8" py="4">
      <Flex justify="space-between" align="center">
        <Text color="yellow.400" fontWeight="bold" fontSize="xl">MiApp</Text>
        <Flex gap="4">
          <Button variant="ghost" color="white" onClick={() => navigate('/')}>Inicio</Button>           
          <Button variant="ghost" color="white" onClick={() => navigate('/pagina1')}>Página 1</Button>
          <Button variant="ghost" color="white" onClick={() => navigate('/pagina2')}>Página 2</Button>
        </Flex>
      </Flex>
    </Box>
  )
}
// los botones tienen un onClick que llama a la funcion navigate con la ruta a la que queremos ir.
export default Navbar  