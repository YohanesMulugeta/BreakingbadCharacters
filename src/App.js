import React, { useEffect, useState } from "react";

import NavBar from "./component/NavBar";
import SearchBar from "./component/SearchBar";
import CharacterList from "./component/CharacterList";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  return (
    <div className="app">
      <NavBar />
      <SearchBar query={query} setQuery={setQuery} />
      <CharacterList items={items} />
    </div>
  );
};

export default App;
