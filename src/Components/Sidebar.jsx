import React from "react";
import "./Sidebar.css";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const sidebarItems1 = [
    {
      iconname: "Overview",
      icon: "fa-chart-pie",
    },
    {
      iconname: "Tickets",
      icon: "fa-ticket",
    },
    {
      iconname: "Ideas",
      icon: "fa-lightbulb",
    },
    {
      iconname: "Contacts",
      icon: "fa-user-tie",
    },
    {
      iconname: "Agents",
      icon: "fa-users",
    },
    {
      iconname: "Articles",
      icon: "fa-book",
    },
  ];

  const sidebarItems2 = [
    { iconname: "Settings", icon: "fa-gear" },
    { iconname: "Subscription", icon: "fa-award" },
  ];

  return (
    <div className="sidebar">
      <div className="dashboardkit">Dashboard Kit</div>
      <div className="sidebaritems1">
        {sidebarItems1.map((item) => {
          return <SidebarItems items={item.iconname} icon={item.icon} />;
        })}
      </div>
<div className="sidebarsplit"></div>
      <div className="sidebaritems2">
        {sidebarItems2.map((item) => {
          return <SidebarItems items={item.iconname} icon={item.icon} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
