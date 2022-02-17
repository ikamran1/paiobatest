

 var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function multiply()
{
    a = 610;
    d = 70;
    b = Number(document.getElementById('quantity').value);
    if( b <= 0 && b <= ''){
        alert('Quantity  can not be less than 1'); 
    }else if(  b <= 1){
      c = a * b + d;
      document.getElementById('freed').style.display='';
    }else if( b > 1){
    c = a * b;
    document.getElementById('freed').style.display='none';
    }
    
    document.getElementById('TOTAL').value = c;
}
function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "painobaliquid@gmail.com",
    Password : "fmsm pobs puhm dddh",
    To : 'painobaliquid@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Order",
    Body : "Quantity :" + document.getElementById("quantity").value
    + "<br> Price :"    + document.getElementById("TOTAL").value
    + "<br> Name :"     + document.getElementById("fname").value
    + "<br> Email :"    + document.getElementById("email").value
    + "<br> Phone Number :"  + document.getElementById("number").value
    + "<br> Address :"   + document.getElementById( "adr").value
    + "<br> city or District :"   + document.getElementById(  "city").value
    + "<br> State :"   + document.getElementById("state").value
    + "<br> Pincode :"  + document.getElementById("zip").value

}).then(
  message => alert(message)
);
}



