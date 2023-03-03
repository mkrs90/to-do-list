import { useState } from "react";
import "../index.css";

function App() {
    const [tasks, setTasks] = useState([]);
    const [count, setCount] = useState([tasks.length]);
    const [inputValue, setInputValue] = useState([]);
    const [viewActiveEnabled, setViewActiveEnabled] = useState(false);
    const [viewCompetedEnabled, setViewCompletedEnabled] = useState(false);


    function handleInputChange(event) {
        console.log(event);
        setInputValue(event.target.value);
    }

    function handleClick() {
        console.log("clicked");
        let newTask = {text:inputValue, id:Date.now(), completed: false}
        setTasks(tasks => [...tasks, newTask]);
        setCount(tasks.length + 1);
    }

    function handleClose() {
        //this is where the X button functionality will live
        console.log("close it");
        let newArray = tasks.filter(a => a.id !== tasks.id)
        
        setTasks(newArray); 
        setCount(newArray.length -= 1);
    }

    function handleClearCompleted() {
        //this is where the X button functionality will live
        console.log("cleared!");
        let newArray = tasks.filter(a => a.completed === false)
        
        setTasks(newArray); 
        setCount(newArray.length);
    }

    function handleCheckbox(id) {
        console.log("I've been checked!")
        // find the task that got checked
        let task = tasks.find((element) => {
            return element.id === id;
          })

        // Update the completed status
        task.completed = !task.completed;

        // Throw away the old version of the that got checked
        let newArray = tasks.filter(a => a.id !== id)

        // Set tasks to be the combination of old tasks plus the new checked task
        setTasks(tasks => [...newArray, task]);
        setCount(newArray.length);
        
        // setTasks(list);
        // let completedTask = task.completed = true;
        // setTasks([...tasks, completedTask])
        // console.log(task.completed);
    }

    function viewActive() {
        console.log("viewing Active tasks");
        //let activeArray = tasks.filter(b => b.completed === false);
        //setTasks(activeArray);
        document.getElementById("viewActive")
        setViewActiveEnabled(true);
        setViewCompletedEnabled(false);
    }

    function viewCompleted() {
        console.log("viewing completed tasks");
        setViewCompletedEnabled(true);
        setViewActiveEnabled(false);
        
    }

    function viewAll() {
        console.log("viewing all tasks");
        setViewActiveEnabled(false);
        setViewCompletedEnabled(false);
    }


    return (
        <div className="container">
            <h1 className="text-center display-1">To Do List</h1>
            <p className="text-center">You have {count} items left to complete.</p>
            <div className="text-center m-3">
                <input type="text" placeholder="What do you need to do?" onChange={handleInputChange}></input>
                <button onClick={handleClick} className="ms-3">Add Task</button>
            </div>
            <div className="text-center">
                <button id="viewAll" onClick={viewAll} className="m-2">All</button>
                <button id="viewActive" onClick={viewActive} className="m-2">Active</button>
                <button id="viewCompleted" onClick={viewCompleted} className="m-2">Completed</button>
                <button onClick={handleClearCompleted} className="m-2">Clear Completed</button>
            </div>
            <div className="container">
                <ul>
                    {tasks.map(task => {
                            if (viewActiveEnabled){
                                if (task.completed === false){
                                    return <li key={task.id} className={`${task.completed === true ? "text-decoration-line-through" : "text-decoration-none"}`}>
                                                <input type="checkbox" onClick={() => handleCheckbox(task.id)} checked={task.completed}>
                                                </input>
                                                {task.text}
                                                <span className="close" onClick={handleClose}>
                                                x
                                                </span>
                                            </li>
                                }
                                else
                                {
                                    return null;
                                }

                            } else if (viewCompetedEnabled) {
                                if (task.completed === true) {
                                    return <li key={task.id} className={`${task.completed === true ? "text-decoration-line-through" : "text-decoration-none"}`}>
                                            <input type="checkbox" onClick={() => handleCheckbox(task.id)} checked={task.completed}>
                                            </input>
                                            {task.text}
                                            <span className="close" onClick={handleClose}>
                                            x
                                            </span>
                                        </li>
                                }
                                else
                                {
                                    return null;
                                }
                            }

                            else
                            {
                                return <li key={task.id} className={`${task.completed === true ? "text-decoration-line-through" : "text-decoration-none"}`}>
                                            <input type="checkbox" onClick={() => handleCheckbox(task.id)} checked={task.completed}>
                                            </input>
                                            {task.text}
                                            <span className="close" onClick={handleClose}>
                                            x
                                            </span>
                                        </li>
                            }
                        
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;