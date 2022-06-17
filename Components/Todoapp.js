import React, { useState } from "react";
import Todolist from "./Todolist";
import {
  Stack,
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
} from "@mui/material";

function Todoapp() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const inputHandler = (e) => {
    
        setTask(e.target.value);
    
   
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todo, task];
    setTodo(newTodos);
    setTask("");
  };
  const deleteHandler = (indexval) => {
    const newtodos = todo.filter((item, index) => index !== indexval);
    setTodo(newtodos);
  };
  return (
    <Stack>
      
        <Stack>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Todo Managemnt Application
              </Typography>
              <TextField
                label="Enter Here"
                variant="outlined"
                onChange={inputHandler}
                size="small"
              />
              &nbsp; &nbsp;
              <Button size="medium" variant="contained" onClick={submitHandler}>
                Add
              </Button>
              <Todolist todos={todo} deleteHandler={deleteHandler} />
            </CardContent>
          </Card>
        </Stack>
      
    </Stack>
  )
}

export default Todoapp;
