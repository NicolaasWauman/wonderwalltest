import React from "react";
import { useNavigate } from "react-router-dom";

const paperSmall = ({ element }) => {
  const navigate = useNavigate();

  const gotoPaper = () => {};
  const showPaper = (element) => {
    console.log(element._id);
  };

  return (
    <>
      <div
        onClick={() => navigate(`/${element._id}`)}
        className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm border-2 border-[#f9cfa7] border-opacity-5  grid grid-rows-5 grid-cols-6 gap-2  m-5 drop-shadow-md w-[450px] h-[250px] rounded-2xl transition ease-in-out  hover:-translate-y-1 hover:shadow-xl hover:scale-125 duration-200 "
      >
        <div className="row-span-1 col-span-2  font-sans text-2xl text-[#f9c492] hover:text-[#a18469] text-center align-text-bottom p-1 rounded-xl transition ease-in-out duration-500 delay-150">
          {element.name}
        </div>
        <div className="col-span-1 row-span-2  rounded-xl text-justify text-black-500  p-1 text-[#f9c492] hover:text-[#a18469] transition ease-in-out duration-300 delay-150">
          {element.spray ? (
            <img src="/spray1.jpeg" alt="..." className="rounded-xl mt-5" />
          ) : null}
        </div>
        <div className="col-span-2 row-span-2 rounded-xl text-justify text-black-500  p-1 text-[#f9c492] hover:text-[#a18469] transition ease-in-out duration-300 delay-150">
          <div className="p-1">{element.text}</div>
        </div>
        <div className="col-span-1 row-span-2 rounded-xl text-justify text-black-500  p-1 text-[#f9c492] hover:text-[#a18469] transition ease-in-out duration-300 delay-150">
          {element.drager ? (
            <img src="/dibond2.png" alt="..." className="rounded-xl mt-5" />
          ) : null}
        </div>
        <div className="row-span-2 col-span-2  ">
          <img src="/closePapier.jpeg" alt="..." className="rounded-xl" />
        </div>
        <div className=" row-span-1 col-span-1 font-sans text-md text-[#f9c492] hover:text-[#a18469]">
          <img src="/logoWWSmall.png" alt="..." className="rounded-xl mt-4" />
        </div>
        <div className="row-span-3 col-span-3 rounded-xl">
          <img src="/FT502.jpeg" alt="..." className="rounded-xl" />
        </div>
        <div className="row-span-2  col-span-1 text-[#f9c492] hover:text-[#a18469] text-center ">
          {element.eigenschap}
        </div>
        <div className="row-span-2 col-span-2">
          {element.fineArtLabel ? (
            <img src="/fineArt.png" alt="..." className="rounded-xl mt-4" />
          ) : null}
        </div>
      </div>

      {/* <div
    >
      <div>papiernaam: {element.name}</div>
      <div>papier eigenschappen: {element.eigenschap}</div>
    </div> */}
    </>
  );
};

export default paperSmall;
