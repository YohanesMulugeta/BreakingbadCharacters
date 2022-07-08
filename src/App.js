import React, { useEffect, useState } from "react";

import apis from "./component/apis";
import NavBar from "./component/NavBar";
import SearchBar from "./component/SearchBar";
import CharacterList from "./component/CharacterList";
import Spinner from "./component/Spinner";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetcher = async () => {
      const { data } = await apis.get(`characters?name=${query}`);

      setItems(data);
      setLoading(false);
    };

    fetcher();
  }, [query]);

  return (
    <div className="app">
      <NavBar />
      <SearchBar query={query} setQuery={setQuery} />
      {loading ? <Spinner /> : <CharacterList items={items} />}
    </div>
  );
};

export default App;
