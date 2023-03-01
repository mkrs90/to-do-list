create HTML components
update those components
then display those components


## User Story
- A user enters text on what they want to do
- They submit their task
- They can click a checkbox to signify the task as complete
- They can also delete the task from the list
- They can switch between list views to see either all task, completed tasks, or active tasks


## Questions: 

Q: What is my file structure going to look like?
A: Create a components folder within src. From there create an App.js

## HTML/CSS needed
TodoList
<ul> of <TodoItem />
TodoItem
Delete Button X
Checkbox - update state from todo to todone
Text of the todo
Classes added based on todo status 
Header
Input textbox
Add button definitely
Hit enter and that also adds (stretch) - Could have
onChange event for my input?
Buttons (All/Active/Completed)
<Button text=”All”>
OnClick Event to update some state somewhere
Count / Items Left
Getting a count of the items in the state that are still left to do
Check All (Should Have)
Clear Completed button (deletes all to-done)
Button to complete all (should have)
Changes all to-dones to to-dos / completed to active

## React Component Hierarchy
Index.js
|-- App.js
|---- currentView (state)
|---- todos (state)
|--- filter todos based on the currentView before rendering
|---- return (
	<Header>
	<Input>
		<button>
	<TodoList todos>
		Loop through todos to render
		<TodoItem>
			Checkbox
			Text
			DeleteButton


## Variable 
STATE
Todo item 
Text: laundry
Done: false // status: ‘todo’
Todos - Array of Todo Item 
Saw an example of something similar in the wizards/elixirs/houses
To show count, we can use length of the visible todos to show there.
CurrentView
String for view (‘active’, ‘all’, ‘completed’)


## Functions 

function App();
    //Set up state
    const [task, setTask] = useState([]);
    const [count, setCount] = useState([]);
    const [inputValue, setInputValue] = useState([]);
    const [view, setView] = useState([Active]);

    handleView(event); sets view based on which view button has been selected
    if (current view !== view clicked) {
        set View State to be view clicked.
        if (view clicked === Active) {
            set view to active
        } else if (view clicked === completed) {
            set view to completed
        } else {
            set view to all
        }
 

    handleInputChange(event); receives the value input from the user
    setInputValue(event.target.value);

    handleClick(event); when the submit button is clicked it will add input to the list
    let newTask = [ ...task, inputValue ]
    setTask(newTask);
    setCount(newTask.length);
    //clear input value after click

    handleComplete(id of task) {
        if (task.id == id of task) {
                if (!item.complete){
                    //Task is pending, modifying it to complete and increment the count
                    setCompletedTaskCount(completedTaskCount + 1);
                } 
                else {
                    //Task is complete, modifying it back to pending, decrement Complete count
                    setCompletedTaskCount(completedTaskCount - 1);
                }
            update the state?
            

    returns the jsx html layout for the page. 
        <div>
            <h1>To Do List</h1>
            <h2>You have {number} of items left in your to-do list</h2>
            <input type="text" placeholder="What do you need to do?" onChange={handleInput();}></input>
            <button onClick={handleClick}>Add Task</button>
            <div className="container">
                <div className="buttons is-centered">
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                    <button>Clear Completed</button>
            </div>
            <div>
                <ul>
                    {task.map(task => {
                        return <li key={task}>{task}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

EXPORT APP

----------------------------------

IMPORT APP TO index.js
<APP /> under root

--------------------------------

  
