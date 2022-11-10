import React, { useState } from "react";
import { Meteor } from "meteor/meteor";

const newPaper = () => {
  const [paperName, setPaperName] = useState("");
  const [price, setPrice] = useState(0);
  const [eigenschap, setEigenschap] = useState("");
  const [fineArtLabel, setFineArtLabel] = useState(false);
  const [spray, setSpray] = useState(false);
  const [drager, setDrager] = useState(false);
  const [text, setText] = useState("");

  const handleFineArtCheckbox = () => {
    setFineArtLabel(!fineArtLabel);
  };
  const handleSprayCheckbox = () => {
    setSpray(!spray);
  };
  const handleDragerCheckbox = () => {
    setDrager(!drager);
  };

  const createNewPaper = (e) => {
    e.preventDefault();
    const paper = {
      name: paperName,
      price,
      eigenschap,
      fineArtLabel,
      spray,
      drager,
      text,
    };

    Meteor.call("papers.insert", {
      name: paperName,
      price,
      eigenschap,
      fineArtLabel,
      spray,
      drager,
      text,
    });
  };

  return (
    <div className="bg-white flex justify-center bg-opacity-80 backdrop-filter backdrop-blur-sm border-2 border-[#f9cfa7] border-opacity-5 m-5 drop-shadow-md w-[800px] h-[600px] rounded-2xl">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900 m-2">
                Add new Paper
              </h3>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={(e) => createNewPaper(e)}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Paper name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        onChange={(e) => setPaperName(e.target.value)}
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Price per square meter
                      </label>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        onChange={(e) => setPrice(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label
                        htmlFor="eigenschap"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Eigenschap
                      </label>
                      <select
                        id="eigenschap"
                        name="eigenschap"
                        defaultValue={"mat"}
                        onChange={(e) => setEigenschap(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="mat">mat</option>
                        <option value="semi-gloss">semi-gloss</option>
                        <option value="gloss">gloss</option>
                        <option value="barryt">barryt</option>
                      </select>
                    </div>

                    <div className="col-span-1 sm:col-span-1">
                      <label
                        htmlFor="fineArtLabel"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Fine Art
                      </label>
                      <input
                        type="checkbox"
                        id="fineArtLabel"
                        name="fineArtLabel"
                        checked={fineArtLabel}
                        onChange={(e) => handleFineArtCheckbox()}
                        className="mt-1 block rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      ></input>
                    </div>
                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="spray"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Spray
                      </label>
                      <input
                        type="checkbox"
                        id="spray"
                        name="spray"
                        checked={spray}
                        onChange={(e) => handleSprayCheckbox()}
                        className="mt-1 block rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      ></input>
                    </div>
                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="drager"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Drager
                      </label>
                      <input
                        type="checkbox"
                        id="drager"
                        name="drager"
                        checked={drager}
                        onChange={(e) => handleDragerCheckbox()}
                        className="mt-1 block rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      ></input>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="text"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Bijhorende tekst
                      </label>
                      <input
                        type="text"
                        name="text"
                        id="text"
                        onChange={(e) => setText(e.target.value)}
                        autoComplete="text"
                        className="mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default newPaper;
