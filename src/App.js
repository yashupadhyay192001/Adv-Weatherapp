import './App.css';
import InputsNav from './Components/InputsNav';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { Input } from 'postcss';
import SavedCities from './Components/SavedCities';
import TimeAndLocation from './Components/TimeAndLocation';
import TempratureAndDetails from './Components/TempratureAndDetails';
import WeatherAttributes from './Components/WeatherAttributes';
import Forecast from './Components/Forecast';
import Hourly from './Components/Hourly';
import getFormattedWeatherData from './Services/weatherService';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [query, setQuery] = useState({q: 'berlin'})
  const [units,setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async() => {
      await getFormattedWeatherData({...query, units}).then(data => {
        setWeather(data);
      });
    }

    fetchWeather();
  }, [query, units])

  return (
      <div className="bg-[url('./Images/raindrops-2079.png')] bg-fixed bg-repeat-x bg-[#011b4bef] h-fit mx-auto max-w-screen md:max-w-screen-lg   mt-4 py-5 px-5 md:px-32 rounded-xl shadow-2xl">
     <SavedCities setQuery = {setQuery}></SavedCities>
     <InputsNav setQuery={setQuery} units={units} setUnits={setUnits}></InputsNav>
      {weather &&(
        <div>
      <TimeAndLocation weather={weather}></TimeAndLocation>
     <TempratureAndDetails weather={weather}></TempratureAndDetails>
     <WeatherAttributes weather={weather}></WeatherAttributes>
     <Forecast items={weather.daily}></Forecast>
     <Hourly items={weather.hourly}></Hourly>
        </div>
      )}

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true}></ToastContainer>

     </div>
  );
}

export default App;
