import React from 'react'
import NotificationItem from './NotificationItem'

type notificationType = {
  id: string,
  title: string,
  content: string,
  pub_date: string
}

type notificationsType = {
  notifications: Array<notificationType>
}

const NotificationList: React.FC<notificationsType> = ({ notifications }) => {
  return (
    <div>
      <ul>
        {
          notifications.map((notification: notificationType) => 
            <li key={notification.id}>
              <NotificationItem notification={notification}></NotificationItem>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default NotificationList