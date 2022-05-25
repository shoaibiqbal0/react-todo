import { HStack, Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

function AddTodo(props) {
  const [todo, setTodo] = useState("");
  const toast = useToast();
  // Handle the change in add todo text field
  function handleChange(event) {
    setTodo(event.target.value);
  }
  // Handle the Add Todo button
  function handleClick(event) {
    event.preventDefault();
    if (!todo) {
      toast({
        title: "No Content",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      props.onAdd(todo);

      setTodo("");
    }
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
