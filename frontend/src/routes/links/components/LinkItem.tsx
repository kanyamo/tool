import React from 'react'
import { linkProps } from '../models/linkType'

const LinkItem: React.FC<linkProps> = ({ link }) => {
  return (
    <div>
      <a href={ link.url }>
        <h3>
          { link.name }
        </h3>
        <p>
          { link.description }
        </p>
      </a>
    </div>
  )
}

export default LinkItem