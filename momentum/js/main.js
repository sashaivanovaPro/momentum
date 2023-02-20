/* Time app */



function currentTime() {
    const date = new Date(); /* creating object of Date class */
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
    const t = setTimeout(currentTime, 1000); /* setting timer */
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

  /* Date  */

  /*
function currentDate() {

    const year = date.getFullYear()
    const date = date.getDate()
    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
    ]

    const monthName = months(date.getMonth())

    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ]

    const monthName = months(date.getMonth())

    const dayName = days[date.getDay()]

//    const formatted = '${dayName}, ${date} ${monthName} ${year}'
// Четверг, 23 января 2019
document.getElementById("date").innerText = dayName + " , " + monthName + "   " + date;
document.getElementById("year").innerText = year;
}

currentDate();












