'use strict';
/*
  XX
  Paul Funston

  xx

*/




mapboxgl.accessToken = 'pk.eyJ1IjoicGF1bGZ1biIsImEiOiJjbGJncm80Z2MwY2F4M3FwNXpxZjh5cjV6In0.9-biahBbvoH-rpsabZLQgQ';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-97.1, 49.9], // starting position [lng, lat]
    pitch: 40,
    zoom: 16, // starting zoom
});

map.dragPan.disable();
map.keyboard.disable();
map.scrollZoom.disable();
map.doubleClickZoom.disable();
map.touchZoomRotate.disable();

const marker = new mapboxgl.Marker({
  color: '#3898ff'
})

function getLocation(position) {
  const { longitude, latitude } = position.coords;

  if (longitude && latitude) {
    map.setCenter([longitude, latitude]);
    marker.setLngLat([longitude, latitude]).addTo(map);
    setTimeout(() => {clearCover()}, 750);
  }
}

function errorHandler(event) {
  stopSpin();
  console.log(event.message);
}

const options = {
  enableHighAccuracy: true,
  maximumAge: 0,
}


function stopSpin() {
  const loading = document.querySelector('.loading');
  loading.style.animation = 'none';
};

function clearCover() {
  const cover = document.querySelector('.map-cover');
  setTimeout(() => {
    cover.style.visibility = 'hidden';
  }, 500)
}

/*
  The watchPosition() method is used to register a handler funtion that will
  be called automatically each time the position of the device changes
*/

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    getLocation, 
    errorHandler,
    options
    )
} else {
  console.log(`Geolocation is not supported by your browser`);
}