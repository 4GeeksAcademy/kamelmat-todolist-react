import React, {useState} from "react";

export const TodoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([])

    const handleInput = (element) => {
        setInputValue(element.target.value)
    };
    const handleKeyDown = (event) => {
        if (event.key === "Enter" && inputValue.trim() !=="") {
            setTodos(todos.concat(inputValue));
            setInputValue(""); 
        }
    };

    const handleDelete = (index) => {
        setTodos(todos.filter((_, currentIndex) => index !== currentIndex));
    };

    return (
        <div className="container d-flex justify-content-center align-items-center font-control col-sm-10 col-md-8 col-lg-12">
            <div className="row">
                <h1>My Todo List</h1>
                <div className="">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <input type="text" 
                            value={inputValue}
                            onChange={handleInput}
                            onKeyDown={handleKeyDown} 
                            placeholder="What do you need to do?"/>
                        </li>
                        {todos.map((item, index) => (
                        <li className="list-group-item bg-light d-flex justify-content-between hidden-icon" key={index}>
                            {item}
                            <span>
                            <i className="fas fa-trash-alt text-danger" 
                            onClick={() => handleDelete(index)}/><i/>
                            </span>
                            </li>
                        ))}
                    </ul>
                    <div className="text-end mt-3 bg-light fs-6 fw-lighter">{todos.length} Tasks Left</div>
                </div>
            </div>

        </div>
    );
};