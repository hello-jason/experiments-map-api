// Mapbox token
L.mapbox.accessToken = '';

// Declare map container and style
var map = L.mapbox.map('map', 'mapbox.streets');

// Data set parsing with Omnivore plugin
var companyLocations = omnivore.csv('assets/data/MOCK_DATA.csv');

// Plot locations on map
companyLocations.addTo(map);

//


// Put a pin on the map
// L.mapbox.featureLayer({
//   type: 'Feature',
//   geometry: {
//     type: 'Point',
//     coordinates: [
//       -91.046954, 30.411242
//     ]
//   },
//   properties: {
//     title: 'Immense Networks',
//     description: 'We offer IT consulting, Web development & Managed hosting to Baton Rouge.<br><a href="http://immense.net">http://www.immense.net</a>',
//     'marker-size': 'large',
//     'marker-color': '#193864',
//     'marker-symbol': 'commercial'
//   }
// }).addTo(map);
