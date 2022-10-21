import React from "react";
import paperDB from "../../api/papers.json";
import { useParams } from "react-router-dom";

const paper = () => {
  let params = useParams();
  let paper = paperDB.papers.filter(
    (element) => element.id === Number(params.id)
  )[0];

  return (
    <>
      <h1> naam: {paper.name}</h1>
      <p> eigenschap: {paper.eigenschap}</p>
    </>
  );
};

export default paper;
