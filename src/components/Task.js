

import React from 'react';
import { useDrag } from 'react-dnd';

function Task({ task, moveTask }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { id: task.id, status: task.status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleMove = () => {
    if (task.status === 'Pending') moveTask(task.id, 'In Progress');
    else if (task.status === 'In Progress') moveTask(task.id, 'Completed');
  };

  return (
    <div ref={drag} className={`task ${isDragging ? 'dragging' : ''}`}>
      <div className='title'>{task.title}</div>
      {task.description && <div className='disc'>{task.description}</div>}
      {task.status === 'Completed' && <p>{new Date(task.timestamp).toLocaleString()}</p>}
      {task.status !== 'Completed' && <button className='btn' onClick={handleMove}>{task.status === 'Pending' ? 'Start' : 'Complete'}</button>}
    </div>
  );
}

export default Task;

