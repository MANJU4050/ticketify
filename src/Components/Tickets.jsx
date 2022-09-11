import React from 'react'
import Sidebar from './Sidebar'
import TicketsMain from './TicketsMain'
import './Tickets.css'

const Tickets = () => {
  return (
    <div className='tickets'>
      <Sidebar />
      <TicketsMain />
    </div>
  )
}

export default Tickets