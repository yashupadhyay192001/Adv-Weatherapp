import React from 'react'
import { UilAngleLeftB, UilAngleRightB } from '@iconscout/react-unicons'
import { iconUrlFromCode } from '../Services/weatherService';

function Forecast({items}) {

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <div >
        <p className='text-white text-lg font-semibold mt-3'>Weekly forecast</p>
        <div className='flex flex-row items-center'>
          <UilAngleLeftB onClick = {slideLeft} className='text-white cursor-pointer transition hover:scale-125 opacity-50 hover:opacity-100'></UilAngleLeftB>
        <div id='slider' className='rounded-xl flex flex-row flex-nowrap overflow-x-scroll scroll-smooth scrollbar-hide w-full h-fit py-3'>
            {items.map((item) => (
                <div className='flex-none flex flex-col mr-1 ml-1 w-1/6 cursor-pointer transition hover:scale-105 items-center justify-center text-white py-3 rounded-xl bg-gradient-to-br from-slate-600  shadow-sm'>
                <p className='py-1'>{item.title}</p>
                    <img className='w-14 h-14' src={iconUrlFromCode(item.icon)} alt="/" />
                <p className='font-semibold text-xl'>{`${(item.temp_max).toFixed()}°`}</p>
                <p className='text-xl'>{`${(item.temp_min).toFixed()}°`}</p>
                </div>
            ))}
        </div>
        <UilAngleRightB onClick={slideRight} className='text-white cursor-pointer transition hover:scale-125 opacity-50 hover:opacity-100'></UilAngleRightB>
        </div>
    </div>
  )
}

export default Forecast