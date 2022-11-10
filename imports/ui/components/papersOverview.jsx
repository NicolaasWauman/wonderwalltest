import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Papersmall from "./paperSmall";
// import papers from "../../../public/papers.json";
import { PapersCollection } from "../../db/PapersCollection";
import { Meteor } from "meteor/meteor";
const papersOverview = () => {
  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  Meteor.subscribe("papers");
  const papers = PapersCollection.find({});

  return (
    <>
      <div className="flex justify-evenly mt-10">
        <div className="grid container sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 ">
          {papers.map((element) => {
            return <Papersmall element={element} key={element._id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default papersOverview;
