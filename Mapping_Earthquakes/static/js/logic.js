// Get data from cities.js
let cityData = cities;

// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level. zoom scale: 0-18
let map = L.map('mapid').setView([40.7, -94.5], 4); 

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
	console.log(city)
	L.marker(city.location).addTo(map);
});

// Loop through the cities array and create circle for each city propotional to its population
cityData.forEach(function(city) {
	L.circleMarker(city.location, {
		radius: city.population/100000
	})
	.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

// Coordinates for each point to be used in the line.
let startLoc = [33.9416, -118.4085];  //eg SanFran

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
	console.log(city)
	L.marker(city.location)
	.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
  .addTo(map);
});


