import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "./Spinner";

const SearchBar = ({ setQuery }) => {
  // ------------------------------------------------ Debouncing state
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  // ----------------------------------------------- useEffect
  useEffect(() => {
    // --------------------------------------------- setting time out to set query
    const timeOutId = setTimeout(() => {
      setQuery(text);
    }, 750);

    // --------------------------------------------- Cleanup function for
    return () => clearTimeout(timeOutId);
  }, [text]);

  return (
    <section className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {/* ---------------------------------------- Searching input  */}
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
  );
};

export default SearchBar;
