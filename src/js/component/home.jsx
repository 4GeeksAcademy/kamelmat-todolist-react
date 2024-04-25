import React from "react";
import { TodoList } from "./TodoList";
import {TodoListForm} from "./TodoListForm"


//create your first component
const Home = () => {
	return (
		<div className="text-center">
		{/* <TodoList /> */}
		<TodoListForm />
		</div>
	);
};

export default Home;
