import * as React from 'react';
import './App.css';
import TodoApp from './routes/todo/TodoApp';
import LinksApp from './routes/links/LinksApp';
import Home from './routes/home/Home';
import NoMatch from './routes/no_match/NoMatch';
import Sidebar from './sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';

function App(): React.ReactElement {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <div className="column1">
            <h1>One-Stop Tools</h1>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="todo/" element={<TodoApp></TodoApp>}></Route>
              <Route path="links/" element={<LinksApp></LinksApp>}></Route>
              <Route path="*" element={<NoMatch></NoMatch>}></Route>
            </Routes>
          </div>
          <div className="column2">
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;