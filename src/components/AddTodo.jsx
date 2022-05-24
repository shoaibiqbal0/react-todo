import { HStack, VStack } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

function AddTodo(props) {
  const [todo, setTodo] = useState("");

  function handleChange(event) {
    setTodo(event.target.value);
  }

  function handleClick(event) {
    props.onAdd(todo);
    event.preventDefault();
    setTodo("");
  }

  return (
    <form onSubmit={handleClick}>
      <HStack pt="10">
        <Input
          onChange={handleChange}
          variant="filled"
          placeholder="Add your todos.."
          value={todo}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
