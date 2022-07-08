import React from "react";

import CharacterListItem from "./CharacterListItem";

const CharacterList = ({ items }) => {
  return (
    <section className="cards">
      {items.map((item) => (
        <CharacterListItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharacterList;
