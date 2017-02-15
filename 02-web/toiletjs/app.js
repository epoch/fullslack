console.log('please flush');


var poop = function() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'darkolivegreen';
}

var poopBtn = document.getElementById('poop-btn');

poopBtn.addEventListener('click', poop);

// mintcream

var movePixel = 10;

var catWalk = function() {
  // dom api allows to access the dom 
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = currentLeft + movePixel + 'px';
  if (currentLeft > 300) {
    img.style.left = '0px';
  }
}

// one function to start
// one function to stop

// timers
// setInterval(fn, interval) => receipt
// use the receipt to cancel the timer with clearInterval

// window object properties will be useful
