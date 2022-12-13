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
    zoom: 8, // starting zoom
});






function stopSpin() {
  const loading = document.querySelector('.loading');
  loading.style.animation = 'none';
};

function clearCover() {
  const cover = document.querySelector('.map-cover');
  setTimeout(() => {
    cover.style.visibility = 'hidden';
  }, 1000)
}