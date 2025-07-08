import { Space, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { getOrders } from '../../services/fetchData';

const Notification = () => {
  const [data,setData] = useState();
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    const getData = async () =>{
      await getOrders().then(res =>{
          const data = res.products;
          setData(data.splice(0,10));
          setLoading(false);
        }
      ); 
    }
    getData();
  },[]);

  return (
    <Space size={20} direction='vertical'> 
      <Space>
        <NotificationTable data={data} loading={loading} />
      </Space>
    </Space>
  ) 
}


function NotificationTable({data, loading}){
  return (
    <>
      <Typography.Text>Notification</Typography.Text>
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
        },
        {
          title: 'Stock',
          dataIndex: 'stock'
        },
        {
          title: 'Rating',
          dataIndex: 'rating'
        },
        {
          title: 'Brand',
          dataIndex: 'brand'
        },
        {
          title: 'Category',
          dataIndex: 'category'
        }
      ]}
      dataSource={data}
      loading={loading}
      pagination={false}
      >  
      </Table>
    </>
  )
} 

export default Notification
