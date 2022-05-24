import { HStack, VStack } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";

function AddTodo() {
  function handleClick(event) {
    event.preventDefault();
    console.log("Hello!");
  }

  return (
    <form onSubmit={handleClick}>
      <HStack pt="10">
        <Input variant="filled" placeholder="Add your todos.." />
        <Button colorScheme="pink" px="8" type="submit">
          Add todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
