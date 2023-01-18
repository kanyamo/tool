import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import TodoList from './components/TodoList';
import { Button, TextField } from '@mui/material';
import { todoType } from './models/todoType';

const TodoApp: React.FC = () => {

  const [todos, setTodos] = useState<todoType[]>([]);

  const todoNameRef = useRef<HTMLInputElement>(null);

  // useEffectハンドラを使用して、コンポーネントがマウントされたときにLocalStorageからtodoを読み込む
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(storedTodos);
  }, []);

  // useEffectハンドラを使用して、todoが変更されるたびにLocalStorageにtodoを保存する
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
      <div className="todo-name-input-container">
        <TextField
          label="新しいタスク名"
          variant="outlined"
          inputRef={todoNameRef}
          fullWidth
          placeholder="本を読む"
        />
      </div>
      <div className="action-buttons">
        <Button variant="contained" onClick={handleAddTodo}>タスクを追加</Button>
        <Button variant="contained" onClick={handleDeleteCompletedTodo}>完了したタスクの削除</Button>
      </div>
      <h2>
        使い方
      </h2>
      <p>
        シンプルなやることリストアプリです。タスク名を入力して「タスクを追加」ボタンを押すとタスクが追加されます。
      </p>
      <p>
        Todoリストでタスクをタップすると完了・未完了を切り替えることができます。「完了したタスクを削除」ボタンを押すと、完了したタスクをすべて削除できます。
      </p>
    </div>
  )
}

export default TodoApp;