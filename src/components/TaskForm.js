import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Select, FormControl, InputLabel, Button, Box } from '@mui/material';

function TaskForm({ open, handleClose, handleAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const [reminderTime, setReminderTime] = useState('');

  const handleAdd = () => {
    if (title && description && category) {
      const newTask = {
        id: Date.now(),
        title,
        description,
        category,
        reminderTime,
        completed: false
      };


      handleAddTask(newTask);

      setTitle('');
      setDescription('');
      setCategory('');
      setReminderTime('');
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" PaperProps={{ style: { width: '35%' } }}>
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent dividers>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            autoFocus
            variant="outlined"
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={4}
            variant="outlined"
          />
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              variant="outlined"
            >
              <MenuItem value="Work">Work</MenuItem>
              <MenuItem value="Personal">Personal</MenuItem>
              <MenuItem value="Shopping">Shopping</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
          </FormControl>



          <TextField
            label="Reminder"
              // type ="time"
              type="datetime-local"
            
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
                  InputLabelProps={{
               shrink: true,
            }}
            fullWidth
          />


        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="error" variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleAdd} color="primary" variant="outlined">
          Add Task
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default TaskForm;
