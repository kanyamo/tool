import React from 'react';
import LinkItem from './LinkItem';
import { ToolsLink, linksProps } from '../models/linkType';

const LinkList : React.FC<linksProps>= ({ links }) => {
  return (
    <div>
      <ul>
        {
          links.map((link: ToolsLink) => 
            <li key={link.id}>
              <LinkItem link={link}></LinkItem>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default LinkList