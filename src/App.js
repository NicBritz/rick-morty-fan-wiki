import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CharacterList data={data} />;
        </Route>
        <Route path="/details">
          <CharacterDetails />
        </Route>
      </Switch>
    </Router>
  );
}
