import * as React from 'react';
import './styles/styles.css';
import TodoApp from './routes/todo/TodoApp';
import LinksApp from './routes/links/LinksApp';
import Home from './routes/home/Home';
import NoMatch from './routes/no_match/NoMatch';
import PWGeneratorApp from './routes/pw_generator/PWGeneratorApp';
import GTAnalyzerApp from './routes/gt_analyzer/GTAnalyzerApp';
import Sidebar from './common_parts/sidebar/Sidebar';
import { Routes, Route, Link } from 'react-router-dom';

function App(): React.ReactElement {
  return (
    <div className="App" id="top">
      <div className="app-bar">
        <header>
          <Link to="/">
            <span className="">One-Stop Tools</span>
          </Link>
        </header>
      </div>
      <div className="wrapper">
        <div className="container">
          <div className="column1">
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="todo/" element={<TodoApp></TodoApp>}></Route>
              <Route path="links/" element={<LinksApp></LinksApp>}></Route>
              <Route path="pw_generator/" element={<PWGeneratorApp></PWGeneratorApp>}></Route>
              <Route path="gt_analyzer/" element={<GTAnalyzerApp></GTAnalyzerApp>}></Route>
              <Route path="*" element={<NoMatch></NoMatch>}></Route>
            </Routes>
          </div>
          <div className="column2">
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <footer>
          <a href="#top">トップに戻る</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
