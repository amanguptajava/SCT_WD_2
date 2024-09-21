const play_button =document.getElementsByClassName("play")[0];
const lap_button = document.getElementsByClassName("lap")[0];
const reset_button = document.getElementsByClassName("reset")[0];
const clear_button = document.getElementsByClassName("laps_clear")[0];
const minute = document.getElementsByClassName("min")[0];
const Second = document.getElementsByClassName("sec")[0];
const miliSecond = document.getElementsByClassName("msec")[0];
const laps = document.getElementsByClassName("laps")[0];
const bg = document.getElementsByClassName("outer_circle")[0];

let isPlay = false;
let isreset = false;

let mincounter = 0;
let seccounter = 0;
let miliseccounter = 0;

let min;
let sec;
let milisec;

let lap_item = 0;

const toggle_button = () => {
  lap_button.classList.remove("hide");
  reset_button.classList.remove("hide");
}

const play = () => {
  if (!isPlay && !isreset){
      play_button.innerHTML = "Pause";
      bg.classList.add("animation-bg");
        min = setInterval(() => {
          minute.innerHTML=`${++mincounter} :`;
        },60*1000);
        sec = setInterval(() => {
          if(seccounter === 60){
            seccounter = 0;
          }
          Second.innerHTML = `&nbsp;${++seccounter} :`;
        },1000);
        milisec = setInterval(() => {
          if(miliseccounter === 100){
            miliseccounter = 0;
          }
          miliSecond.innerHTML = `&nbsp;${++miliseccounter}`;
        },10);

    isPlay = true;
    isreset = true;
  }else{
    play_button.innerHTML = 'Play';

    clearInterval(min);
    clearInterval(sec);
    clearInterval(milisec);

    isPlay = false;
    isreset = false;
    bg.classList.remove("animation-bg");
  }
  toggle_button();
}

const reset = () =>{
  isreset = true;
  play();
  lap_button.classList.add("hide");
  reset_button.classList.add("hide");

  minute.innerHTML = `0 :`;
  Second.innerHTML = `&nbsp;0 :`;
  miliSecond.innerHTML = `&nbsp;0`;
}

const lap = () => {
  const li = document.createElement("li");
  const num = document.createElement("span");
  const lap_stamp = document.createElement("span");

  li.setAttribute("class","lap_item");
  num.setAttribute("class","lap_number");
  lap_stamp.setAttribute("class","lap_time");

  num.innerText = `#${++lap_item}`
  lap_stamp.innerHTML = `${mincounter} : ${seccounter} : ${miliseccounter}`;

  li.append(num, lap_stamp);
  laps.append(li);

  clear_button.classList.remove("hide");
}

const clearAll = () => {
  laps.innerHTML = '';
  laps.append(clear_button);

  clear_button.classList.add("hide");
  lap_item = 0;
}

play_button.addEventListener("click",play);
reset_button.addEventListener("click",reset);
lap_button.addEventListener("click",lap);
clear_button.addEventListener("click",clearAll);
