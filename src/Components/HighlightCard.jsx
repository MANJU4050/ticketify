import React from 'react'
import './HighlightCard.css'

const HighlightCard = (props) => {

  return (
    <div className='statuscard'>
        <div className='cardtitle'>
            <p>{props.title}</p>
        </div>
        <div className='cardvalue'>
            <p>{props.value}</p>
        </div>

    </div>
  )
}

export default HighlightCard