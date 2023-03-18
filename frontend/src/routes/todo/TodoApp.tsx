import React from 'react'
import { useState, useRef, useEffect } from 'react';
import TodoList from './components/TodoList';
import { Button, TextField } from '@mui/material';
import Todo from './models/todo';

const TodoApp: React.FC = () => {

  const [todos, setTodos] = useState<Array<Todo>>([]);

  const todoNameRef = useRef<HTMLInputElement>(null);

  // useEffectハンドラを使用して、コンポーネントがマウントされたときにLocalStorageからtodoを読み込む
  useEffect(() => {
    const storedTodos = JSON.parse(
      localStorage.getItem('todos') || '[]'
    ).map((todoObj: any) => new Todo(todoObj));
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
      return [...prevTodos, new Todo({name: name})];
    });
    todoNameRef.current!.value = "";
  };

  const toggleTodo = (id: string) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    if (todo !== undefined) {
      todo.toggleTodo();
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
          placeholder="今日は何をする予定ですか？"
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
