import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchCharacters() {
      const result = await axios(`https://rickandmortyapi.com/api/character`);

      setData(result.data.results);
    }
    fetchCharacters();
  }, []);

  console.log(data && data);

  return (
    <div className="container">
      <h1>Character Wiki</h1>
      <div className="grid">
        {data &&
          data.map((char) => (
            <div className="grid-item">
              <div className="card">
                <img
                  className="image"
                  src={char.image}
                  alt={`${char.name} portrait`}
                />
                <div key={char.id}>{char.name}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
