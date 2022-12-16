import React from 'react';
import Todo from './Todo';

type TodoListProps = {
  todos: Array<{
    id: string,
    name: string,
    completed: boolean
  }>,
  toggleTodo: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo}) => {
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