import React from 'react'

function SavedCities({setQuery}) {

    const cities = [
        {
            id: 1,
            title: 'London',
        },
        {
            id: 2,
            title: 'Sydney',
        },
        {
            id: 3,
            title: 'Tokyo',
        },
        {
            id: 4,
            title: 'Toronto',
        },
        {
            id: 5,
            title: 'Delhi',
        },
    ];
  return (
    <div className='flex items-center justify-around my-6'>
        {
            cities.map((city) => (
                <button key={city.id} className='text-white text-lg mr-2 md:mr-0 font-medium transition ease-out hover:scale-125' onClick={() =>setQuery({q: city.title})}>{city.title}</button>
            ))
        }
    </div>
  )
}

export default SavedCities