import React from "react";
import "./Character.css";

export default function CharacterList({ data }) {
  return (
    <div className="container">
      <h1>Character Wiki</h1>
      <div className="grid">
        {data &&
          data.map((char) => (
            <div key={char.id} className="grid-item">
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
