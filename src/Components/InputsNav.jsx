import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { APIoptions, Get_api_url } from "../Services/Autocomplete";
import { AsyncPaginate } from "react-select-async-paginate";

function InputsNav({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("Search for city ...");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };

  const handleUnits = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) {
      setUnits(selectedUnit);
    }
  };

  const loadOptions = (inputValue) => {
    setCity(inputValue);
    return fetch(
      `${Get_api_url}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      APIoptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.name}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setCity(searchData.value);
  };

  return (
    <div className="flex flex-row md:justify-center w-full my-6">
      <div className="flex flex-row w-3/4 items-center justify-center md:space-x-4">
        <AsyncPaginate
          onChange={handleOnChange}
          placeholder={city}
          debounceTimeout={600}
          value={city}
          loadOptions={loadOptions}
          className="w-full font-semibold"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125 mx-2 md:mx-0"
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          onClick={handleLocation}
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl text-white font-light cursor-pointer transition ease-out hover:scale-125"
          onClick={handleUnits}
        >
          °C
        </button>
        <p
          className="text-xl
        text-white mx-1"
        >
          |
        </p>
        <button
          name="imperial"
          className="text-xl text-white font-light cursor-pointer transition ease-out hover:scale-125"
          onClick={handleUnits}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default InputsNav;
