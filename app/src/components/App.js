import { useState } from "react";
import "../index.css";

function App() {
    const [task, setTask] = useState([]);
    const [count, setCount] = useState([]);
    const [inputValue, setInputValue] = useState([]);

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleClick(event) {
        console.log("clicked");
        let newTask = [ ...task, inputValue ]
        setTask(newTask);
        setCount(newTask.length);
    }


    return (
        <div>
            <h1>To Do List</h1>
            <h2>You have 0 items left to complete.</h2>
            <input type="text" placeholder="What do you need to do?" onChange={handleInputChange}></input>
            <button onClick={handleClick}>Add Task</button>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
                <button>Clear Completed</button>
            </div>
            <div>
                <ul>
                    {task.map(task => {
                        return <li key={task}><input type="checkbox"></input>{task}<span className="close">x</span></li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;