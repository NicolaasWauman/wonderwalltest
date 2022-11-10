import React from "react";
// import paperDB from "../../api/papers.json";
import { useParams } from "react-router-dom";
import papers from "../../../public/papers.json";
import { PapersCollection } from "../../db/PapersCollection";

const paper = (element) => {
  Meteor.subscribe("papers");
  let params = useParams();
  console.log(papers);
  let paper = PapersCollection.papers.filter(
    (element) => element.id === Number(params.id)
  )[0];

  return (
    <>
      <h1> naam: {paper.name}</h1>
      <p> eigenschap: {paper.eigenschap}</p>
      {/*<img src={papier1} alt="..." /> */}
      <img className="object-cover h-40 w-40" src="/FT502.jpeg" alt="..." />
    </>
  );
};

export default paper;
