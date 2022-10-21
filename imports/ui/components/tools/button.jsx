import React from "react";

const button1 = (props) => {
  return (
    <>
      <button
        onMouseEnter={(e) => setCount(count + 1)}
        onClick={(e) => console.log(count)}
        className="bg-orange-200 rounded-md border px-5 py-4 font-sans hover:bg-orange-500"
      >
        Druk hier
      </button>
    </>
  );
};

export default button1;
