import React  from "react";
import Todo from "./Todo";

const TodoList = (props) =>{
  console.log(props.filteredTodos);
    return(
        <div className="todo-container">
          <ul className="todo-list">
                {/* embedding Todo for each todo hook */}
                {props.filteredTodos.map((todo) =>{
                    // todo is the object
                    return(
                      // setting up the key is required so react knows what to delete and what to keep
                      <Todo todo={todo} key={todo.id} todos={props.todos} setTodos={props.setTodos}/>
                    ) // end of nested return
                  }// end of arrow function map body
                ) // end of map function  
              } {/* end of JSX ending */}
          </ul>
      </div>
    ); 
}
export default TodoList;