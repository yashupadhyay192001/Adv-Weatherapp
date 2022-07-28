import React from 'react'
import { UilTear } from '@iconscout/react-unicons'
import {iconUrlFromCode} from '../Services/weatherService'

function Hourly({items}) {

  const changeHourlyBackground = (i) => {
    if(i==items[0] || i==items[2] || i==items[4] || i==items[6])
    return "bg-gradient-to-b from-slate-600"
  }

  return (
    <div>
        <p className='text-white text-lg font-semibold mt-3'>Hourly Forecast</p>
        <div className='flex flex-row md:flex-none overflow-scroll md:overflow-hidden w-full h-full py-3'>
            {items.map((item) => (
                <div className={`flex flex-col w-full text-white px-2 shadow-sm items-center justify-center ${changeHourlyBackground(item)}`}>
                <p className='font-semibold mt-3'>{item.title}</p>
                <img src={iconUrlFromCode(item.icon)} alt="/" className='w-10 h-10' />
                <p className='font-medium mt-1'>{item.weather}</p>
                <p className='font-semibold mt-6'>{item.temp.toFixed()}°</p>
                <div className='flex flex-row mb-3'>
                     <UilTear size={20} className='pt-1'></UilTear>
                     <p>{item.hourly}°</p>
                 </div> 
             </div>
            ))}
        </div>
    </div>
  )
}

export default Hourly