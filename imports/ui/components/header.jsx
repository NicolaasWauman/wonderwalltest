import React from "react";
import { Link } from "react-router-dom";

const header = () => (
  <>
    <div className=" flex justify-around">
      <div>LOGO</div>
      <div>
        <Link to="" className="p-10">
          {" "}
          main{" "}
        </Link>
        <Link to="papers"> Papers</Link>
      </div>
    </div>
  </>
);

export default header;
