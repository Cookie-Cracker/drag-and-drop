import { Container, ChakraProvider, Heading } from '@chakra-ui/react';
import DragAndDropList from './DragAndDropList';
import { tasks } from './tasks';
import { Box } from '@chakra-ui/react';
function App() {
  return (
    <>
      <ChakraProvider>
        <Container alignItems="center" justifyContent="center">
          <Box textAlign={'center'} p={5}>
            <Heading>@hello-pangea/dnd</Heading>
          </Box>
          <DragAndDropList list={tasks} />
        </Container>
      </ChakraProvider>
    </>
  );
}

export default App;
