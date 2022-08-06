import React from 'react'
import { formatToLocalTime } from '../Services/weatherService'

function TimeAndLocation({weather: {dt, timezone, name, country}}) {

  return (
    <div className='flex flex-col items-start'>
        <p className='text-white text-xl font-semibold'>{`${name}, ${country}`}</p>
        <p className='text-white text-s font-extralight'>{formatToLocalTime(dt, timezone)}</p>
    </div>
  )
}

export default TimeAndLocation



