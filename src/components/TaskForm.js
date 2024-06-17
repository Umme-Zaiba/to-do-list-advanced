import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Box, Paper } from '@mui/material';

const TaskForm = ({addTask}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(title && description && category){
            addTask({
                id: Date.now(),
                title,
                description, 
                category,
                completed: false
            });
            setTitle('');
            setDescription('');
            setCategory('');
        }
    };

  return (
    <Paper elevation ={3} sx ={{p:4}}>
    <Box component = 'form' onSubmit={handleSubmit} sx = {{ mb:2 }}>
        <TextField
            label="Title"
            value ={title}
            onChange={ (e)=> setTitle(e.target.value)}
            fullWidth
            margin='normal'
        />
        <TextField
            label="Description"
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
            fullWidth
            margin='normal'
        />
        <FormControl fullWidth margin='normal'>
            <InputLabel>Category</InputLabel>
            <Select
                label="Category"  
                value={category}
                onChange={(e)=> setCategory(e.target.value)}
            >
                <MenuItem value="Work">Work</MenuItem>
                <MenuItem value="Personal">Personal</MenuItem>
                <MenuItem value="Shopping">Shopping</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
            </Select>
        </FormControl>
        <Button type='submit' variant='contained' color='primary'>
            Add Task
        </Button>
    </Box>
    </Paper>
  )
}

export default TaskForm
