import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const papersOverview = () => {
  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div className="bg-blue-400 flex justify-around">
        <div className="p-10" onClick={() => setSearchParams({ id: 1 })}>
          <h1>Paper FA101</h1>
          {/* <img src={Paper} /> */}
          <p> Ipsum lorem </p>
        </div>
        <div className="p-10">
          <h1>Paper MA101</h1>
          {/* <img src={Paper} /> */}
          <p> Ipsum lorem </p>
        </div>
        <div className="p-10">
          <h1>Paper FT502</h1>
          {/* <img src={Paper} /> */}
          <p> Ipsum lorem </p>
        </div>
        <div className="p-10" onClick={() => navigate("papers", { id: 2 })}>
          <h1>Paper FS401</h1>
          {/* <img src={Paper} /> */}
          <p> Ipsum lorem </p>
        </div>
      </div>
    </>
  );
};

export default papersOverview;
