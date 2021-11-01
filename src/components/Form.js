import React from 'react';
import TodoList from './TodoList';

const Form = (props) =>{
    const inputTextHandler = (e) =>{
        props.setInputText(e.target.value);
}; // end of form

    // setting the todo hook for futher use with filling the objects passed down from the App.js
const submitTodoHandler = (e) =>
{
        e.preventDefault(); // prevent reloading
        props.setTodos([
            ...props.todos,{text:props.inputText, completed: false, id:Math.random() * 1000}
        ]);
        props.setInputText("");
}// end of submitTodoHandler
const statusHandler = (e) =>
{
        
        props.setStatus(e.target.value);
        console.log(e.target.value);
        
}// end of statusHandler
    return (
            <form>
                <input value={props.inputText} type="text" className="todo-input" onChange={inputTextHandler} />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
             </form>
    );
}
export default Form;