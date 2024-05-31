import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addTask(title, description);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className='taskinput'
        placeholder="Task Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        className='taskinput'
        placeholder="Task Description (optional)" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button type="submit" className='submit'>Add Task</button>
    </form>
  );
}

export default TaskInput;
