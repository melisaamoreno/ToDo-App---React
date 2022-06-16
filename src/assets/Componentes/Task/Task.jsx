import { Checkbox, Button, Text, Box, Input } from "@chakra-ui/react";
import { useState } from "react";

export const Task = ({
  id,
  text,
  checked,
  deleteTask,
  setCheck,
  task,
  setTask,
}) => {
  const [edit, setEdit] = useState(false);
  const [inputEdit, setInputEdit] = useState(text)
  if (edit) {
    return (
      <Input
        mt="5"
        value={inputEdit} 
        onChange={(e) => setInputEdit(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setTask(
              task.map((item) => {
                if (item.id === id) {
                  return { ...item, text: e.target.value};
                }
                return item;
              })
            );
            setEdit(false);
          }

        }}
      />
    );
  }

  return (
    <Box mt="5" display="flex" justifyContent="space-between" w="100%">
      <Checkbox defaultChecked={checked} onChange={() => setCheck(id)}>
        <Text color='white' as={checked ? "s" : ""}>{text}</Text>
      </Checkbox>
      <Box>
        <Button
          size="xs"
          bg="transparent"
          border="1px white solid"
          mr="2"
          onClick={() => setEdit(true)}
        >
          {" "}
          📝{" "}
        </Button>
        <Button colorScheme="red" size="xs" onClick={() => deleteTask(id)}>
          X
        </Button>
      </Box>
    </Box>
  );
};
