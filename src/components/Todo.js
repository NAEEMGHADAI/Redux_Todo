import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, deleteTodo } from "../actions/index";
import "./todo.css";

const Todo = () => {
	const [inputData, setInputData] = useState("");
	const list = useSelector((state) => state.todoReducers.list);
	const dispatch = useDispatch();
	return (
		<>
			<div>
				<div className="main-div">
					<div className="child-div">
						<figure>
							<figcaption>Add Your List Here 👇</figcaption>
						</figure>
						<div className="addItems">
							<input
								type="text"
								placeholder="✍️ Add Item..."
								value={inputData}
								onChange={(e) => setInputData(e.target.value)}
							/>
							<i
								className="fa fa-plus add-btn"
								title="Add Item"
								onClick={() => dispatch(addTodo(inputData), setInputData(""))}
							></i>
						</div>
						<div className="showItems">
							{list.map((elem) => (
								<div className="eachItem" key={elem.id}>
									<h3>{elem.data}</h3>
									<div className="todo-btn">
										<i
											className="far fa-trash-alt add-btn"
											title="Delete Item"
											onClick={() =>
												dispatch(deleteTodo(elem.id), setInputData(""))
											}
										></i>
									</div>
								</div>
							))}
						</div>
						<div className="showItems">
							<button
								className="btn effect04"
								data-sm-link-text="remove All"
								onClick={() => dispatch(removeTodo(), setInputData(""))}
							>
								<span>Check List</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Todo;
