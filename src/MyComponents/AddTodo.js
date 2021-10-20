import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }
        else{
            addTodo(title, desc);
            setTitle(""); 
            setDesc(""); 
        }
    }
    return (
        <div className="container my-3">
            <form onSubmit={submit} > 
                <legend>Add a Todo</legend>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo-Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} id="title" className="form-control" placeholder="" />
                </div>

                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo-Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" placeholder="" />
                </div>
                <button type="submit" className="btn btn-sm btn-success mr-0 float-end">Submit</button>
            </form>
        </div>
    )
}
