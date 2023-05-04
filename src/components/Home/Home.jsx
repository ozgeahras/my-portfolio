import React, { useState } from "react";
import Card from "../Card/Card.jsx";
import allData from "../../data.js";

function Home() {
  const [data, setData] = useState(allData);

  return (
    <div className="card-container">
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          image={item.image}
          logo={item.logo}
          source={item.source}
          demo={item.demo}
        />
      ))}
    </div>
  );
}

export default Home;
