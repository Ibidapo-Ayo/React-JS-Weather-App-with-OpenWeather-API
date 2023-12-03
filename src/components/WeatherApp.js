import React, { useState } from "react";
import axios from "axios";
function WeatherApp() {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("");

  const API_KEY = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=2e65cf6c94c3187338339a22d39e734d`;

  const searchLocation = event => {
    if (event.key === "Enter") {
      axios.get(API_KEY).then(response => {
        console.log(response.data);
        setWeatherData(response.data);
      });
      setLocation("");
    }
  };

  const changeLocation = e => {
    setLocation(e.target.value);
  };

  const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth() +
  //   1}/${current.getFullYear()}`;
  const time = current.toLocaleString() + "";
  return (
    <div className="container">
      <input
        type="text"
        onKeyPress={searchLocation}
        value={location}
        onChange={changeLocation}
        className="search-input"
        placeholder="Enter city name"
      />
      <div className="searched-result mx-auto p-5">
        {/* <p>Date:{date}</p> */}
        <div>
          <p>
            The weather infomation for {weatherData.name}
            <span> at</span>
          </p>
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <div>
              <p>Time:{time}</p>
            </div>
            <div className="location">
              <p>
                Country:{" "}
                {weatherData.sys ? (
                  <span>{weatherData.sys.country}</span>
                ) : null}
              </p>
            </div>
          </div>
          <div className="location">
            <p>Location: {weatherData.name}</p>
          </div>
          <div className="temp">
            <p>Temperature:</p>
            {weatherData.main ? (
              <p>
                {weatherData.main.temp}
                <span>&#8457;</span>
              </p>
            ) : null}
          </div>
          {weatherData.name !== undefined && (
            <div className="bottom">
              <div className="description">
                <p>Description:</p>
                {weatherData.weather ? (
                  <p>{weatherData.weather[0].main}</p>
                ) : null}
              </div>

              <div className="description1">
                <div className="feels">
                  {weatherData.main ? (
                    <p className="text-center">
                      {weatherData.main.feels_like.toFixed()}
                      <span>&#8457;</span>{" "}
                    </p>
                  ) : null}
                  <p className="text-center">Feels like</p>
                </div>
                <div className="humidity">
                  {weatherData.main ? (
                    <p className="text-center">
                      {weatherData.main.humidity.toFixed()}%
                    </p>
                  ) : null}
                  <p>Humidity</p>
                </div>
                <div className="wind">
                  <p>{weatherData.wind.speed}MPH</p>
                  <p className="text-center">Wind Speed</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="text-white credit">
        This app is created by{" "}
        <a
          href="https://www.linkedin.com/mwlite/in/ayomide-victor-ibidapo-1912541b4"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Ibidapo Ayomide
        </a>{" "}
      </p>
    </div>
  );
}

export default WeatherApp;
