import './App.css';
import TodoApp from './routes/todo/TodoApp';
import LinksApp from './routes/links/LinksApp';
import Home from './routes/home/Home';
import NoMatch from './routes/no_match/NoMatch';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="todo/" element={<TodoApp></TodoApp>}></Route>
        <Route path="links/" element={<LinksApp></LinksApp>}></Route>
        <Route path="*" element={<NoMatch></NoMatch>}></Route>
      </Routes>
    </div>
  );
}

export default App;
