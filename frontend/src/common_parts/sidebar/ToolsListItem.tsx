import React from 'react'
import { Link, To, useLocation } from 'react-router-dom';

type ToolsListItemProps = {
  to: To,
  title: string,
}

const ToolsListItem : React.FC<ToolsListItemProps> = ({to, title}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li>
      <Link to={to}>
        <div className='tools-list-item__inner'>
          <div className="centered">
            <span className="tool-title">{title}</span>
            {isActive && <span className="tool-title__active">[Active]</span>}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ToolsListItem
