

import React from 'react';
import { useDrop } from 'react-dnd';
import Task from './Task';

function TaskList({ tasks, status, moveTask }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TASK',
    drop: (item) => {
      if (item.status !== status) {
        moveTask(item.id, status);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const pendingTasks = tasks.filter(task => task.status === 'Pending').length;
  const inProgressTasks = tasks.filter(task => task.status === 'In Progress').length;
  const completedTasks = tasks.filter(task => task.status === 'Completed').length;

  return (
    <div ref={drop} className={`task-list ${status.toLowerCase()} ${isOver ? 'over' : ''}`}>
      <div className='heading'>{status}
        {status === 'Pending' && `: ${pendingTasks}`}
        {status === 'In Progress' && `: ${inProgressTasks}`}
        {status === 'Completed' && `: ${completedTasks}`}</div>
      {tasks.filter(task => task.status === status).map(task => (
        <Task key={task.id} task={task} moveTask={moveTask} />
      ))}
    </div>
  );
}

export default TaskList;


