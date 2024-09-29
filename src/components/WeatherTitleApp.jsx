import React from "react";

export default function WeatherTitleApp() {
  const titleStles = {
    fontSize: "20px",
    textAlign: "center",
    marginBottom: "0.7rem",
  };
  return (
    <div style={titleStles}>
      <h1>Weather App</h1>
    </div>
  );
}
