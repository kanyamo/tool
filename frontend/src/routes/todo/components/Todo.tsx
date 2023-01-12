import React from 'react';
import todoType from '../models/todoType';

type TodoProps = {
  todo: todoType,
  toggleTodo: (id: string) => void
}

const Todo : React.FC<TodoProps> = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id)
  }


  return (
    <div className="todo-item-container">
      <input
        type="checkbox"
        checked={todo.completed}
        readOnly
        id={`checkbox_${todo.id}`}
        onChange={handleTodoClick}
      />
      <label htmlFor={`checkbox_${todo.id}`}>
        {todo.name}
      </label>
    </div>
  );
};

export default Todo;