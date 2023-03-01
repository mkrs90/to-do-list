import { useState } from "react";

function App() {
    return (
        <div>
            <h1>To Do List</h1>
            <h2>You have 0 items left to complete.</h2>
            <input type="text" placeholder="What do you need to do?"></input>
            <button>Add Task</button>
        </div>
    );
}

export default App;