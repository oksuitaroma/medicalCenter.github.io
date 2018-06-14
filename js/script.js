menu.onclick = function myFunction() {
  var x = document.getElementById("myTopnav");

  if(x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className ="topnav";
  }
}

function initMap() {
  var uluru = {lat: 50.450860, lng: 30.378208};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}


const buttons = document.querySelectorAll(".open-modal");
[].slice.call(buttons, 0).forEach(b => b.addEventListener('click', function() {
  const modalToOpen = document.querySelector(`.${this.dataset.modal}`);
  modalToOpen.style = 'display: block';
}));

const closeButtons = document.querySelectorAll(".close");
[].slice.call(closeButtons, 0).forEach(b => b.addEventListener('click', function() {
  const modalToOpen = document.querySelector(`.${this.dataset.modal}`);
  modalToOpen.style = 'display: none';
}));

[].slice.call(window, 0).forEach(b => b.addEventListener('click', function(event) {
  const modalToOpen = document.querySelector(`.${this.dataset.modal}`);
  if (event.target == modalToOpen) {
  modalToOpen.style = 'display: none';
  }
}));

function openModal() {
  var modal= document.querySelectorAll(".modal");
    for (var i = 0; i < modal.length; i++) {
      modal[i].addEventListener("click", function() {
        modal[i].style.display = "block";
      });
    }
}
