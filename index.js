const miliseconds = document.getElementById("seconds");
const seconds = document.getElementById("minutes");
const minutes = document.getElementById("hours");
var interval_id;

const start_timer = () => {
  let mili = 0,
    secs = 0,
    mins = 0;

  interval_id = setInterval(() => {
    mili = mili + 1;
    miliseconds.innerText = mili;
    if (mili >= 99) {
      mili = 0;
      secs = secs + 1;
      seconds.innerText = secs;
    } else if (secs >= 59) {
      secs = 0;
      mins = mins + 1;
      minutes.innerText = mins;
    }
  }, 10);
};

const reset_timer = () => {
  clearInterval(interval_id);
  miliseconds.innerText = "00";
  seconds.innerText = "00";
  minutes.innerText = "00";
};
