import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function InputsNav({setQuery, units, setUnits}) {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if( city !== '') setQuery({q: city})
  };

  const handleLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery({lat, lon});
      })
    }
  }

  const handleUnits = (e) => {
    const selectedUnit = e.currentTarget.name;
    if(units !== selectedUnit) {setUnits(selectedUnit)} 
  }

  return (
    <div className='flex flex-row md:justify-center w-full my-6'>
      <div className ='flex flex-row w-3/4 items-center justify-center md:space-x-4'>
        <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" placeholder='Search for city...' className="text-l font-light p-2 w-full shadow-xl focus:outline-none rounded-2xl capitalize placeholder:lowercase"></input>
        <UilSearch size={25} className = "text-white cursor-pointer transition ease-out hover:scale-125 mx-2 md:mx-0" onClick = {handleSearchClick}/>
        <UilLocationPoint onClick={handleLocation} size={25} className = "text-white cursor-pointer transition ease-out hover:scale-125"/>
      </div>
      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button name = 'metric' className='text-xl text-white font-light cursor-pointer transition ease-out hover:scale-125' onClick={handleUnits}>°C</button>
        <p className='text-xl
        text-white mx-1'>|</p>
        <button name = 'imperial' className='text-xl text-white font-light cursor-pointer transition ease-out hover:scale-125' onClick={handleUnits}>°F</button>
      </div>
    </div>
  )
}

export default InputsNav