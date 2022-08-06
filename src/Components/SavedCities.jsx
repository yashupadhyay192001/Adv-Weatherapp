import React, { useState, useEffect } from "react";
import { UilTimes, UilPlus } from "@iconscout/react-unicons";
import { ToastContainer, toast } from "react-toastify";

function SavedCities({ setQuery, weather: { name } }) {
  const [cities, setCities] = useState([
    {
      id: 0,
      title: "Mumbai",
    },
    {
      id: 1,
      title: "Chennai",
    },
    {
      id: 2,
      title: "Hyderabad",
    },
    {
      id: 3,
      title: "Lucknow",
    },
    {
      id: 4,
      title: "Delhi",
    },
  ]);

  const deleteCity = (e) => {
    const id = e.currentTarget.id;
    const sites = [...cities];
    const index = sites.findIndex((element) => element.id == id);
    console.log(index);
    sites.splice(index, 1);
    setCities(sites);
    console.log(id);
  };

  const addCity = () => {
    if (cities.length > 4) {
      toast.error("Max. 5 cities can be saved!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      var sites = [
        ...cities,
        { id: Math.floor(Math.random() * 10000), title: name },
      ];
      setCities(sites);
    }
  };

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <div className="flex flex-row text-white hover:scale-125 transition ease-out group ">
          <button
            className="text-white w-11/12 text-lg mr-2 md:mr-0 font-medium "
            onClick={() => setQuery({ q: city.title })}
          >
            {city.title}
          </button>
          <UilTimes
            size={18}
            id={city.id}
            className="pl-1 hover:cursor-pointer invisible group-hover:visible hover:scale-125"
            onClick={deleteCity}
          ></UilTimes>
        </div>
      ))}
      <UilPlus
        size={25}
        className="text-white hover:scale-125 hover:cursor-pointer transition ease-out mb-1"
        onClick={addCity}
      ></UilPlus>
    </div>
  );
}

export default SavedCities;
