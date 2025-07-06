import { DollarOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons'
import { Card, Space, Statistic, Table, Typography, Flex, Progress } from 'antd'
import React, { useEffect, useState } from 'react'
import { getOrders } from '../../services/fetchData';
import { VerticalBarChart } from '../../services/verticalBarChart';
import { PolarAreaChart } from '../../services/polarAreaChart';
import { PieChart } from '../../services/pieChart';

const Dashboard = () => {
  const [orders,setOrders] = useState();
  const [loading,setLoading] = useState(false); 
  
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
 
  return (
    <div className='w-full' > 
      <div className="w-full flex flex-col pe-12 ps-12"> 
        <h1 className='text-4xl w-full text-start font-semibold'>Dashboard</h1>
        <div className='w-full flex justify-between mt-6 mb-6'>
            <DashboardCard title={'Total Income'} value={'$25,024.32'} date={'Saturday, 30 Sep 2025'} index={'59%'} sub={'$4,593.23'} up={true} />
            <DashboardCard title={'Total Outcome'} value={'$12,456.12'} date={'Saturday, 30 Sep 2025'} index={'12%'} sub={'$4,593.23'} up={false} />
            <DashboardCard title={'Total Profit'} value={'$32,245.45'} date={'Saturday, 30 Sep 2025'} index={'4%'} sub={'$4,593.23'} up={true} />
        </div> 
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
        <Space className='w-full'>
          <Flex gap="small" vertical>
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} />
          </Flex>
        </Space>
      </div>
    </div>
  )
}

function DashboardCard({title, value, index, date, sub, up}){
  return (
      <div className='min-w-1/3 border-2 border-black/10 rounded-lg p-6'> 
        <h1 className='mb-12 font-semibold'>{title}</h1>
        <div className='flex flex-col'> 
          <div className='flex w-full mb-4'>
            <div className='flex w-9/12'>
              <h3 className='text-4xl font-semibold'>{value}</h3>
            </div>
            <div className='flex justify-end items-center w-3/12'>
              <h5 className={`${up ? 'bg-green-300/25 text-green-700': 'bg-red-300/25 text-red-700'} text-sm font-semibold rounded-2xl p-2 text-center w-14`}>{index}</h5>
            </div>
          </div>
          <div className='flex w-full mb-4'>
            <div className='flex w-9/12'>
              <h4 className='opacity-50'>{date}</h4>
            </div>
            <div className='flex justify-end w-3/12'>
               <h4 className='font-semibold'>{sub}</h4>
            </div>
          </div> 
        </div>
      </div>
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
