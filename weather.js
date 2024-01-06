let apiKey = "446ea1102c55473ea5f143806240101";
let BASE_URL =
  "http://api.weatherapi.com/v1/current.json?key=446ea1102c55473ea5f143806240101&q=pune&aqi=yes";
let list = document.querySelectorAll(".card-body li");
let color = document.querySelectorAll(".featurecol");
let weatherParis = document.querySelector(".weatherParis");
let weatherPatna = document.querySelector(".weatherPatna");
let weatherMumbai = document.querySelector(".weatherMumbai");

const getWeather = async (city) => {
  cityName.innerHTML = city;
  let input = document.querySelector("#input");
  let inputVal = input.value;
  const URL = `http://api.weatherapi.com/v1/current.json?key=446ea1102c55473ea5f143806240101&q=${city}&aqi=yes`;
  let response = await fetch(URL);
  let data = await response.json();

  let currCondition = data.current.condition.text;
  gust_kph.innerHTML = data.current.gust_kph;
  gust_mph.innerHTML = data.current.gust_mph;
  humidity.innerHTML = data.current.humidity;
  pressure_mb.innerHTML = data.current.pressure_mb;
  temp_c.innerHTML = data.current.temp_c;
  temp_f.innerHTML = data.current.temp_f;
  vis_km.innerHTML = data.current.vis_km;
  vis_miles.innerHTML = data.current.vis_miles;
  wind_degree.innerHTML = data.current.wind_degree;
  wind_dir.innerHTML = data.current.wind_dir;
  wind_kph.innerHTML = data.current.wind_kph;
  wind_mph.innerHTML = data.current.wind_mph;
 
  if (
    currCondition === "Light rain" ||
    currCondition === "Patchy light rain" ||
    currCondition === "Moderate rain at times" ||
    currCondition === "Moderate rain" ||
    currCondition === "Heavy rain at time" ||
    currCondition === "Heavy rain" ||
    currCondition === "Light freezing rain" ||
    currCondition === "Moderate or heavy freezing rain" ||
    currCondition === "Torrential rain shower" ||
    currCondition === "Patchy light rain with thunder" ||
    currCondition === "Moderate or heavy rain with thunder"||
    currCondition === "Patchy light drizzle"||
    currCondition === "Light drizzle"||
    currCondition === "Freezing drizzle"||
    currCondition === "Heavy freezing drizzle"||
    currCondition === "Patchy light rain with thunder"||
    currCondition === "Moderate or heavy rain with thunder"||
    currCondition === "Patchy freezing drizzle possible"||
    currCondition === "Patchy rain possible"
  ) {
    document.body.style.backgroundImage = `url('rain.jpg')`;
    document.body.style.color = "white";
    
  } else if (currCondition === "Overcast") {
    document.body.style.backgroundImage = `url('overcast.jpg')`;
    document.body.style.color = "black";
  } else if (currCondition === "Sunny") {
    document.body.style.backgroundImage = `url('sunny.jpg')`;
    document.body.style.color = "black";
  } else if (currCondition === "Clear") {
    document.body.style.backgroundImage = `url('clear.jpg')`;
    document.body.style.color = "white";
  } else if (currCondition === "Cloudy" || currCondition === "Partly cloudy") {
    document.body.style.backgroundImage = `url('cloudy.jpg')`;
    document.body.style.color = "white";
  } else if (
    currCondition === "Patchy snow possible" ||
    currCondition === "Blowing snow" ||
    currCondition === "Patchy light snow" ||
    currCondition === "Light snow" ||
    currCondition === "Patchy moderate snow" ||
    currCondition === "Moderate snow" ||
    currCondition === "Patchy heavy snow" ||
    currCondition === "Heavy snow" ||
    currCondition === "Light snow showers" ||
    currCondition === "Moderate or heavy snow showers" ||
    currCondition === "Patchy light snow with thunder" ||
    currCondition === "Moderate or heavy snow with thunder" ||
    currCondition === "Blizzard"
  ) {
    document.body.style.backgroundImage = `url('snowy.jpg')`;
    document.body.style.color = "black";
  } else if (
    currCondition === "Mist" ||
    currCondition === "Fog" ||
    currCondition === "Freezing fog"
  ) {
    document.body.style.backgroundImage = `url('fog.jpg')`;
    document.body.style.color = "black";
  } else if (
    currCondition === "Patchy sleet possible" ||
    currCondition === "Moderate or heavy sleet" ||
    currCondition === "Ice pellets" ||
    currCondition === "Light sleet showers" ||
    currCondition === "Light showers of ice pellets" ||
    currCondition === "Moderate or heavy showers of ice pellets"||
    currCondition === "Light sleet"
  ) {
    document.body.style.backgroundImage = `url('sleets.jpg')`;
    document.body.style.color = "black";
  }
  else{
    document.body.style.backgroundImage=`url('rainbow.jpg')`;
    document.body.style.color = "black";
  }
  }


let btn = document.querySelector("#btn");
btn.addEventListener("click", (evt) => {
  evt.preventDefault();

  getWeather(input.value);
});

const mumbai = async () => {
  const URL = `http://api.weatherapi.com/v1/current.json?key=446ea1102c55473ea5f143806240101&q=${"mumbai"}&aqi=yes`;
  let response = await fetch(URL);
  let data = await response.json();

  let currentData = data.current;
  for (let key in currentData) {
    if (currentData.hasOwnProperty(key)) {
      let propertyValue = currentData[key];
      weatherMumbai.innerHTML += `${key}:${propertyValue}<br>`;
    }
  }
};
const patna = async () => {
  const URL = `http://api.weatherapi.com/v1/current.json?key=446ea1102c55473ea5f143806240101&q=${"patna"}&aqi=yes`;
  let response = await fetch(URL);
  let data = await response.json();

  let currentData = data.current;
  for (let key in currentData) {
    if (currentData.hasOwnProperty(key)) {
      let propertyValue = currentData[key];
      weatherPatna.innerHTML += `${key}:${propertyValue}<br>`;
    }
  }
};

const paris = async () => {
  const URL = `http://api.weatherapi.com/v1/current.json?key=446ea1102c55473ea5f143806240101&q=${"paris"}&aqi=yes`;
  let response = await fetch(URL);
  let data = await response.json();
  let currentData = data.current;
  for (let key in currentData) {
    if (currentData.hasOwnProperty(key)) {
      let propertyValue = currentData[key];
      weatherParis.innerHTML += `${key}:${propertyValue}<br>`;
    }
  }
};
mumbai();
patna();
paris();

const defaultWeather = async () => {
  const URL = `http://api.weatherapi.com/v1/current.json?key=446ea1102c55473ea5f143806240101&q=${"pune"}&aqi=yes`;
  let response = await fetch(URL);
  let data = await response.json();

  gust_kph.innerHTML = data.current.gust_kph;
  gust_mph.innerHTML = data.current.gust_mph;
  humidity.innerHTML = data.current.humidity;
  pressure_mb.innerHTML = data.current.pressure_mb;
  temp_c.innerHTML = data.current.temp_c;
  temp_f.innerHTML = data.current.temp_f;
  vis_km.innerHTML = data.current.vis_km;
  vis_miles.innerHTML = data.current.vis_miles;
  wind_degree.innerHTML = data.current.wind_degree;
  wind_dir.innerHTML = data.current.wind_dir;
  wind_kph.innerHTML = data.current.wind_kph;
  wind_mph.innerHTML = data.current.wind_mph;
};
defaultWeather();
getWeather("pune");
