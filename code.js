var slideIndex = 1;
$(document).ready(function(){
	showSlides(slideIndex);
});


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
console.log("mainindex");
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
}



var slideIndex1 = 1;
<!-- showSlides1(slideIndex1); -->

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
console.log("bubububu");
  var i;
  var slides = document.getElementsByClassName("myBigSlides");
  var dots = document.getElementsByClassName("demo");
   if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
  
}

$(document).ready(function() {
	hash = window.location.hash;
	
	
	if(hash === '#About'){
		loadDoc('http://127.0.0.1:8887/about.html', 'About');
	}

	if(hash === '#Main'){
		loadDoc('http://127.0.0.1:8887/mainpage.html', 'Main');
	}	
	if(hash === '#Birthdays'){
		loadDoc('http://127.0.0.1:8887/birthdays.html', 'Birthdays');
	}

	if(hash === '#News'){
		loadDoc('http://127.0.0.1:8887/news.html', 'News');
	}		
	if(hash === '#Contacts'){
		loadDoc('http://127.0.0.1:8887/contacts.html', 'Contacts');
	}

	if(hash === '#Review'){
		loadDoc('http://127.0.0.1:8887/review.html', 'Review');
	}	
	if(hash === '#Section'){
		loadDoc('http://127.0.0.1:8887/section.html', 'Section');
	}

	if(hash === '#Price'){
		loadDoc('http://127.0.0.1:8887/price.html', 'Price');
	}
	if(hash === '#Photo'){
		loadDoc('http://127.0.0.1:8887/photo.html', 'Photo');
	}	
});




function showElement() {
	var matches = document.getElementsByClassName('for_more');
	for (var i=0; i<matches.length; i++) {
	if (matches[i].style.display != "block"){
		matches[i].style.display = "block";
		break;
	}
	}
	
}





function loadDoc(parametr, name) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("main").innerHTML =
      this.responseText;
    }
	if (parametr.includes("mainpage")){
		showSlides(1);
	}
	if (parametr.includes("photo")){
		showSlides1(1);
	}
	parent.location.hash = name;
  };
  xhttp.open("GET", parametr, true);
  xhttp.send();
}