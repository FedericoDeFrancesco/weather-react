import React from "react";
import Barra from "./components/Barra";
import Ricerca from "./components/Ricerca";
import WeatherCard from "./components/WeatherCard";
const api = {
  key: "a84be537209de888c08c909d6c2af459",
  base: "https://api.openwethermap.org/data/2.5/",
};

function App() {
  return (
    <div className="App">
      <main>
        <Barra />
        <Ricerca />
        <WeatherCard />
      </main>
    </div>
  );
}
export default App;
