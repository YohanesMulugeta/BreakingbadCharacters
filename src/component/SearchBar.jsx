import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const SearchBar = ({ setQuery }) => {
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <section>
        <form>
          <input
            onChange={changeHandler}
            value={text}
            placeholder="Search Character"
            autoFocus
            type="text"
            name="Search"
          />
        </form>
      </section>
    </div>
  );
};

export default SearchBar;
