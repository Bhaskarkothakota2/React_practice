import React from "react";
import {  Stack,Button} from "@mui/material";

function Todolist({ todos, deleteHandler }) {
  return (
    <Stack>
      {todos.map((todo, index) => (
        <div key={index}>
          <h5>{todo} &nbsp; <Button onClick={() => deleteHandler(index)} variant='contained' size="small" color='warning'>Delete</Button></h5>
        </div>
      ))}
    </Stack>
  )
}

export default Todolist;
