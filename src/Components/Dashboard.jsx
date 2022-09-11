import React from 'react'
import Main from './Main'
import Sidebar from './Sidebar'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
     <Sidebar/>
     <Main/>   
    </div>
  )
}

export default Dashboard