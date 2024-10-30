import React from "react";
import "./AreaCharts.scss"; // Make sure to create this SCSS file as well

const AreaBarChart = () => {
  const services = [
    { name: "Data Purchase", icon: "src/assets/icons/Data.png" },
    { name: "Airtime Topup", icon: "src/assets/icons/Airtimee.png" },
    { name: "Electricity", icon: "src/assets/icons/Electricity.png" },
    { name: "Broadband Internet", icon: "src/assets/icons/internet.png" },
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
