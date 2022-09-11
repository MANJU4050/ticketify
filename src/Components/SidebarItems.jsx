import React from 'react'
import './SidebarItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SidebarItems = (props) => {
  return (
        <div className='sidebaritems'>

            <div className='sidebaricon'>
            <FontAwesomeIcon className='icon'  icon={`fa-solid ${props.icon} fa-2xl`} />
            </div>
            <div className='sidebaritemp'>
            <p>{props.items}</p>


            </div>
            
            </div>
  )
}

export default SidebarItems