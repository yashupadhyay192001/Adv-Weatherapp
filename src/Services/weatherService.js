import { data } from "autoprefixer";
import { DateTime } from "luxon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_key = "31d9709f55919b781d95d418ab9b78e2";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

let res_status = -1;

const getWeatherData = (info, Params) => {
  const url = new URL(BASE_URL + "/" + info);
  url.search = new URLSearchParams({ ...Params, appid: API_key });
  return fetch(url)
    .then((res) => {
      if (res.ok) {
        res_status = -1;
        return res.json();
      } else {
        res_status = res.status;
        toast.error(`Error: ${res_status}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    })
    .catch((e) => {
      return console.log(e);
    });
};

const formatter = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    visibility,
    name,
    dt,
    sys: { country },
    weather,
    wind: { speed, deg },
  } = data;

  const { main: details, icon, description } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    pressure,
    name,
    dt,
    visibility,
    speed,
    country,
    details,
    icon,
    description,
    deg,
  };
};

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 8).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
      temp_min: d.temp.min,
      temp_max: d.temp.max,
    };
  });
  hourly = hourly.slice(1, 9).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp,
      icon: d.weather[0].icon,
      weather: d.weather[0].main,
      hourly: d.humidity,
    };
  });

  return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (Params) => {
  const formattedCurrentWeather = await getWeatherData("weather", Params).then(
    formatter
  );

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: Params.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd, LLL, yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode, res_status };
