var i = 0;
var txt = 'The hub for all things Fay.';
var speed = 50;

$(document).ready(function(){
 typeWriter();
});
 function typeWriter() {
 if (i < txt.length) {
    document.getElementById("subhead").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
  }