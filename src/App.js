import React, { useState } from 'react';
import List from './components/List'
import User from './components/User'

const App = () => {
  const [users] = useState([
    'Julien', 'Christophe', 'Roby'
  ]);
  const [tasks, setTasks] = useState([
    'Julien doit aller voir ailleurs',
    'Chirstophe doit faire le ménage',
    'Roby doit faire les courses'
  ]);
  const [currentUser, setCurrentUser] = useState('Julien');
  const [newTask, setNewTask] = useState();

  const list = () => tasks.map(element =>
    <List
      //key = {element}
      content = {element}
    />
  )

  const userList = (list) => list.map(element =>
    <User
      //key = {element}
      content = {element}
      action = {() => userChange(element)}
    />
  )

  const userChange = (user) => {
    setCurrentUser(user);
  }

  const addTasks = (event) => {
    event.preventDefault()
    let tasksList = tasks
    tasksList.push(currentUser + ' doit ' + newTask)
    setTasks(tasksList)
    setNewTask();
  }

  const handleTaskChange = (event) => {
    setNewTask(event.target.value)
  }

  return (
    <div>
      <h1>Tâche pour {currentUser}!</h1>
      <h2>Choisir un membre:</h2>
      <ul>
        {userList(users)}
      </ul>
      <h2>Assigner un tâche:</h2>
      <form onSubmit={addTasks}>
        <input placeholder="doit faire..."
          value={newTask} 
          onChange={handleTaskChange}
        />
        <button type="submit" >Ajouter</button>
      </form>
      <h2>Tâches</h2>
      <ul>
        {list()}
      </ul>
    </div>
  );
}

export default App;
