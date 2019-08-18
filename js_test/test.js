let x = 0;
document.getElementById("next").onclick = function() {
  x += 1;
  if(x>4){
    x = 0;
  };
  switch(x){
   case 0:mainImage.style.backgroundImage = "url(images/main-image1.jpg)"; break;
    case 1:mainImage.style.backgroundImage = "url(images/main-image2.jpg)"; break;
    case 2:mainImage.style.backgroundImage = "url(images/main-image3.jpg)"; break;
    case 3:mainImage.style.backgroundImage = "url(images/main-image4.jpg)"; break;
    case 4:mainImage.style.backgroundImage = "url(images/main-image5.jpg)"; break;
  };
};
document.getElementById("prev").onclick = function() {
  x -= 1;
  if(x<0){
    x = 4;
  };
  switch(x){
   case 0:mainImage.style.backgroundImage = "url(images/main-image1.jpg)"; break;
    case 1:mainImage.style.backgroundImage = "url(images/main-image2.jpg)"; break;
    case 2:mainImage.style.backgroundImage = "url(images/main-image3.jpg)"; break;
    case 3:mainImage.style.backgroundImage = "url(images/main-image4.jpg)"; break;
    case 4:mainImage.style.backgroundImage = "url(images/main-image5.jpg)"; break;
  };
};
document.getElementById("b1").onclick = function() {
  document.getElementById("modal1").style.display = "block";
  document.getElementById("mask").style.display = "block";
};
document.getElementById("b2").onclick = function() {
  document.getElementById("modal2").style.display = "block";
  document.getElementById("mask").style.display = "block";
};
document.getElementById("b3").onclick = function() {
  document.getElementById("modal3").style.display = "block";
  document.getElementById("mask").style.display = "block";
};
document.getElementById("m1close").onclick = function() {
  document.getElementById("modal1").style.display = "none";
  document.getElementById("mask").style.display = "none";
};
document.getElementById("m2close").onclick = function() {
  document.getElementById("modal2").style.display = "none";
  document.getElementById("mask").style.display = "none";
};
document.getElementById("m3close").onclick = function() {
  document.getElementById("modal3").style.display = "none";
  document.getElementById("mask").style.display = "none";
};
// document.getElementsByClassName('close').onclick = function(){
//   document.getElementById("modal1").style.display = "none";
//   document.getElementById("modal2").style.display = "none";
//   document.getElementById("modal3").style.display = "none";
//   document.getElementById("mask").style.display = "none";
// };
