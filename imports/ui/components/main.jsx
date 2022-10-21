import React from "react";
import Button1 from "./tools/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const main = (props) => {
  [count, setCount] = useState(0);

  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-around py-10">
        <Button1 log={props.log} />

        <Button1 />
        <button
          className="p-10 rounded-md bg-pink-200 hover:bg-pink-400"
          onClick={() => navigate("/papers")}
        >
          to papers
        </button>
        <button
          className="p-10 rounded-md bg-pink-200 hover:bg-pink-400"
          onMouseEnter={(e) => setCount(count + 10)}
        >
          {" "}
          +10
        </button>
        <h1>counter: {count}</h1>
      </div>
    </>
  );
};

export default main;
