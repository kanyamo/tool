import React from 'react';

type todoType = {
    id: string,
    name: string,
    completed: boolean
}

type TodoProps = {
  todo: todoType,
  toggleTodo: (id: string) => void
}

const Todo : React.FC<TodoProps> = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id)
  }


  return (
    <div>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          onChange={handleTodoClick}
        />
      </label>
    {todo.name}
  </div>
  );
};

export default Todo;