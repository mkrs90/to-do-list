import { useState } from "react";
import "../index.css";

function App() {
    const [tasks, setTasks] = useState([]);
    const [count, setCount] = useState([tasks.length]);
    const [inputValue, setInputValue] = useState([]);
    const [viewActiveEnabled, setViewActiveEnabled] = useState(false);
    const [viewCompetedEnabled, setViewCompletedEnabled] = useState(false);

    //sets the input value to users input
    function handleInputChange(event) {
        console.log(event);
        setInputValue(event.target.value);
    }

    //on click of the add item button a new task object is made setting up it's initial state. 
    //Count is also increased on click
    function handleClick() {
        console.log("clicked");
        let newTask = {text:inputValue, id:Date.now(), completed: false}
        setTasks(tasks => [...tasks, newTask]);
        setCount(tasks.length + 1);
    }

    //On click of the "X" button after an item had been created it filters the tasks array based on the id of the items
    //and returns a list that no longer contains the task that was "closed"
    //decreases the count by one
    function handleClose() {
        console.log("close it");
        let newArray = tasks.filter(a => a.id !== tasks.id);
        setTasks(newArray); 
        setCount(newArray.length -= 1);
    }

    //function filters the tasks array based on completed status. Will only return tasks that have a key:value pair of
    //false meaning they are still active tasks
    //updates the count based on array length after clear
    function handleClearCompleted() {
        console.log("cleared!");
        let newArray = tasks.filter(a => a.completed === false);
        setTasks(newArray); 
        setCount(newArray.length);
    }

    //function finds the task that was checked
    //it switches the task.complete to be the opposite of its current state
    //filters through the task array based on the id of the task and returns an array 
    //that does not include the tasks whose id is not id
    function handleCheckbox(id) {
        console.log("I've been checked!")
        let task = tasks.find((element) => {
            return element.id === id;
          })
        task.completed = !task.completed;
        let newArray = tasks.filter(a => a.id !== id)
        setTasks(tasks => [...newArray, task]);
        setCount(newArray.length);
    }


    //on click of "Active" button it changes the view of the task items
    //to only be those with a status of task.completed: false
    //it's ran through an if statement in the html to only show those items
    function viewActive() {
        console.log("viewing Active tasks");
        setViewActiveEnabled(true);
        setViewCompletedEnabled(false);
    }

    //on click of "Completed" button it changes the view of the task items
    //to only be those with a status of task.completed: true
    //it's ran through an if statement in the html to only show those items
    function viewCompleted() {
        console.log("viewing completed tasks");
        setViewCompletedEnabled(true);
        setViewActiveEnabled(false);
        
    }

    //on click of "All" button it changes the view of the task items
    //to be both those with a status of task.completed: true && false
    //it's ran through an if statement in the html as the else statement
    function viewAll() {
        console.log("viewing all tasks");
        setViewActiveEnabled(false);
        setViewCompletedEnabled(false);
    }

    //on click of "Complete All" 
    //it will check all of the tasks and set all statues as task.completed = true;
    function completeAll() {
        console.log("get it done");
       
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
                <button onClick={completeAll} className="m-2">Complete All</button>
            </div>
            <div className="container">
                <ul>
                    {/* maps over the tasks array. If the viewActive is enabled (set to true) will will show only active items. Else if the viewCompleted is enabled (set to true and active false) 
                    it will show only the completed items. ELSE it will show all items. Views are controlled by the above buttons. Each li item contains a terniary statement to mark through 
                    completed items. A input checkbox that runs the handleCheckbox function that switches the task.completed state and a span that houses the "close" button functionality*/}
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