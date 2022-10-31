import "./App.css";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import WeatherApp from "./components/WeatherApp";

function App() {
  return (
    <div className="App">
      <WeatherApp />

      {/* <QrCode /> */}
    </div>
  );
}

export default App;
