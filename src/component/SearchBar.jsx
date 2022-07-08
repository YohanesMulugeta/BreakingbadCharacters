import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const SearchBar = ({ setQuery }) => {
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    // --------------------------------------------- setting time out to set query
    const timeOutId = setTimeout(() => {
      setQuery(text);
    }, 750);

    // --------------------------------------------- Cleanup function
    return () => clearTimeout(timeOutId);
  }, [text]);

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
