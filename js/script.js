menu.onclick = function myFunction() {
  var x = document.getElementById("myTopnav");

  if(x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className ="topnav";
  }
}

function initMap() {
  var uluru = {lat: 49.391503, lng: 31.626270};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
