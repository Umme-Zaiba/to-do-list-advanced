import React from 'react';
import { Paper, Box, FormControl, InputLabel, TextField, MenuItem, Select, Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

function Filter({ filter, setFilter, search, setSearch, handleClickOpen }) {
  return (
    <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            fullWidth
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Work">Work</MenuItem>
            <MenuItem value="Personal">Personal</MenuItem>
            <MenuItem value="Shopping">Shopping</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
          sx={{ mx: 2 }}
          variant="outlined"
        />
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
          sx={{
            height: 56,
            whiteSpace: 'nowrap',
            padding: '0 16px',
            fontSize: '0.875rem',
            minWidth: 120
          }}
        >
          Add Task
        </Button>

      </Box>
    </Paper>
  );
}

export default Filter;
