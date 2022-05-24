import React from "react";
import "./App.css";
import { Heading } from "@chakra-ui/react";
import { VStack, IconButton } from "@chakra-ui/react";
import TodoList from "./components/AddTodo";
import AddTodo from "./components/AddTodo";
import { FaMoon, FaSun } from "react-icons/fa";

function App() {
  return (
    <VStack>
      <IconButton aria-label="Switch Mode" icon={<FaSun />} />
      <Heading>Todo Application</Heading>
    </VStack>
  );
}

export default App;
