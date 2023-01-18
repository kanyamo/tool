import React from 'react'
import { linkProps } from '../models/linkType'

const LinkItem: React.FC<linkProps> = ({ link }) => {
  return (
    <div className="link-container">
      <a href={ link.url }>
        <h3>
          { link.name }
        </h3>
      </a>
      <p>
        { link.description }
      </p>
    </div>
  )
}

export default LinkItem