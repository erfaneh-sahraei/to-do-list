import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck , faPen , faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import './App.css';


function App() {

  // Tasks (ToDo List) State
const [toDo, setToDo]= useState([
  // {"id":1, "title":"Task 1" , "status":false},
  // {"id":2, "title":"Task 2" , "status":false},
]);

// Temp State
const [newTask , setNewTask] = useState('');
const [updateData , setUpdateData] = useState('');

//Add task
const addTask=()=>{
  //
}

//Delete task
const deleteTask=()=>{
  //
}

//Mark task as done or completed
const markDone=(id)=>{
  //
}


//Cancel update
const cancelUpdate=()=>{
  //
}

//Change task for update
const changeTask=(e)=>{
  //
}

//Update task
const updateTask=()=>{
  //
}

  return (
    <div className="container App">
      <br/><br/>
      <h2>To Do List App(ReactJS)</h2>
      <br/><br/>
      {/*Display ToDos*/}
      {toDo && toDo.length ? '' : 'Not Tasks...'}
    </div>
  );
}

export default App;
