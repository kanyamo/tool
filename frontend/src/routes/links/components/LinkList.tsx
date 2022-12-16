import React from 'react';
import LinkItem from './LinkItem';

type linkType = {
  id: string,
  url: string,
  name: string,
  description: string
}

type linksType = {
  links: Array<linkType>
}

const LinkList : React.FC<linksType>= ({ links }) => {
  return (
    <div>
      <ul>
        {
          links.map((link: linkType) => 
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