/* Time app */


function currentTime() {
    let date = new Date(); /* creating object of Date class */
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    /*hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);  assigning hour in 12-hour format */
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
    const t = setTimeout(currentTime, 1000); /* setting timer */

    /*let year = date.getFullYear();
    year = updateTime(year);
    document.getElementById("year").innerText = year;*/


    let days = ['Sunday', 'Monday', 'Tueseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let months = [
        'January',
        'Fabruary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
    let day = days[date.getDay()];

    let month = months[date.getMonth()];

    let dateNumber = date.getDate();

    document.getElementById("date").innerText = day + " , " + month + " " + dateNumber;

    let greeting = ['Good morning','Good afternoon','Good evening','Good night'];

    let sayHello;
    if (hour < 6 ){
        sayHello = greeting[3];
  } else if (hour < 12 ){
        sayHello = greeting[0];
  } else if (hour < 18){
        sayHello = greeting[1];
  } else if (hour < 24){
        sayHello =greeting[2];
  };
  let name = document.getElementById("input__name");

  document.getElementById("greeting").innerText = sayHello + " , ";

  }

  function updateTime(k) { /* appending 0 before time elements if less than 10 */
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }

  currentTime();

  /* Greeting save name after page reload*/

const input = document.getElementById('input__name');

//console.log (input);
function setLocalStorage() {
    localStorage.setItem('name', input.value);
  }
window.addEventListener('beforeunload', setLocalStorage)
//console.log(input.value);

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    input.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage)

/* Image change */

/* константа по которой отлавливать будем клик */
const button = document.querySelectorAll(".arrow");
console.log(button);
button.forEach(element => {
  element.addEventListener("click", () => {
    console.log("click");
    getLinkToImage()
  })
});

/* константа в которой поменяется изображение */

let body = document.querySelector(".body");

document.body.style.backgroundImage = "url('/momentum/img/jpeg/Tanshan-2.jpg')";






async function getLinkToImage() {
  //const url = 'https://api.unsplash.com/photos/random?query=morning&client_id=FUP1wlBU8_TQjQDicwXZCPPqG1SgcELEIWejq4a9dt0';
  const response = await fetch(url);
  const data = await response.json();
  //console.log(data.urls.full);
  //image = data.urls.regular
  //document.body.style.backgroundImage.image
  ///console.log(body);
  };


  /* Weather APP */

  //

  async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=4f5eb9cfd63ac737d38c20e46e12bd32&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.weather[0].id, data.weather[0].description, data.main.temp);

    /* city */

    const city = document.querySelector('.city-name');
    city.textContent = `${data.name}`;

    /*иконка облаков*/

    const weatherIcon = document.querySelector('.weather__icon');
    //console.log(weatherIcon);
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);

    /* температура */

    const temperature = document.querySelector('.temperature');
    temperature.textContent = `${Math.round(data.main.temp)}°C`;

    /* другие параметры */

    const wind = document.querySelector('.wind');
    wind.textContent = `wind speed: ${data.wind.speed} m/s`;

    const weatherDescription = document.querySelector('.parametrs');
    weatherDescription.textContent = data.weather[0].description;

    const humidity = document.querySelector('.humidity');
    humidity.textContent = `humidity: ${data.main.humidity}%`;



  }
  getWeather()





















