import React from 'react';
import { Container, Typography } from '@mui/material';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Filter from './components/Filter';
import useTasks from './hooks/useTasks';

function App() {
  const {
    filter,
    setFilter,
    search,
    setSearch,
    open,
    handleClickOpen,
    handleClose,
    handleAddTask,
    deleteTask,
    completeTask,
    filteredTasks
  } = useTasks();

  return (
    <Container maxWidth="sm">
      <Typography 
        variant="h3" gutterBottom align="center"            
        sx={{ 
          mb: 1, 
          fontWeight: 'bold', 
          color: 'gray', 
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', 
          padding: '10px 0',
          borderBottom: '2px solid gray'
        }}
      >
        To-Do List
      </Typography>
      <Filter filter={filter} setFilter={setFilter} search={search} setSearch={setSearch} handleClickOpen={handleClickOpen} />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} completeTask={completeTask} />
      <TaskForm open={open} handleClose={handleClose} handleAddTask={handleAddTask} />
    </Container>
  );
}

export default App;
