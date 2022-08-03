const sec = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
var interval_id;

const start_timer = () => {
  let seconds = 0,
    min = 0,
    hrs = 0;

  interval_id = setInterval(() => {
    seconds = seconds + 1;
    sec.innerText = seconds;
    if (seconds >= 60) {
      seconds = 0;
      min = min + 1;
      minutes.innerText = min;
    } else if (min >= 60) {
      min = 0;
      hrs = hrs + 1;
      hours.innerText = hrs;
    }
  }, 1000);
};

const reset_timer = () => {
  clearInterval(interval_id);
  sec.innerText = "00";
  minutes.innerText = "00";
  hours.innerText = "00";
};
