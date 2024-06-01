

import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

function App() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (title, description) => {
    setTasks([...tasks, { id: Date.now(), title, description, status: 'Pending', timestamp: null }]);
  };

  const moveTask = (id, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === id ? 
      { ...task, status: newStatus, timestamp: newStatus === 'Completed' ? new Date() : null } : 
      task
    ));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <div className='text-4xl font-semibold pb-4'>To-Do List</div>
        <TaskInput addTask={addTask} />
        <div className="task-sections">
          <div className='wraptask'>
            <TaskList tasks={tasks} status="Pending" moveTask={moveTask} />
            <TaskList tasks={tasks} status="In Progress" moveTask={moveTask} />
            <TaskList tasks={tasks} status="Completed" moveTask={moveTask} />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;

