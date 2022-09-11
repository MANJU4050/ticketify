import React from 'react'
import './ChartCard.css'

const ChartCard = (props) => {
  return (
    <div className='chartcard'>
        <div className='chartcardtitle'>
            <p>{props.title}</p>
        </div>
        <div className='chartcardvalue'>
            <p>{props.value}</p>
        </div>

    </div>
  )
}

export default ChartCard