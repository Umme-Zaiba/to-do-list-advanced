import React from 'react'
import { ListItem, ListItemSecondaryAction, IconButton, Checkbox, ListItemText } from '@mui/material';
import {Delete as DeleteIcon } from '@mui/icons-material';

const TaskItem = ({task, deleteTask, completeTask}) => {
  const handleDelete = () => {
    deleteTask(task.id);
  }

  const handleComplete = () => {
    completeTask(task.id);
  }
 
  return (
    <ListItem disablePadding>
      <ListItemText
        primary={task.title}
        secondary={task.description}
        primaryTypographyProps={{variant : 'h6', sx: { textDecoration: task.completed ? 'line-through': 'none'}}}
        secondaryTypographyProps={{variant : 'body2', color: 'text.secondary'}}
      />
      <ListItemSecondaryAction>
        <Checkbox
          edge="end"
          onChange={handleComplete}
          checked = {task.completed}
        />
        <IconButton edge = "end" aria-label ="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default TaskItem
