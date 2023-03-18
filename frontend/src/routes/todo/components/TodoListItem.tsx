import React from 'react';
import todoType from '../models/todo';

type TodoProps = {
  todo: todoType,
  toggleTodo: (id: string) => void,
}

const TodoListItem : React.FC<TodoProps> = ({ todo, toggleTodo}) => {


  return (
    <div className="todo-item-container">
      <input
        type="checkbox"
        checked={todo.completed}
        readOnly
        id={`checkbox_${todo.id}`}
        onChange={() => {toggleTodo(todo.id)}}
      />
      <label htmlFor={`checkbox_${todo.id}`}>
        {todo.name}
      </label>
    </div>
  );
};

export default TodoListItem;
