import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CoffeList } from "./components/CoffeList";

function App() {
  const [data, setData] = useState<Coffee[]>([]);

  const fetchData = () => {
    fetch("https://api.sampleapis.com/coffee/hot").then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json().then((response) => {
        console.log(response);
        setData(response);
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <CoffeList coffeList={data} />{" "}
    </div>
  );
}

export default App;
