// components/TaskItem.js
import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, Checkbox, IconButton, Paper } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

const TaskItem = ({ task, deleteTask, completeTask }) => {
  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleComplete = () => {
    completeTask(task.id);
  };

  return (
    <Paper elevation={2} sx={{ mb: 1 }}>
      <ListItem>
        <Checkbox
          edge="start"
          checked={task.completed}
          onChange={handleComplete}
          inputProps={{ 'aria-labelledby': `checkbox-list-label-${task.id}` }}
        />
        <ListItemText
          id={`checkbox-list-label-${task.id}`}
          primary={task.title}
          secondary={task.description}
          sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        />
        <ListItemSecondaryAction>

        
          <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
            <DeleteIcon style={{color: 'crimson'}}/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Paper>
  );
};

export default TaskItem;
