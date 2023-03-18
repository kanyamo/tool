import React, { useState } from 'react';
import Todo from '../models/todo';
import TodoListItem from './TodoListItem';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

type todoListProps = {
  todos: Array<Todo>,
  toggleTodo: (id: string) => void,
}

enum SortType {
  Asc = "asc",
  Desc = "desc",
}

const TodoList: React.FC<todoListProps> = ({todos, toggleTodo}) => {
  const [sortBy, setSortBy] = useState<SortType>(SortType.Asc);

  // Todoを並び替えるための関数を実装する
  const sortTodos = (todos: Array<Todo>, sortType: SortType) => {
    const sortedTodos = [...todos].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return sortType === SortType.Asc ? -1 : 1;
      }
      if (nameA > nameB) {
        return sortType === SortType.Asc ? 1 : -1;
      }
      return 0;
    });
    return sortedTodos;
  };

  // Todoを並び替えるための関数を呼び出す
  const sortedTodos = sortTodos(todos, sortBy);

  // Todoを並び替えるためのセレクトメニューを追加する
  const handleSortChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as SortType);
  };

  return (
    <div>
      並び替え：
      <Select value={sortBy} onChange={handleSortChange}>
        <MenuItem value={SortType.Asc}>A-Zで並び替える</MenuItem>
        <MenuItem value={SortType.Desc}>Z-Aで並び替える</MenuItem>
      </Select>
      <ul>
        {sortedTodos.map((todo) =>
          <li key={todo.id}>
            <TodoListItem todo={todo} toggleTodo={toggleTodo}></TodoListItem>
          </li>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
