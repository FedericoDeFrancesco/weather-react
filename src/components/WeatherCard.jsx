import React from "react";

const WeatherCard = () => {
  const dataBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} / ${month} / ${year}`;
  };
  return (
    <>
      <div className="container_card">
        <div className="location">New York City, US</div>
        <div className="date">{dataBuilder(new Date())}</div>
        <div className="cardTemperature">
          <div className="temperature">30°</div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
