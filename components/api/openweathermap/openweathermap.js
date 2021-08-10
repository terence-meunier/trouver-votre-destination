const apiKey = "c7af87ae8e32c12b241b39136d0ddafa";

export default function searchCity(city) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        return data;
      })
      .catch(error => console.log(error));
  }