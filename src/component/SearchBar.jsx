import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "./Spinner";

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
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            onChange={changeHandler}
            value={text}
            placeholder="Search Character"
            autoFocus
            type="text"
            name="search"
          />
        </form>
      </section>
    </div>
  );
};

export default SearchBar;
