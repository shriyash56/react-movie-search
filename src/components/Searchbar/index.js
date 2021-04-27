import React, { useEffect, useState } from "react";
import Cards from "../Cards";
import defaultData from "../../sampleData.json";

export default function SearchBar() {
  const [Title, setTitle] = useState("");
  const [Year, setYear] = useState("");
  const [Id, setId] = useState("");

  const [data, setData] = useState([]);

  const APIKEY = "d82ef5b7";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.location.protocol === "http:") {
      if (Year !== "" && Id !== "" && Title !== "") {
        fetch(
          `http://www.omdbapi.com/?apikey=${APIKEY}&s=${Title}&y=${Year}&i=${Id}&plot=full`
        )
          .then((res) => res.json())
          .then((res) => setData(res.Search))
          .catch((err) => console.log(err));
      }
    } else {
      if (Year !== "" && Id !== "" && Title !== "") {
        fetch(
          `https://www.omdbapi.com/?apikey=${APIKEY}&s=${Title}&y=${Year}&i=${Id}&plot=full`
        )
          .then((res) => res.json())
          .then((res) => setData(res.Search))
          .catch((err) => console.log(err));
      }
    }
  };

  return (
    <>
      <div className="relative shadow-lg my-10 p-5 rounded-md mx-5">
        <form onSubmit={handleSubmit}>
          <div className="field-group flex flex-col md:flex-row justify-around  ">
            <input
              type="search"
              name="title"
              className="py-2 text-sm col-span-2 md:col-auto text-gray-600 bg-gray-100 rounded-md px-2  focus:outline-none focus:ring focus:border-purple-600 focus:bg-gray-100 focus:text-gray-900"
              placeholder="Search Title"
              autoComplete="off"
              vaue={Title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <input
              type="search"
              name="Year"
              className="py-2 text-sm col-span-2 md:col-auto text-gray-600 bg-gray-100 rounded-md px-2  focus:outline-none focus:ring focus:border-purple-600 focus:bg-gray-100 focus:text-gray-900"
              placeholder="Year"
              autoComplete="off"
              vaue={Year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
            <input
              type="search"
              name="id"
              className="py-2 text-sm  text-gray-600 bg-gray-100 rounded-md px-2  focus:outline-none focus:ring focus:border-purple-600 focus:bg-gray-100 focus:text-gray-900"
              placeholder="ID"
              autoComplete="off"
              value={Id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <button
              type="submit"
              className=" w-1/5 search-btn text-black font-bold p-1 rounded col-span-2 md:col-auto bg-gray-400 focus:outline-none focus:shadow-outline"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-wrap justify-between">
        {Title === "" && Year === "" && Id === ""
          ? defaultData.Search.map((ele) => {
              return (
                <Cards Title={ele.Title} Year={ele.Year} Poster={ele.Poster} />
              );
            })
          : data.map((ele) => {
              return (
                <Cards Title={ele.Title} Year={ele.Year} Poster={ele.Poster} />
              );
            })}
      </div>
    </>
  );
}
