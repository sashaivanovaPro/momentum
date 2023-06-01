
/*  Load image from GitHub source */

let date = new Date();
let hour = date.getHours(); // get actual hour to assigh day part

let dayPart = ['morning','afternoon','evening','night']; // name of pickture arrow due to day part

let choosePicture; // item from picture arrow

let plusImage = document.querySelector(".arrow_right") // find arrow right element
// console.log(plusImage);

let minusImage = document.querySelector(".arrow_left") // find arrow left element
// console.log(minusImage);

if (hour < 6 ){
    choosePicture = dayPart[3];
  } else if (hour < 12 ){
    choosePicture = dayPart[0];
  } else if (hour < 18){
    choosePicture = dayPart[1];
  } else if (hour < 24){
    choosePicture =dayPart[2];
  };
  // algorithm for choosing picture arrow

    // random number between 1 and 20 from each arrow

    function getRandomInt(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        n = ((Math.floor(Math.random() * (max - min)) + min).toString()).padStart(2,"0");
        // console.log(n);
        return n
      }
    let number = getRandomInt(2,20);

      // результат - number, переводим в строку и добавляем до 2 значного символа ноль, если это значение меньше 10
    // min - попадает в рэндом, max - нет

    function getSlideNext(){
        if (number !== 20){
            number = parseInt(number) + 1;
        } else {
            number = "01";
        };
        console.log((number.toString()).padStart(2,"0"));
        return (number.toString()).padStart(2,"0");
      }

      plusImage.onclick = function(){
        getSlideNext();
        getImage ();
      }
      // function to change image to next in arrow

      function getSlidePrevious(){
        if (number !==1){
            number = parseInt(number) - 1;
        } else{
            number = "20";
        };
        console.log((number.toString()).padStart(2,"0"));
        return (number.toString()).padStart(2,"0");
      }

      minusImage.onclick = function(){
        getSlidePrevious();
        getImage ();
      }
      // function to change image to previous in arrow

    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${choosePicture}/${(number.toString()).padStart(2,"0")}.jpg`;

function getImage (){
//ссылка прописана с обратными кавычками для формирования новой строки с учётом полученных данных из функции

//link = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${choosePicture}/${n}.jpg')`;

// add a new style to body element


  img.onload = () => {
    document.body.style.backgroundImage = `url(${img.src})`;;
  };
  // console.log(img.src);
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${choosePicture}/${(number.toString()).padStart(2,"0")}.jpg`;
}
getImage ()