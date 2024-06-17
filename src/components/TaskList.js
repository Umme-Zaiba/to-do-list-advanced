import React from 'react';
import { List, Divider } from '@mui/material';
import TaskItem from './TaskItem';

const TaskList = ({tasks, deleteTask, completeTask}) => {
  return (
    <List>
      {tasks.map(task => (
        <React.Fragment key={task.id}>
          <TaskItem task={task} deleteTask={deleteTask} completeTask={completeTask}/>
          <Divider/>
        </React.Fragment>
      ))}
    </List>
  )
}
export default TaskList
