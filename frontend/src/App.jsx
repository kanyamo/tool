import './App.css';
import TodoApp from './routes/todo/TodoApp';
import LinksApp from './routes/links/LinksApp';
import Home from './routes/home/Home';
import NoMatch from './routes/no_match/NoMatch';
import Footer from './footer/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <h1>One-Stop Tools</h1>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="todo/" element={<TodoApp></TodoApp>}></Route>
        <Route path="links/" element={<LinksApp></LinksApp>}></Route>
        <Route path="*" element={<NoMatch></NoMatch>}></Route>
      </Routes>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
