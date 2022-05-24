import { HStack, VStack } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";

function AddTodo() {
  function handleClick(event) {}

  return (
    <form onSubmit={handleClick}>
      <HStack>
        <Input variant="filled" placeholder="Add your todos.." />
        <Button colorScheme="pink">Add todo</Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
