import React, { useState } from "react";

export const TodoListForm = () => {

    const [task, setTask] = useState("");
    const [list, setList] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task.trim() !== "") {
            setList([...list, task]);
            setTask("");

        } else {
            setTask("");
        }
    }

    const handleDelete = (item) => {
        setList(list.filter((element) => element !== item))
    }

    return (
        <div className="container">
            <h1>My Todo List</h1>
            <form onSubmit={handleSubmit} aria-placeholder="Enter Task">
                <input type="text" id="disabledTextInput" class="form-control" placeholder="Enter Task"
                    value={task} onChange={(event) => setTask(event.target.value)} />
            </form>
            <ul className="list-group">
                {list.map((item, id) =>
                    <li key={id} className="list-group-item bg-light d-flex justify-content-between hidden-icon">
                        {item}
                        <span onClick={() => handleDelete(item)}>
                            <i className="fas fa-trash-alt text-danger"
                                 /><i />
                        </span>
                    </li>
                )}
                <li className="list-group-item text-end bg-light fw-lighter">
                    {list.length} items
                </li>
            </ul>
        </div>
    )
}