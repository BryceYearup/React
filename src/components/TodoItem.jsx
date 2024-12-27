import React from 'react';

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={todo.completed} onChange={onToggle} />
      <span>{todo.text}</span>
      <button onClick={onDelete}>🗑️</button>
    </div>
  );
};

export default TodoItem;
