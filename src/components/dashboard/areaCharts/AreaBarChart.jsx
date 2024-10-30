import React from "react";
import "./AreaCharts.scss";
import DataIcon from "../../../assets/icons/Data.png";
import TopupIcon from "../../../assets/icons/Airtimee.png";
import ElectricityIcon from "../../../assets/icons/Electricity.png";
import InternetIcon from "../../../assets/icons/internet.png";

const AreaBarChart = () => {
  const services = [
    { name: "Data Purchase", icon: DataIcon },
    { name: "Airtime Topup", icon: TopupIcon },
    { name: "Electricity", icon: ElectricityIcon },
    { name: "Broadband Internet", icon: InternetIcon },
  ];

  return (
    <div className="recent-services">
      <div className="services-header">
        <h4>Recently Used Services</h4>
        <a href="#" className="see-all">
          See all <span>→</span>
        </a>
      </div>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <p>{service.name}</p>
            <img src={service.icon} alt={`${service.name} Icon`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaBarChart;
