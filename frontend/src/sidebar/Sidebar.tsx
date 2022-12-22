import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <aside>
      <h2>ツール一覧</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="todo/">Todo</Link>
        </li>
        <li>
          <Link to="links/">Links</Link>
        </li>
        <li>
          <Link to="pw_generator/">PWGenerator</Link>
        </li>
      </ul>
    </aside>
  )
}

export default SideBar