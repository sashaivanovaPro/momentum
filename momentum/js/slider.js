console.log("Hello world!");

/*  Load image from GitHub source */

function getImage (){
    let date = new Date();
    let hour = date.getHours();

let dayPart = ['morning','afternoon','evening','night'];

console.log(dayPart[1]);

let choosePicture;

    if (hour < 6 ){
    choosePicture = dayPart[3];
  } else if (hour < 12 ){
    choosePicture = dayPart[0];
  } else if (hour < 18){
    choosePicture = dayPart[1];
  } else if (hour < 24){
    choosePicture =dayPart[2];
  };

let body = document.querySelector(".body");

let link = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${choosePicture}/18.jpg')`;

body.style.backgroundImage = link;
}
getImage ()