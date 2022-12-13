import React from 'react'
import LinkItem from './LinkItem'

const LinkList = ({ links }) => {
  return (
    <div>
      <ul>
        {
          links.map((link) => 
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