document.getElementById('weatherForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    getWeather(city);
  });

  function getWeather(city) {
    const apiKey = 'ff73932c20cf753d0b84818dfb3469b0'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }

  function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const weatherHtml = `
      <h3>${cityName}</h3>
      <p>Temperature: ${temperature} &#8451;</p>
      <p>Description: ${description}</p>
    `;

    weatherInfoDiv.innerHTML = weatherHtml;
  }