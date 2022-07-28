import React from 'react'
import { UilTemperatureHalf, UilEye, UilWind, UilTear, UilDashboard, UilRaindropsAlt, UilCompass  } from '@iconscout/react-unicons'

function WeatherAttributes({weather:{humidity, feels_like, pressure, speed, visibility, deg}}) {
  return (
    <div>
      <div className='md:w-3/4 w-full py-3 text-sm'>
        <div className='flex flex-row py-1 text-white items-center'>
        <div className='w-1/3 items-start'>
        <UilTemperatureHalf size={18} className='mr-1'></UilTemperatureHalf>
        Feels like:
        <span className='ml-1'>{feels_like}° </span>
        </div>
        <div className='w-1/3 items-start'>
        <UilWind size={18} className='mr-1 ml-3'></UilWind>
        Wind speed:
        <span className='ml-1'>{speed} m/s</span>
        </div>
        <div className='w-1/3 items-start'>
        <UilEye size={18} className='mr-1 ml-3'></UilEye>
        Visibility:
        <span className='ml-1'>{visibility/1000} km</span>
        </div>
        </div>
        <div className='flex flex-row py-1 text-white items-center'>
        <div className='w-1/3 items-start'>
        <UilTear size={18} className='mr-1'></UilTear>
        Humidity:
        <span className='ml-1'>{humidity} %</span>
        </div>
        <div className='w-1/3 items-start'>
        <UilDashboard size={18} className='mr-1 ml-3'></UilDashboard>
        Pressure:
        <span className='ml-1'>{pressure} hPa</span>
        </div>
        <div className='w-1/3 items-start'>
        <UilCompass size={18} className='mr-1 ml-3'></UilCompass>
        Wind direction:
        <span className='ml-1'>{deg}°</span></div>    
        </div>
        </div>
    </div>
  )
}

export default WeatherAttributes