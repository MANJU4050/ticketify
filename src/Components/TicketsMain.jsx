import React from "react";
import "./TicketsMain.css";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TableItems from "./TableItems";

const TicketsMain = () => {

    const tabledata  = [{
        details:'Contact email not linked',
        detailtime:'Updated 1 day ago',
        name:'Tom Cruise',
        nametime:'on 24.05.2019',
        date:'May 26 2019',
        time:'6:30 PM',
        priority:'HIGH'
    },
    {
      details:'Contact email not linked',
      detailtime:'Updated 1 day ago',
      name:'Tom Cruise',
      nametime:'on 24.05.2019',
      date:'May 26 2019',
      time:'6:30 PM',
      priority:'HIGH'
  },
  {
    details:'Contact email not linked',
    detailtime:'Updated 1 day ago',
    name:'Tom Cruise',
    nametime:'on 24.05.2019',
    date:'May 26 2019',
    time:'6:30 PM',
    priority:'HIGH'
},
{
  details:'Contact email not linked',
  detailtime:'Updated 1 day ago',
  name:'Tom Cruise',
  nametime:'on 24.05.2019',
  date:'May 26 2019',
  time:'6:30 PM',
  priority:'HIGH'
},
{
  details:'Contact email not linked',
  detailtime:'Updated 1 day ago',
  name:'Tom Cruise',
  nametime:'on 24.05.2019',
  date:'May 26 2019',
  time:'6:30 PM',
  priority:'HIGH'
},
{
  details:'Contact email not linked',
  detailtime:'Updated 1 day ago',
  name:'Tom Cruise',
  nametime:'on 24.05.2019',
  date:'May 26 2019',
  time:'6:30 PM',
  priority:'HIGH'
}]
  return (
    <div className="ticketsmain">
      <Navbar title="Tickets" />
      <div className="tickettable">
        <div className="tablefeatures">
          <div className="leftfeature">
            <p>All tickets</p>
          </div>
          <div className="rightfeature">
            <div className="sort">
              <FontAwesomeIcon icon="fa-solid fa-arrow-up-wide-short" />
              <p>Sort</p>
            </div>
            <div className="filter">
              <FontAwesomeIcon icon="fa-solid fa-filter" />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="tablediv">
            <table className="table">
                <thead className="thead">
                <tr className="tr">
                    <th className="th">Ticket details</th>
                    <th className="th">Customer name</th>
                    <th className="th">Date</th>
                    <th className="th">Priority</th>
                    <th className="th">    </th>
                </tr>
                </thead>
                <tbody className="tbody">
                    {tabledata.map((item)=>{
                       return <TableItems details={item.details} detailtime={item.detailtime} time={item.time} name={item.name} nametime={item.nametime} date={item.date} priority={item.priority} />
                    })}

                </tbody>
                
            </table>
        </div>
      </div>
    </div>
  );
};

export default TicketsMain;
