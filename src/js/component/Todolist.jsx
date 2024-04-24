import React, {useState} from "react";

export const Todolist = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([])

    const handleInput = (element) => {
        setInputValue(element.target.value)
    };
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            setTodos(todos.concat(inputValue));
            setInputValue(""); 
        }
    };

    const handleDelete = (index) => {
        setTodos(todos.filter((_, currentIndex) => index !== currentIndex));
    };


    return (
        <div className="container d-flex justify-content-center align-items-center font-control">
            <div className="row">
                <h1>My Todo List</h1>
                <div className="col-12 col-md-8 col-lg-12">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <input type="text" 
                            value={inputValue}
                            onChange={handleInput}
                            onKeyDown={handleKeyDown} 
                            placeholder="What do you need to do?"/>
                        </li>
                        {todos.map((item, index) => (
                        <li className="list-group-item" key={index}>
                            {item} <i className="fas fa-trash-alt" 
                            onClick={() => handleDelete(index)}/><i/>
                            </li>
                        ))}
                    </ul>
                    <div className="text-start mt-3">{todos.length} Tasks Left</div>
                </div>
            </div>

        </div>
    );
};