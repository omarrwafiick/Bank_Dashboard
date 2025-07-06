import { Badge, Drawer, Image, List, Space, Typography } from 'antd' 
import React, { useEffect, useState } from 'react'
import logo from '../../../public/assets/images/logo2.png'
import { BellFilled } from '@ant-design/icons'

const AppHeader = () => { 
  const [commentsState, setCommentsState] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(()=>{ 
    setComments(['dsdsdsds','weewewewewew','weeeeeeeeewe','weeeeeeeeee','dsdsdsds','weewewewewew','weeeeeeeeewe','weeeeeeeeee']);
  },
  []);

  return (
    <header className='h-20 w-full flex justify-between items-center header'>
      <Image width={180} src={logo}></Image> 

      <Space> 
        <Badge count={comments.length}> 
          <BellFilled onClick={() => setCommentsState(true)} className='text-2xl' />
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
    </header>
  )
}

export default AppHeader