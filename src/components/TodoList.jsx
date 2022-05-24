import React from "react";
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

function TodoList() {
  const todos = ["bring bread", "bring milk"];
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
      {todos.map((todo, index) => (
        <HStack key={index}>
          <Text>{todo}</Text>
          <Spacer />
          <IconButton
            aria-label="Delete Item"
            icon={<FaTrash />}
            isRound={true}
            size="xs"
          />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
