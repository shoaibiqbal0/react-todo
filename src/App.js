import { useState } from "react";
import { VStack, IconButton, Heading } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { FaMoon, FaSun } from "react-icons/fa";

function App() {
  const [todos, setTodos] = useState(["Buy Milk", "Buy Bread", "Buy Wheat"]);

  function addTodo(todo) {
    setTodos((previousValue) => {
      return [...previousValue, todo];
    });
  }

  function toDelete(toDoListIndex) {
    const newTodos = todos.filter((_, index) => {
      return index !== toDoListIndex;
    });
    setTodos(newTodos);
  }

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
      <TodoList todos={todos} deleteItem={toDelete} />
      <AddTodo onAdd={addTodo} />
    </VStack>
  );
}

export default App;
