import React from 'react'

type linkType = {
  id: string,
  url: string,
  name: string,
  description: string
}

type linkProps = {
  link: linkType
}

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