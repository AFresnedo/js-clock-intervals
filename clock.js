// seconds to rotation ( seconds / 60 ) * 360
function timeRotation(t) {
  return (t / 60) * 360;
}

function hourRotation(hr) {
  return (hr / 24) * 360;
}

// get time
var sinceEpoch = new Date();
time = sinceEpoch.getTime();

// dom manipulation

// // TODO find elements once
// var secHand = document.getElementById('second');
// var minHand = document.getElementById('minute');
// var hrHand = document.getElementById('hour');

function rotateClock() {
  console.log(time + ' seconds have passed');
  // rotate clock
  secRotate(time);
  minRotate(time);
  hrRotate(time);
  // time has passed, update time by interval (1sec)
  time += 1;
}


function secRotate(time) {
  ele = document.getElementById('second');
  // call timeRotation
  // dom manipulate
  rotation = timeRotation(time);
  console.log('time is ' + time);
  console.log('rotatation is ' + rotation);
  ele.style.transform = 'rotate('+rotation+'deg)';
}

function minRotate(hand) {
  // call timeRotation
  // dom manipulate transform
  ele = document.getElementById('minute');
  // call timeRotation
  // dom manipulate
  rotation = timeRotation(time/60);
  console.log('time is ' + time);
  console.log('min rotatation is ' + rotation);
  ele.style.transform = 'rotate('+rotation+'deg)';
}

function hrRotate(hand) {
  // call hrRotation
  // dom manipulate transform
  ele = document.getElementById('hour');
  // call timeRotation
  // dom manipulate
  rotation = hourRotation(time/60/60);
  console.log('time is ' + time);
  console.log('hr rotatation is ' + rotation);
  ele.style.transform = 'rotate('+rotation+'deg)';

}

// driver calls rotate
// set interval?
setInterval(rotateClock, 1000);
