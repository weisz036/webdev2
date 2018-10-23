// script.js

///////////////////////////////////////////////////////////////////////////////
//
// This the Javascript file we'll use to make our leaflet map
// Based on Maptime Boston leaflet tutorial:
// https://maptimeboston.github.io/leaflet-intro/
//
///////////////////////////////////////////////////////////////////////////////

// initialize the map
// We pass the div with id "map" to the L.map function
var map = L.map('map')
    // set initial map view to Boston with zoom level 13
    .setView([39.47, -95.41], 4);

// load a tile layer
// loading the base layer of map tiles using a URL template
// this template ({z}/{x}/{y}) allows leaflet to locate tiles with the
// correct zoom, x, and y coordinates
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})
    // use the .addTo method to add the tile layer to the map.
    .addTo(map);

// Visit http://leaflet-extras.github.io/leaflet-providers/preview/
// Have fun playing around with different basemaps that are available to use in Leaflet

// FIXME: Load CSV data into leaflet markers
// Try Googling "leaflet csv" for a number of options
// One of the most basic of these is leaflet-omnivore (which handles much more
// than just CSV files)
// ref: https://github.com/mapbox/leaflet-omnivore

// FIXME: Add styling to markers
// hint: refer to this tutorial for an example of how to do this:
// ref: https://leafletjs.com/examples/custom-icons/
// Use airport.png image file
