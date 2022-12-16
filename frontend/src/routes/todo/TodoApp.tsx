import * as React from 'react'
import { useState, useRef } from 'react';
import { v4 as uuidv4 } from "uuid";
import TodoList from './components/TodoList';

type todoType = {
  id: string,
  name: string,
  completed: boolean
}

const TodoApp: React.FC = () => {

  const [todos, setTodos] = useState<todoType[]>([]);

  const todoNameRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    // タスクを追加する
    const name = todoNameRef.current!.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}];
    });
    todoNameRef.current!.value = "";
  };

  const toggleTodo = (id: string) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    if (todo !== undefined) {
      todo.completed = !todo.completed;
    }
    setTodos(newTodos);
  };

  const handleDeleteCompletedTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newTodos = [...todos].filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input type="text" ref={todoNameRef}></input>
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleDeleteCompletedTodo}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  )
}

export default TodoApp