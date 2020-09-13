let i;

let modal = [];
let btn = [];


// Get the modal
modal[0] = document.getElementById("myModal");
modal[1] = document.getElementById("myModal1");
modal[2] = document.getElementById("myModal2");
modal[3]=document.getElementById("myModal3");
modal[4]=document.getElementById("myModal4");
modal[5]=document.getElementById("myModal5");
modal[6]=document.getElementById("myModal6");
modal[7]=document.getElementById("myModal7");
// Get the button that opens the modal
btn = document.querySelectorAll("#myBtn")

console.log(btn)
let span =[];
// Get the <span> element that closes the modal
 span = document.getElementsByClassName("close");

var book = document.getElementsByClassName("book")


// When the user clicks the button, open the modal 
btn[0].onclick = function() {
  if(btn[0].className === 'book')
  {
 i=0;
  modal[i].style.display = "block";
}
}

btn[1].onclick = function() {
  i=1;
  if(btn[i].className === 'watch')
  {
 console.log(modal[i].style.display);
  modal[i].style.display = "block";
}
}

btn[2].onclick = function() {
  i=2;
  console.log(btn[i])
  if(btn[i].className === 'skull')
  {console.log(btn[i]);

 console.log(modal[i].style.display);
  modal[i].style.display = "block";
}
}

btn[3].onclick = function() {
  i=3;
  if(btn[i].className === 'man')
  {
 console.log(modal[i].style.display);
  modal[i].style.display = "block";
}
}

btn[4].onclick = function() {
  i=4;
  if(btn[i].className === 'sofa')
  {
 console.log(modal[i].style.display);
  modal[i].style.display = "block";
}
}

btn[5].onclick = function() {
  i=5;
  if(btn[i].className === 'bed')
  {
 console.log(modal[i].style.display);
  modal[i].style.display = "block";
}
}

btn[6].onclick = function() {
  i=6;
  if(btn[i].className === 'lamp')
  {
 console.log(modal[i].style.display);
  modal[i].style.display = "block";
}
}

btn[7].onclick = function() {
  i=7;
  if(btn[i].className === 'spacex')
  {
 console.log(modal[i].style.display);
  modal[i].style.display = "block";
}
}


console.log(span[i]);
// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
  console.log(i);
  modal[i].style.display = "none";
}

span[1].onclick = function() {
  console.log(i);
  modal[i].style.display = "none";
}

span[2].onclick = function() {
  console.log(i);
  modal[i].style.display = "none";
}
span[3].onclick = function() {
  console.log(i);
  modal[i].style.display = "none";
}
span[4].onclick = function() {
  console.log(i);
  modal[i].style.display = "none";
}
span[5].onclick = function() {
  console.log(i);
  modal[i].style.display = "none";
}
span[6].onclick = function() {
  console.log(i);
  modal[i].style.display = "none";
}
span[7].onclick = function() {
  console.log(i);
  modal[i].style.display = "none";
}
console.log(btn[2]);
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal[i]) {
    modal[i].style.display = "none";
  }
}
