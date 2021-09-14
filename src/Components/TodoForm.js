import React, { useContext, useState } from "react"
import { FormGroup, Form, Input, Button, InputGroup, InputGroupAddon } from "reactstrap"

import { v4 } from "uuid"

import { TodoContext } from "../context/TodoContext"
import { ADD_TODO, REMOVE_TODO } from "../context/action.types"  

const TodoForm = () => {
    const [todoString, setTodoString] = useState("");
    const { dispatch } = useContext(TodoContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(todoString===""){
            return alert("Please enter a todo!")
        }

        const todo = {
            todoString,
            id: v4()
        }

        dispatch({
            type: ADD_TODO,
            payload: todo
        })

        setTodoString("");
    }

    return(
        <Form onSubmit={handleSubmit} className="fixed-bottom bottom-fixed">
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Your next Todo!"
                        value={todoString}
                        onChange={event => setTodoString(event.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button
                            color="warning"
                            //TODO: onclick
                        >Add</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    );
}

export default TodoForm;