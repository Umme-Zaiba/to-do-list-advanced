import { useState, useEffect } from 'react';

const useTasks = () => {
  // Load tasks from localStorage or use an empty array if none are found
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setOpen(false);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const filteredTasks = tasks.filter(task => 
    (filter ? task.category === filter : true) && 
    (search ? task.title.toLowerCase().includes(search.toLowerCase()) : true)
  );



  useEffect(() => {
    const interval = setInterval(() => {
      
      const currentTime = new Date();

      tasks.forEach(task => {
        if (task.reminderTime) {
          const reminderTime = new Date(task.reminderTime);
          if (currentTime >= reminderTime && !task.reminded) {
            alert(`Reminder for task: ${task.title}`);
            
            
            
                 
            // task.reminded = true;
            setTasks(prevTasks => {
              const newTasks = prevTasks.map(t => 
                t.id === task.id ? { ...t, reminded: true } : t
              );
              localStorage.setItem('tasks', JSON.stringify(newTasks));
              return newTasks;
            });
          }
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [tasks]);

  return {
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


// import { useState, useEffect } from 'react';

// const useTasks = () => {
//   const [tasks, setTasks] = useState([]);
//   const [filter, setFilter] = useState('');
//   const [search, setSearch] = useState('');
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleAddTask = (task) => {
//     setTasks([...tasks, task]);
//     setOpen(false);
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };

//   const completeTask = (id) => {
//     setTasks(tasks.map(task => 
//       task.id === id ? { ...task, completed: !task.completed } : task
//     ));
//   };

//   const filteredTasks = tasks.filter(task => 
//     (filter ? task.category === filter : true) && 
//     (search ? task.title.toLowerCase().includes(search.toLowerCase()) : true)
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
      
//       const nowTime = new Date(); 
     
//       tasks.forEach(task => {
//         if (task.reminderTime) {
//           const reminderTime = new Date(task.reminderTime);
//           if (nowTime >= reminderTime && !task.reminded) {
//             alert(`Reminder for task: ${task.title}`);
//             task.reminded = true; 
//           }
//         }
//       });
      
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [tasks]);

//   return {
//     filter,
//     setFilter,
//     search,
//     setSearch,
//     open,
//     handleClickOpen,
//     handleClose,


//     handleAddTask,
//     deleteTask,
//     completeTask,
//     filteredTasks
//   };
// };

// export default useTasks;
