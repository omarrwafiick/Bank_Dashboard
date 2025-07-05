import React from 'react'
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'

const AppSideMenu = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-screen w-2/12 flex flex-col justify-start items-center border-r-2 border-black/10'>
        <Menu   
            className="w-7/12 custom-menu"
            onClick={(item)=>{ 
                navigate(item.key);
            }}
            items={
            [
                {
                    label:'Dashboard',
                    icon: <AppstoreOutlined />, 
                    key:'/'
                },
                {
                    label:'Inventory',
                    icon: <ShoppingCartOutlined />,
                    key:'/inventory'
                },
                {
                    label:'Customers',
                    icon: <UserOutlined />,
                    key:'/customers'
                },
                {
                    label:'Orders',
                    icon:<ShopOutlined />,
                    key:'/orders'
                }
            ]
        }> 
        </Menu>
    </div>
  )
}

export default AppSideMenu