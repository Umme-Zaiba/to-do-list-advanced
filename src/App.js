import { useState, useEffect } from 'react';
import './App.css';
import { Container, Typography } from '@mui/material';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if(savedTasks){
      setTasks(savedTasks);
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task)=> {
    setTasks([...tasks, task]);
  }

  return (
    <Container>
      <Typography variant ="h2" gutterBottom>
        To-Do list
      </Typography>
      <TaskForm addTask={addTask}/>
      <TaskList/>
    </Container>
  );
}

export default App;
