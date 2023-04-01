import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';

const DraggableHandle = ({ children }) => {
  return (
    <Box _hover={{ cursor: 'move' }}>
      <HStack spacing={-2}>
        <FiMoreVertical />
        <FiMoreVertical />
      </HStack>
      {children}
    </Box>
  );
};

export default DraggableHandle;
