
;var images = document.getElementsByClassName('thumbnails')[0].getElementsByTagName('img');
for (i = 0; i < images.length; i++) {
    images[i].onmouseover = function () {
        document.getElementById('preview').src = this.src;
    }
}





function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }