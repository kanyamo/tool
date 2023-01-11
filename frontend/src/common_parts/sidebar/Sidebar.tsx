import NotificationList from './NotificationList';
import { useState, useEffect } from 'react';
import React from 'react';
import ToolsListItem from './ToolsListItem';
import H2Center from '../headers/H2Center';

type notificationType = {
  id: string,
  title: string,
  content: string,
  pub_date: string
}

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const SideBar: React.FC = () => {
  const [notifications, setNotifications] = useState<notificationType[]>([]);
  
  useEffect(() => {
    async function getNotifications() {
      try {
        fetch(`${API_BASE_URL}api/notifications/`)
          .then((response) => {
            return response.json()
          })
          .then((data) => {
            setNotifications(data);
          });
      } catch (error) {
        console.error(error);
      }
    }
  
    getNotifications();
  }, []);  // 第2引数に空の配列を渡すことで、最初のマウント時のみ処理を行う
  return (
    <aside>
      <section>
        <H2Center>Tools List</H2Center>
        <ul className='tools-list'>
          <ToolsListItem to="/" title='Home'></ToolsListItem>
          <ToolsListItem to="/links" title='Links'></ToolsListItem>
          <ToolsListItem to="/todo" title='Todo'></ToolsListItem>
          <ToolsListItem to="/pw_generator" title='Password Generator'></ToolsListItem>
        </ul>
      </section>
      <section>
        <H2Center>What's New?</H2Center>
        <NotificationList notifications={notifications}></NotificationList>
      </section>
    </aside>
  )
}

export default SideBar