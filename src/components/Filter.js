import React from 'react'
import { TextField, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material'

const Filter = ({setFilter, setSearch}) => {
  const handleCategoryChange =(e) => {
    setFilter(e.target.value);
  };

  const handleSearchChange =(e) => {
    setSearch(e.target.value);
  }

  return (
    <Box sx={{ mb:2 }}>
      <FormControl fullWidth margin='normal'>
        <InputLabel>Category</InputLabel>
        <Select 
          label= "Category"
          defaultValue =""
          onChange ={ handleCategoryChange }
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
        onChange={handleSearchChange}
        fullWidth
        margin ='normal'
      />
    </Box>
  )
}

export default Filter
