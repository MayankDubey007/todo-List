import React from 'react'
import { TodoItem } from "../MyComponents/TodoItem";
// import { TodoItem } from "G:\react\todos-list\src\MyComponents\Todos.js";
export const Todos = (props) => {
    return (
        <div className="container mb-3 my-3">
            <h3 className="my-3">Todos List</h3>
            {props.todos.length === 0 ? "No Todos to Display" :
                props.todos.map((todo) => {
                    // return (<><TodoItem todo={todo} /></>)
                    return (
                        <>
                            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                            <hr />
                        </>
                    )
                })
            }
            {/* <TodoItem todo={props.todos[0]} /> */}
        </div>
    )
}
