import React from 'react'

type notificationType = {
  id: string,
  title: string,
  content: string,
  pub_date: string
}

type notificationProps = {
  notification: notificationType
}

const NotificationItem: React.FC<notificationProps> = ({ notification }) => {
  return (
    <div>
      <h3>{ notification.title }</h3>
      <p>{ notification.content }</p>
    </div>
  )
}

export default NotificationItem