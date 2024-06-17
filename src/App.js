import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      console.log('Loading tasks from local storage:', savedTasks);
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      console.log('Saving tasks to local storage:', tasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completeTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const filteredTasks = tasks.filter(task => 
    (filter === '' || task.category === filter) && 
    (task.title.toLowerCase().includes(search.toLowerCase()) || task.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <Container>
      <Typography variant="h3" gutterBottom align = "center">
        To-Do List
      </Typography>
      <Box sx ={{ mb:4 }}>
      <TaskForm addTask={addTask} />
      </Box>
      <Box sx ={{ mb:4 }}>
      <Filter setFilter={setFilter} setSearch={setSearch} />
      </Box>
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} completeTask={completeTask} />
    </Container>
  );
}

export default App;
