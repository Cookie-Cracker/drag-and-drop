import {
  Box,
  Divider,
  HStack,
  Icon,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagCloseButton,
} from '@chakra-ui/react';
import React from 'react';
import { FiTag } from 'react-icons/fi';
import { Text } from '@chakra-ui/react';

const TaskLabels = ({ labels }) => {
  return (
    <HStack pl={30} spacing={4}>
      {labels.map((label, index) => (
        <Tag
          size={'sm'}
          key={`${index}-${label}`}
          borderRadius={'full'}
          variant={'subtle'}
          colorScheme={label.color}
        >
          <TagLeftIcon as={FiTag} />
          <TagLabel>{label.label}</TagLabel>
        </Tag>
      ))}
    </HStack>
  );
};

export default TaskLabels;
