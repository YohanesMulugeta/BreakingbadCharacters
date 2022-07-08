import React from "react";

import NavBar from "./component/NavBar";
import SearchBar from "./component/SearchBar";
import CharacterList from "./component/CharacterList";

const App = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <CharacterList />
    </>
  );
};

export default App;
