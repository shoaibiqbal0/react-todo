import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

function TodoList(props) {
  // Handle delete button press
  function handleClick(index) {
    props.deleteItem(index);
  }
  // If todos array is empty then display message
  if (!props.todos.length) {
    return (
      <Badge p="5" borderRadius="lg" colorScheme="green">
        Yay!! No more todos!
      </Badge>
    );
  }
  // Look through todos array and render todos
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {props.todos.map((todo) => (
        <HStack key={todo._id} id={todo._id}>
          <Text>{todo.content}</Text>
          <Spacer />
          <IconButton
            aria-label="Delete Item"
            icon={<FaTrash />}
            isRound={true}
            size="xs"
            onClick={() => handleClick(todo._id)}
          />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
