import React from "react";
import { Heading } from "@chakra-ui/react";
import { VStack, IconButton } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { FaMoon, FaSun } from "react-icons/fa";

function App() {
  return (
    <VStack p="4">
      <IconButton
        aria-label="Switch Mode"
        icon={<FaSun />}
        isRound={true}
        size="lg"
        alignSelf="flex-end"
      />
      <Heading
        pb="10"
        fontSize="5xl"
        fontWeight="extrabold"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <TodoList />
      <AddTodo />
    </VStack>
  );
}

export default App;
