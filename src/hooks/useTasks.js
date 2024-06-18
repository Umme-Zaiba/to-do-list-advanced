import { useState, useEffect } from 'react';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  // Load tasks from local storage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    handleClose();
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

  return {
    tasks,
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
  };
};

export default useTasks;
