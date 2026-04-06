import { Button, Input, Box, Text, Flex, Grid, GridItem } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Pagina1 from './pages/pagina1'
import Pagina2 from './pages/pagina2'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagina1" element={<Pagina1 />} />
        <Route path="/pagina2" element={<Pagina2 />} /> 
      </Routes>

    <Box h="auto" bg="gray.100" border="3px solid" p="4">
      
      <Flex gap="4" justify="center" flexWrap="wrap" maxW="2000px">
        <Box padding="8" border="2px solid" >
          <Text fontSize="2xl" alignContent="center">Hola con Chakra UI</Text>
          <Input placeholder="Escribe algo..." marginY="4" />
          <Button colorScheme="blue" alignContent="center">Click aquí</Button>
        </Box>

        <Box padding="8" border="2px solid">
          <Text fontSize="2xl" alignContent="center">Hola con Chakra UI</Text>
          <Input placeholder="Escribe algo..." marginY="4" />
          <Button colorScheme="blue" alignContent="center">Click aquí</Button>
        </Box>

        <Box padding="8" border="2px solid">
          <Text fontSize="2xl" alignContent="center">Hola con Chakra UI</Text>
          <Input placeholder="Escribe algo..." marginY="4" />
          <Button colorScheme="blue" alignContent="center">Click aquí</Button>
        </Box>
      </Flex>
    
    </Box>

    <Box h="300px" bg="gray.100" border="3px solid" p="6">
      <Grid templateAreas={`
      "a a b d d"
      "c c b d d"
      `}
      
       templateRows="repeat(2, 115px)" templateColumns="repeat(5, 1fr)" gap="4">

        <GridItem area="a" border="2px solid">
          <Box>1</Box>
        </GridItem>

        <GridItem area="b" border="2px solid">
          <Box>2</Box>
        </GridItem>

        <GridItem area="c"  border="2px solid">
          <Box>3</Box>
        </GridItem>

        <GridItem area="d" border="2px solid">
          <Box>4</Box>
        </GridItem>

      </Grid>
    </Box>
    </>
  ) 
}

export default App
