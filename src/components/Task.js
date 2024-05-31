import React from 'react';

function Task({ task, moveTask }) {
  const handleMove = () => {
    if (task.status === 'Pending') moveTask(task.id, 'In Progress');
    else if (task.status === 'In Progress') moveTask(task.id, 'Completed');
  };

  return (
    <div className="task">
      <div className='title'>{task.title}</div>
      {task.description && <div className='disc'>{task.description}</div>}
      {task.status === 'Completed' && <p >{new Date(task.timestamp).toLocaleString()}</p>}
      {task.status !== 'Completed' && <button className='btn' onClick={handleMove}>{task.status === 'Pending' ? 'Start' : 'Complete'}</button>}
    </div>
  );
}

export default Task;
