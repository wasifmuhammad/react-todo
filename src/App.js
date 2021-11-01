
import React from 'react';
import './App.css';
// import State
import { useState, useEffect } from 'react';
// importing components
import Form from './components/Form';
import TodoList  from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //events
  useEffect(() =>{    
      filterHandler();
  },[todos, status]); // run with todos or status changes

  // function to filter out todos on bases of status
  const filterHandler = () =>{
    switch(status){
      case 'completed':      
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          console.log(filteredTodos);
          break;
      case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
      default:
            setFilteredTodos(todos);
            break;
    }
  }

  return (
    <div className="App">
        <header>
          <h1>Test Todo List</h1>
        </header>
        {/* passing state to components */}
        <Form  
          setInputText={setInputText}
          inputText={inputText}
          setTodos={setTodos}
          setStatus={setStatus}
          todos={todos}
      />
        
        <TodoList  todos={todos} setTodos={setTodos}    filteredTodos={filteredTodos}  />
    </div>
  ); // ending of return
} // ending of the App

export default App;
