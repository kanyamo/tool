import * as React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div>
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
      </ul>
    </div>
  )
}

export default SideBar