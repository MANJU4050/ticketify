import React from 'react'
import Chart from './Chart'
import ChartCard from './ChartCard'
import HighlightCard from './HighlightCard'
import './Main.css'
import Navbar from './Navbar'

const Main = () => {

 const hightlightCard =[
  {
    title:'Unresolved',
    value:'60'
  },
  {
    title:'Overdue',
    value:'16'
  },
  {
    title:'Open',
    value:'43'
  },
  {
    title:'on Hold',
    value:'60'
  }
 ]

 const chartCard = [
  {
    title:'Resolved',
    value:'449'
  },
  {
    title:'Recieved',
    value:'426'
  },
  {
    title:'Average First Response Time',
    value:'33m'
  },
  {
    title:'Average Response Time',
    value:'3h 8m'
  },
  {
    title:'Resolution with SLA',
    value:'94%'
  }
]
  return (
    <div className="main">
        <Navbar />
        <div className='data'>
        <div className='hightlights'>
        {
          hightlightCard.map((item)=>{
        
        return <HighlightCard title={item.title} value={item.value} />
          })
        }

        </div>

        <div className='chart'>
          <Chart />
          <div className='chart-details'>
          {chartCard.map((item)=>{
            return <ChartCard  title= {item.title} value={item.value}/>
          })

          }
          </div>
        
          
        </div>



        </div>
        
       

    </div>
    
  )
}

export default Main