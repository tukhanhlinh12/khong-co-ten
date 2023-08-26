import React from 'react';

const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      <span>{task.text}</span>
      <button className='buttonx' onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
