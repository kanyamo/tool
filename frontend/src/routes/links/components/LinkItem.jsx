import React from 'react'

const LinkItem = ({ link }) => {
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