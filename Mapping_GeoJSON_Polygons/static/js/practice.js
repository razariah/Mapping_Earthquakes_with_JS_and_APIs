// Add GeoJSON data.

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

//Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport).addTo(map);

//Grabbing our GeoJSON data.
L.geoJson(sanFranAirport, {
    // We turn each feature into a marker on the map.
    pointToLayer: function(feature, latlng) {
      console.log(feature);
	  return L.marker(latlng)
	  .bindPopup("<h2>" + feature.properties.city + "</h2>");
    }

  }).addTo(map);

L.geoJson(sanFranAirport, {
	onEachFeature: function(feature, layer) {
		console.log(layer);
		layer.bindPopup("<h2>" + feature.properties.name + "<hr/>(" + feature.properties.faa + ")</h2>");
	}
}).addTo(map);

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

let paloAlto = ['37.446531', '-122.160784'];
let rockville = ['39.095432', '-77.142381'];

L.circleMarker(paloAlto, {
	color: "red"
}).bindPopup("<h2>Palo Alto, CA<hr/>Ramesh Lives Here</h2>").addTo(map);

L.circleMarker(rockville, {
	color: "red"
}).bindPopup("<h2>RockVille, MD<hr/>Jerry Lives Here</h2>").addTo(map);
