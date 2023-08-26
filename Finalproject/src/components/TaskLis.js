import React from 'react';
import Task from './Task';

const TaskLis = ({ tasks, onToggle, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskLis;
