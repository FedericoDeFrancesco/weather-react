import React from "react";
import Barra from "./Barra";
const api = {
  key: "a84be537209de888c08c909d6c2af459",
  base: "https://api.openwethermap.org/data/2.5/",
};

function App() {
  return (
    <div className="App">
      <main>
        <Barra />
      </main>
    </div>
  );
}
export default App;
