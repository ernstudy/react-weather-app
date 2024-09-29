import React from "react";

import { Air, LocationOn, WaterDrop } from "@mui/icons-material";
import cloudy from "../assets/images/cloudy.png";
import snowy from "../assets/images/snowy.png";
import sunny from "../assets/images/sunny.png";
import rainy from "../assets/images/rainy.png";

import "./WeatherApp.css";
import { Box, Typography } from "@mui/material";

export default function WeatherInfo({ weather, weather2 }) {
  const weatherImages = {
    Clear: sunny,
    Clouds: cloudy,
    Rain: rainy,
    Snow: snowy,
    Haze: cloudy,
    Mist: cloudy,
    Drizzle: rainy,
  };

  const weatherImage = weatherImages[weather2?.weather[0].main];
  return (
    <>
      <div>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "18px",
            fontWeight: 500,
            mt: "8px",
            mb: "0.5rem",
          }}
          component="h3"
        >
          <LocationOn sx={{ fontSize: "22px", verticalAlign: "middle" }} />
          {`${weather?.location.name}, ${weather?.location.country}`}
        </Typography>

        {/* WEATHER  */}

        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div className="image">
            <img src={weatherImage} alt="" />
          </div>

          <Typography
            color="inherit"
            sx={{ textAlign: "center", mt: "8.5rem", fontWeight: "600" }}
          >
            {weather2?.weather[0].description}
          </Typography>

          <Typography
            component="span"
            variant="h1"
            sx={{
              fontWeight: "600",
              textAlign: "center",
              fontSize: "5.5rem",
              fontFamily: "Lilita One, sans-serif",
            }}
          >
            {`${Math.floor(weather?.current.temp_c)}°`}
          </Typography>
        </Box>
      </div>
      <Box className="tiles">
        <div className="humidity tile">
          <Typography component="p" fontWeight="600">
            Humidity
          </Typography>
          <WaterDrop sx={{ color: "#fff", fontWeight: "600" }} />
          <Typography component="span" fontWeight="600">
            {`${weather?.current.humidity}%`}
          </Typography>
        </div>
        <div className="wind tile">
          <Typography component="p" fontWeight="600">
            Wind
          </Typography>
          <Air sx={{ color: "#fff", fontWeight: "600" }} />
          <Typography component="span" fontWeight="600">
            {`${weather?.current.wind_kph} km/h`}
          </Typography>
        </div>
      </Box>
    </>
  );
}
