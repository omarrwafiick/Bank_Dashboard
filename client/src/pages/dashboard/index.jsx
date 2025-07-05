import { DollarOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons'
import { Card, Space, Statistic, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { getOrders } from '../../services/fetchData';
import { VerticalBarChart } from '../../services/verticalBarChart';
import { PolarAreaChart } from '../../services/polarAreaChart';
import { PieChart } from '../../services/pieChart';

const Dashboard = () => {
  const [orders,setOrders] = useState();
  const [loading,setLoading] = useState(false);
  const [ordersCount,setOrdersCount] = useState(1852);
  const [customersCount,setCustomersCount] = useState(2400);
  const [inventoryCount,setInventoryCount] = useState(12);
  const [revenueCount,setRevenueCount] = useState(3000233);
  
  useEffect(()=>{
    setLoading(true);
    const getData = async () =>{
      await getOrders().then(res =>{
          const data = res.products;
          setOrders(data);
          setLoading(false);
        }
      ); 
    }
    getData();
  },[])

  const orderStyle = { color:'green', borderRadius: 30, backgroundColor: 'rgba(0,255,0,0.25)', fontSize: 40, padding: 12 }
  const inventoryStyle = { color:'blue', borderRadius: 30, backgroundColor: 'rgba(0,0,255,0.5)', fontSize: 40, padding: 12 }
  const customerStyle = { color:'purple', borderRadius: 30, backgroundColor: 'rgba(0,255,255,0.5)', fontSize: 40, padding: 12 }
  const revenueStyle = { color:'red', borderRadius: 30, backgroundColor: 'rgba(255,0,0,0.5)', fontSize: 40, padding: 12 }

  return (
    <Space size={20} direction='vertical'> 
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction='horizontal'>
          <DashboardCard title={'Orders'} value={ordersCount} icon={<ShoppingCartOutlined style={orderStyle} />} />
          <DashboardCard title={'Inventory'} value={inventoryCount} icon={<ShoppingOutlined style={inventoryStyle} />} />
          <DashboardCard title={'Customers'} value={customersCount} icon={<UserOutlined style={customerStyle} />} />
          <DashboardCard title={'Revenue'} value={revenueCount} icon={<DollarOutlined style={revenueStyle} />} />
      </Space> 
      <Space>
          <OrdersTable data={orders} loading={loading} />
      </Space>
      <Space> 
          <VerticalBarChart
            style={{width: 500, height: 350}}
            data={""} 
            title={'Orders Revenue'} 
            position={'bottom'} 
            labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']} />
          <PolarAreaChart style={{width: 500, height: 350}} />
          <PieChart style={{width: 500, height: 350}} />
      </Space>  
    </Space>
  )
}

function DashboardCard({title, value, icon}){
  return (
      <Card> 
        <Space direction='horizontal'> 
          {icon}
          <Statistic title={title} value={value} /> 
        </Space>
      </Card>
  )
}

function OrdersTable({data, loading}){
  return (
    <>
      <Typography.Text>Recent Orders</Typography.Text>
      <Table
      columns={[
        {
          title: 'Title',
          dataIndex: 'title'
        },
        {
          title: 'Quantity',
          dataIndex: 'quantity'
        },
        {
          title: 'Price',
          dataIndex: 'price',
          render:(value)=><span>{'$'+value}</span>
        }
      ]}
      dataSource={data}
      loading={loading}
      pagination={{
        pageSize: 10
      }}
      >  
      </Table>
    </>
  )
} 

export default Dashboard
