import React, { useReducer } from "react";

import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { TodoContext } from "./context/TodoContext"
import TodoReducer from "./context/reducer"

import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos"

import Logo from "./img/Logo-lco.jpeg";

const App = () => {

  const [todos, dispatch] = useReducer(TodoReducer, []);
  // to access the functionality defined in reducer we pass the
  // imported reducer and as a default a array is passed to hold
  // all of these therefore todos becomes a array instead of undefined!
  //dispatch: takes multiple functions and performs the functionality
  
  return(
    <TodoContext.Provider value={{todos, dispatch}}>
      <Container fluid>
        <img src={Logo} alt="lco-logo" width="300px" className="Logo" />
        <h1>Todo App with Context API</h1>
        <Todos />
        <TodoForm/>
       </Container>
    </TodoContext.Provider> 
  );
}

export default App;
