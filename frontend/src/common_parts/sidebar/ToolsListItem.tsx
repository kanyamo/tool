import React from 'react'
import { Link } from 'react-router-dom';

type ToolsListItemProps = {
  to: string,
  title: string,
}

const ToolsListItem : React.FC<ToolsListItemProps> = ({to, title}) => {
  return (
    <li>
      <Link to={to}>
        <div className='tools-list-item__inner'>
          <div className="centered">
            <span className="tool-title">{title}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ToolsListItem
