// components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';
import { List, Paper, Typography } from '@mui/material';

const TaskList = ({ tasks, deleteTask, completeTask }) => {
  return (
    <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
      {tasks.length === 0 ? (
        <Typography variant="h6" align="center" color="textSecondary">
          No tasks available
        </Typography>
      ) : (
        <List>
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          ))}
        </List>
      )}
    </Paper>
  );
};

export default TaskList;
