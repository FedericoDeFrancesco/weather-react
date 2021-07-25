import React, { useState } from "react";

const Ricerca = () => {
  const [city, setCity] = useState("");

  return (
    <>
      <div className="searchBox">
        <div className="contenitore">
          <input
            type="text"
            className="search-bar"
            placeholder="Search City....."
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Ricerca;
