import { useState, useEffect } from 'react';
import './App.css';
import { Tasks } from './Tasks';
import { Header } from './components/Header';
import AddTask from './components/AddTask';

function App() {
  const [showedAddTask, setShowedAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
   const getTask = async () => {
     const taskFromServer = await fetchTasks();
     setTasks(taskFromServer);
   }
    getTask();
  }, []);


  //Fetch Task
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:4000/tasks');
    const data = await res.json();
    console.log(data);
    return data
  }

// Add Task
/*const addTask = (task) =>{
  const id = Math.floor(Math.random()*1000) + 1 ;
  const newTask = {id, ...task}
  setTasks([...tasks, newTask]);
}*/
const addTask = async (task) =>{
  const res = await fetch('http://localhost:4000/tasks',{
    method: 'POST',
    headers: {
      'Content-type' : 'application/json'
    },
    body: JSON.stringify(task),
  });

  const data = await res.json();
  setTasks([...tasks, data]);
}


// Delete Task

/*const DeleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id));
}*/
const DeleteTask = async (id) => {
  await fetch(`http://localhost:4000/tasks/${id}`,{
    method: 'DELETE'
  })
  setTasks(tasks.filter((task)=> {
    return task.id !== id;
  }));
}



// Toggle Reminder
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task)=> task.id === id
    ?{...task, reminder:
    !task.reminder} : task 
    ))
  }

  return (
    <>
    <div className="container">
    
      <Header title={'Task Tracker'} onAdd={()=>setShowedAddTask(!showedAddTask)} showTask={showedAddTask}/>
      {showedAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete=
      {DeleteTask} onToggle={toggleReminder}
       />) : (
        'No Task to show'
      )}

    </div>
    </>
  );
}

export default App;
