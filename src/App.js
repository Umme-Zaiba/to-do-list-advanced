import { useState, useEffect } from 'react';
import './App.css';
import { Container, Typography } from '@mui/material';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch]= useState('');

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

  const deleteTask =(id) => {
    setTasks(tasks.filter(task => task.id !==id));
  }

  const completeTask = (id) =>{
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !tasks.completed} : task));
  }
  const filteredTasks = tasks.filter(task => 
    task.category.includes(filter) && 
    (task.title.toLowerCase().includes(search.toLowerCase()) || task.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <Container>
      <Typography variant ="h2" gutterBottom>
        To-Do list
      </Typography>
      <TaskForm addTask={addTask}/>
      <Filter setFilter={setFilter} setSearch = {setSearch}/>
      <TaskList  tasks = {filteredTasks} deleteTask ={deleteTask} completeTask={completeTask} />
    </Container>
  );
}

export default App;
