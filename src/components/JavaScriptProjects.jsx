import React, { useState } from "react";
import Card from "../components/Card";
import allData from "../data";
import "../App.css";

function JavaScriptProjects() {
  const [data, setData] = useState(
    allData.filter((item) => item.tech.includes("js"))
  );

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

export default JavaScriptProjects;
