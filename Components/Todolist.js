import React from "react";
import { Stack, Button } from "@mui/material";

function Todolist({ todos, deleteHandler }) {
  return (
    <Stack alignItems={"center"}>
      {todos.map((todo, index) => (
        <Stack key={index} component="h5" alignItems={"center"} width={200}>
          {todo}
          <Button
            onClick={() => deleteHandler(index)}
            variant="contained"
            size="small"
            color="warning"
          >
            Delete
          </Button>
        </Stack>
      ))}
    </Stack>
  );
}

export default Todolist;
