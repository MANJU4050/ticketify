import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './TableItems.css'

const TableItems = (props) => {
  return (
    <tr className="tr">
        <td className="td">
            <div className="profile">
            <div className="profilepic">
            <FontAwesomeIcon className="icon" icon="fa-solid fa-circle-user" />

            </div>
            <div className="profiledetails">
                <p>{props.details}</p>
                <p><span>{props.detailtime}</span></p>
            </div>

            </div>
            
        </td>
        <td className="td">
            <div className="nametime">
            <p>{props.name}</p>
            <p><span>{props.nametime}</span></p>

            </div>
            
        </td>
        <td className="td">
            <div className="datetime">
                <p>{props.date}</p>
                <p><span>{props.time}</span></p>
            </div>
        </td>
        <td className="td">
            <div className="priority"><p>{props.priority}</p> </div>
        </td>
        <td className="td">
        <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
        </td>
    </tr>
  )
}

export default TableItems