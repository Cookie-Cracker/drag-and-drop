import {
  Box,
  Flex,
  Icon,
  IconButton,
  Stack,
  VStack,
  Button,
  Text,
  HStack,
  Badge,
  Heading,
  Link as LinkChakra,
  Divider,
  FormControl,
  Input,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import React from 'react';
import {
  FiMoreVertical,
  FiCheck,
  FiCircle,
  FiPlus,
  FiEdit3,
  FiMoreHorizontal,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import TaskLabels from './TaskLabels';

const TaskItem = ({ task }) => {
  return (
    <>
      <Box
        display={'flex'}
        flexDirection={'column'}
        _hover={{
          bg: 'gray.50',
        }}
      >
        <HStack color={'gray.500'}>
          <Box as={HStack} flex={1}>
            <Tooltip label="Complete Task" fontSize="md" placement="top-start">
              <IconButton
                icon={<FiCheck opacity={0} />}
                size={'xs'}
                variant={'outline'}
                rounded={'full'}
                boxShadow={'4xl'}
                _hover={{
                  '> svg': {
                    opacity: 1,
                  },
                }}
              />
            </Tooltip>

            <Text fontSize={'small'}>{task.title}</Text>
          </Box>
          <IconButton icon={<FiEdit3 />} border={'none'} variant={'ghost'} />

          <Menu placement="auto-end">
            <MenuButton
              as={IconButton}
              icon={<FiMoreHorizontal />}
              variant={'ghost'}
            >
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          color={'gray.500'}
        >
          <TaskLabels labels={task.labels} />

          <Text fontSize="xs">{task.order}</Text>
        </Box>
        <Divider py={1} />
      </Box>
    </>
  );
};

export default TaskItem;
