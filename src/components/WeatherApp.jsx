import React, { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import { Container } from "@mui/material";
import WeatherInfo from "./WeatherInfo";
import Loading from "./Loading";
import NotFound from "./NotFound";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [weather2, setWeather2] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const weatherColors = {
    Clear: "linear-gradient(to right, #f3b07c, #fcd283",
    Clouds: "linear-gradient(to right, #57d6d4, #71eeec",
    Rain: "linear-gradient(to right, #5bc8fb, #80eaff",
    Snow: "Linear-gradient(to right, #aff2ff, #fff",
    Haze: "linear-gradient(to right, #57d6d4, #71eeec",
    Mist: "linear-gradient(to right, #57d6d4, #71eeec",
    Drizzle: "linear-gradient(to right, #aff2ff, #fff",
  };

  const weatherColor = weatherColors[weather2?.weather[0].main];

  useEffect(() => {
    if (!weather) {
      searchCity();
    }

    if (!weather2) {
      searchCity2();
    }
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  async function searchCity(city = "paris") {
    const KEY = "b351809ca9a142a099e210233240509";
    const weatherInfo = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`
    );
    const json = await weatherInfo.json();

    console.log(json);
    setWeather(json);
  }

  async function searchCity2(city = "paris") {
    const KEY = "04283eebdfeb1d2ee749f9f97d4ea084";
    const weatherInfo = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`
    );
    const json = await weatherInfo.json();

    console.log(json);
    setWeather2(json);
  }

  function loadInfo(city) {
    searchCity(city);
    searchCity2(city);
  }

  return (
    <Container
      component="div"
      maxWidth={false}
      className="weather-container"
      style={{ backgroundImage: weatherColor }}
    >
      <div>
        <div
          className="weather-app"
          style={{
            backgroundImage:
              weatherColor && weatherColor?.replace("to right", "to top"),
          }}
        >
          <WeatherForm onLoardInfo={loadInfo} />
          {weather ? (
            <WeatherInfo weather={weather} weather2={weather2} />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </Container>
  );
}
