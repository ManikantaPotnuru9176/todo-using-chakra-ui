import React from "react";
import {
  Heading,
  Center,
  Input,
  VStack,
  Divider,
  Button,
  HStack,
  Card,
  Text,
  Spacer,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const Todo = () => {
  return (
    <Center h="100vh">
      <Box h="60vh">
        <VStack spacing="4" w="400px">
          <Heading>My Todo App</Heading>
          <Divider />
          <HStack>
            <Input
              placeholder="Enter Todo"
              focusBorderColor="teal.400"
              w="300px"
            />
            <Button colorScheme="teal" size="md">
              Add
            </Button>
          </HStack>
          <VStack spacing="4" w="40vw" h="60vh">
            {["mani", "jagadeesh", "abdhul", "revathi", "praveen"].map(
              (todo) => (
                <Card key={todo} padding="20px" w="30vw">
                  <HStack>
                    <Text w="20vw">{todo}</Text>
                    <Spacer />
                    <IconButton
                      isRound={true}
                      variant="solid"
                      colorScheme="teal"
                      aria-label="Edit"
                      fontSize="20px"
                      icon={<EditIcon />}
                    />
                    <IconButton
                      isRound={true}
                      variant="solid"
                      colorScheme="red"
                      aria-label="Delete"
                      fontSize="20px"
                      icon={<DeleteIcon />}
                    />
                  </HStack>
                </Card>
              )
            )}
          </VStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Todo;
