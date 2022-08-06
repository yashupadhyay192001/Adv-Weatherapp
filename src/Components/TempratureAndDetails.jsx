import React from "react";
import { iconUrlFromCode } from "../Services/weatherService";

function TempratureAndDetails({
  weather: { description, icon, temp, details, temp_min },
}) {
  return (
    <div className="flex md:flex-row w-full flex-col">
      <div className="flex flex-row md:w-1/2 w-full md:items-start items-center text-white py-3">
        <img
          src={iconUrlFromCode(icon)}
          alt="/"
          className="w-30 h-30 pl-14 md:pl-0"
        />
        <p className="text-6xl w-3/4 items-start py-2 md:px-1 font-medium md:pt-5 pt-3">
          {`${temp.toFixed()}`}°
        </p>
      </div>
      <div className="flex flex-col md:w-1/2 w-full items-center py-5">
        <p className="text-xl text-white capitalize font-semibold">{details}</p>
        <p className="text-s font-light text-white capitalize">
          {description} with a minimum temprature of {temp_min}°
        </p>
      </div>
    </div>
  );
}

export default TempratureAndDetails;
