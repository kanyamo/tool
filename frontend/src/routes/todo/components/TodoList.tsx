import React from 'react';
import Todo from './Todo';
import { todoListProps } from '../models/todoType';

const TodoList: React.FC<todoListProps> = ({todos, toggleTodo}) => {
  return (
    <ul>
      {todos.map((todo) =>
        <li key={todo.id}>
          <Todo todo={todo} toggleTodo={toggleTodo}></Todo>
        </li>
      )}
    </ul>
  );
};

export default TodoList;