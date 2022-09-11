import React from "react";
import Chart from "./Chart";
import ChartCard from "./ChartCard";
import HighlightCard from "./HighlightCard";
import "./Main.css";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = () => {
  const hightlightCard = [
    {
      title: "Unresolved",
      value: "60",
    },
    {
      title: "Overdue",
      value: "16",
    },
    {
      title: "Open",
      value: "43",
    },
    {
      title: "on Hold",
      value: "60",
    },
  ];

  const chartCard = [
    {
      title: "Resolved",
      value: "449",
    },
    {
      title: "Recieved",
      value: "426",
    },
    {
      title: "Average First Response Time",
      value: "33m",
    },
    {
      title: "Average Response Time",
      value: "3h 8m",
    },
    {
      title: "Resolution with SLA",
      value: "94%",
    },
  ];
  return (
    <div className="main">
      <Navbar  title="Overview" />
      <div className="data">
        <div className="hightlights">
          {hightlightCard.map((item) => {
            return <HighlightCard title={item.title} value={item.value} />;
          })}
        </div>

        <div className="chart">
          <Chart />
          <div className="chart-details">
            {chartCard.map((item) => {
              return <ChartCard title={item.title} value={item.value} />;
            })}
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="card1">
          <div className="card1title">
            <div className="card1titleleft">
              <p className="card1heading">Unresolved tickets</p>
              <p>
                <span>Group:</span>Support
              </p>
            </div>
            <div className="card1titleright">
              <p>View details</p>
            </div>
          </div>
          <div className="card1items">
            <p>Waiting on Feature request</p>
            <p>4238</p>
          </div>
          <div className="card1items">
            <p>Waiting customer response</p>
            <p>1005</p>
          </div>
          <div className="card1items">
            <p>Waiting developer fix</p>
            <p>914</p>
          </div>
          <div className="card1itemend">
            <p>Pending</p>
            <p>281</p>
          </div>
        </div>

        <div className="card1">
          <div className="card1title">
            <div className="card1titleleft">
              <p className="card1heading">Tasks</p>
              <p>
                <span>Today</span>
              </p>
            </div>
            <div className="card1titleright">
              <p>View all</p>
            </div>
          </div>
          <div className="card1items">
            <p>Create new task</p>
            <FontAwesomeIcon
              className="icon-plus"
              icon="fa-solid fa-square-plus"
            />
          </div>
          <div className="card1items">
            <div className="check">
              <input type="checkbox" />
              <p>Finish ticket update</p>
            </div>
            <div className="yellow"><p>Urgent</p></div>
          </div>

          <div className="card1items">
            <div className="check">
              <input type="checkbox" />
              <p>Create new ticket example</p>
            </div>
            <div className="green"><p>New</p> </div>
          </div>

          <div className="card1itemend">
            <div className="check">
              <input type="checkbox"  />
              <p>Update ticket report</p>
            </div>
            <div className="white"><p>Default</p> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
