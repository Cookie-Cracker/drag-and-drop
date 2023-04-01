import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import TaskItem from './TaskItem';
import { Box } from '@chakra-ui/react';
import { useState } from 'react';

const DragAndDropList = ({ list }) => {
  const [tasks, setTasks] = useState(list);

  const handleOnDragEnd = result => {
    if (!result.destination) return;
    const reorderedList = reorderTasks(
      tasks,
      result.source.index,
      result.destination.index
    );
    setTasks(reorderedList);
  };

  const reorderTasks = (list, fromIndex, toIndex) => {
    const taskListCopy = Array.from(list);
    const [removed] = taskListCopy.splice(fromIndex, 1);
    taskListCopy.splice(toIndex, 0, removed);

    taskListCopy.forEach((task, index) => {
      task.order = index;
    });
    return taskListCopy;
  };

  return (
    <Box>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              // style={getListStyle(snapshot.isDraggingOver)}
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      // style={getTaskStyle(
                      //   snapshot.isDragging,
                      //   provided.draggableProps.style
                      // )}
                    >
                      <TaskItem task={task} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};
export default DragAndDropList;
