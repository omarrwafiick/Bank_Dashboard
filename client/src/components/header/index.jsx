import { Badge, Drawer, Image, List, Space, Typography } from 'antd' 
import React, { useEffect, useState } from 'react'
import logo from '../../../public/assets/images/logo.png'
import { MailOutlined, NotificationOutlined } from '@ant-design/icons'

const AppHeader = () => {
  const [notificationsState, setNotificationsState] = useState(false);
  const [commentsState, setCommentsState] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(()=>{
    setNotifications(['dsdsdsds','weewewewewew','weeeeeeeeewe','weeeeeeeeee']);
    setComments(['dsdsdsds','weewewewewew','weeeeeeeeewe','weeeeeeeeee','dsdsdsds','weewewewewew','weeeeeeeeewe','weeeeeeeeee']);
  },
  []);

  return (
    <header className='h-20 w-11/12 flex justify-between items-center p-4 border-b-2 border-black/10 rounded-md'>
      <Image width={50} src={logo}></Image>
      <Typography.Title>Dashboard</Typography.Title>

      <Space> 
        <Badge count={comments.length}> 
          <MailOutlined onClick={() => setCommentsState(true)} className='text-2xl' />
        </Badge>
        <Badge count={notifications.length}> 
          <NotificationOutlined onClick={ () =>setNotificationsState(true)} className='text-2xl' />
        </Badge>
      </Space>
      <Drawer title='comments' open={commentsState} onClose={() => setCommentsState(false)} maskClosable={true}>
        <List 
          dataSource={comments}
          renderItem={(item)=>{
            return (
              <List.Item>
                <Typography.Text>{item}</Typography.Text>
              </List.Item>
            )
          }}
        ></List>
      </Drawer>
      <Drawer title='notifications' open={notificationsState} onClose={() => setNotificationsState(false)} maskClosable={true}>
          <List 
          dataSource={notifications}
          renderItem={(item)=>{
            return (
              <List.Item>
                <Typography.Text>{item}</Typography.Text>
              </List.Item>
            )
          }}
        ></List>
      </Drawer>
    </header>
  )
}

export default AppHeader