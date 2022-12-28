import { Link } from 'react-router-dom';
import NotificationList from './NotificationList';
import { useState, useEffect } from 'react';
import React from 'react';

type notificationType = {
  id: string,
  title: string,
  content: string,
  pub_date: string
}



const SideBar: React.FC = () => {
  const [notifications, setNotifications] = useState<notificationType[]>([]);
  
  useEffect(() => {
    async function getNotifications() {
      try {
        const response = await fetch('http://localhost:8000/api/notifications/');
        const data = await response.json();
        console.log(data);
        setNotifications(data);
      } catch (error) {
        console.error(error);
      }
    }
  
    getNotifications();
  }, []);  // 第2引数に空の配列を渡すことで、最初のマウント時のみ処理を行う
  return (
    <aside>
      <section>
        <h2>Tools List</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="todo/">Todo</Link>
          </li>
          <li>
            <Link to="links/">Links</Link>
          </li>
          <li>
            <Link to="pw_generator/">PWGenerator</Link>
          </li>
        </ul>
      </section>
      <section>
        <h2>
          What's New?
        </h2>
        <NotificationList notifications={notifications}></NotificationList>
      </section>
    </aside>
  )
}

export default SideBar