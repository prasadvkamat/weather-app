
const apiKey = '7O8WqbRTl72HySoPIb26sQ==KhrW8yHOlGSslYkC'; // Replace this with your actual API key

const url = `https://api.api-ninjas.com/v1/weather?city=london`;

const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
    'Content-Type': 'application/json',
  },
};
const getweather = (city) => {
cityname.innerHTML=city
  fetch(`https://api.api-ninjas.com/v1/weather?city=` + city, options)
    .then((response) => response.json())
    .then((result) => {

      console.log(result)
      cloud_pct.innerHTML = result.cloud_pct
      feels_like.innerHTML = result.feels_like
      humidity.innerHTML = result.humidity
      max_temp.innerHTML = result.max_temp
      min_temp.innerHTML = result.min_temp
      sunrise.innerHTML = result.sunrise
      sunset.innerHTML = result.sunset
      temp.innerHTML = result.temp
      wind_degrees.innerHTML = result.wind_degrees
      wind_speed.innerHTML = result.wind_speed


    })
    .catch((error) => console.error('Error:', error));
}
Submit.addEventListener("click", (e)=>{
  e.preventDefault()
  getweather(city.value)
})
