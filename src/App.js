import { useEffect, useState } from "react";
import { VStack, IconButton, Heading, useColorMode } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { FaMoon, FaSun } from "react-icons/fa";

function App() {
  const [todos, setTodos] = useState({ content: "" });
  const { colorMode, toggleColorMode } = useColorMode();
  // Add custom todo to the Todos array
  function addTodo(todo) {
    setTodos((previousValue) => {
      return [...previousValue, todo];
    });
  }
  // Delete custom todo when user presses delete button
  function toDelete(toDoListIndex) {
    const newTodos = todos.filter((_, index) => {
      return index !== toDoListIndex;
    });
    setTodos(newTodos);
  }

  useEffect(() => {
    fetch("/todos")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setTodos(jsonRes));
  });

  return (
    <VStack p="4">
      <IconButton
        aria-label="Switch Mode"
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        isRound={true}
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
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
      <TodoList todos={todos} deleteItem={toDelete} />
      <AddTodo onAdd={addTodo} />
    </VStack>
  );
}

export default App;
