  /* Weather APP */

  //

  async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=4f5eb9cfd63ac737d38c20e46e12bd32&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.weather[0].id, data.weather[0].description, data.main.temp);

    /* city */

    const city = document.querySelector('.city-name');
    city.textContent = `${data.name}`;

    /*иконка облаков*/

    const weatherIcon = document.querySelector('.weather__icon');
    //console.log(weatherIcon);
    //weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);

    /* температура */

    const temperature = document.querySelector('.temperature');
    temperature.textContent = `${Math.round(data.main.temp)}°C ${data.weather[0].description}`;

    /* другие параметры */

    const wind = document.querySelector('.wind');
    wind.textContent = `wind speed: ${data.wind.speed} m/s`;

    const humidity = document.querySelector('.humidity');
    humidity.textContent = `humidity: ${data.main.humidity}%`;

  }

  getWeather()

  //city.addEventListener('change',getWeather())