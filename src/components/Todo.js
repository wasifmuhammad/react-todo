import React  from "react";
const Todo = (props) =>{
// events
const deleteHandler = () =>{  
       // filtering out the todo which matches the el clicked
       const filteredOjects = props.todos.filter((el) => el.id !== props.todo.id);
       props.setTodos(filteredOjects);
    // props.setTodos(props.todos.filter((el) => el.id !== props.todo.id));

}
const completeHandler = () =>{
   props.setTodos(
       props.todos.map((item) =>{
           if(item.id===props.todo.id){
               return{
              ...item, completed: !item.completed
              }
           }
           return item; // if condition is false
       }) // end of map
   ); // end of setTodos
} // end of completedHandler


    return(

        <div className="todo">
            <li className={`todo-item, ${props.todo.completed ? "completed": '' }`}>{props.todo.text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <li className="fas fa-check"></li>

            </button>
            <button onClick={deleteHandler} className="trash-btn" >
                <li className="fas fa-trash"></li>
            </button>

        </div>
    );
};
export default Todo;