var mobile = document.documentElement.clientWidth <= 700;
                                                                                                 
mapboxgl.accessToken = 'pk.eyJ1Ijoibm1hcmNoaTAiLCJhIjoiY2p6dTljeDhiMGRwcjNubnl2aXI0OThhYyJ9.4FdGkBJlOXMPRugyqiXrjg';
window.map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/nmarchi0/ck0ms2hs24i4q1cqplaqbe0py", 
  center: [6.525479, 3.348520], // starting position
  zoom: 1,
  maxZoom: 15,
  minZoom: 1,
  hash: true
});

var sidebar = document.getElementById('sidebar');

if (!mobile) {
  window.map.addControl(new mapboxgl.NavigationControl());
  sidebar.className += " pin-bottomleft";
} else {
  window.map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
}

// map.on('zoomend', function() {
//  var zoom = map.getZoom();
//  if(zoom <= 10) {
//    setSpeed(.9);
//  }
//});

function flyHandler(id, options) {
  var button = document.getElementById(id);
  if(!button) return;
  button.addEventListener('click', function() {
    map.flyTo({
      center: options.center,
      zoom: options.zoom || 10
    });
    if (options.speed) {
      setSpeed(options.speed);
    }
  });
}

flyHandler('sierra-leone', {
  center: [-13.250978, 8.480201],
  zoom: 10,
  speed: .5
});
flyHandler('liberia', {
  center: [-10.806036, 6.328368],
  zoom: 10,
  speed: .2
});
flyHandler('haiti', {
  center: [-72.336652, 18.538995],
  zoom: 10,
  speed: 20
});
flyHandler('nepal', {
  center: [85.344876, 27.699009],
  zoom: 10,
  speed: 20
});

var layers = ['High access', '', 'Universal access', 'Limited access', '', '', 'Critical deficits'];
var colors = ['#a7f39a', '#d8f6d5', '#faf9f9', '#f7dbdb', '#f09799', '#f07172', '#f55758'];

for (i = 0; i < layers.length; i++) {
  var layer = layers[i];
  var color = colors[i];
  var item = document.createElement('div');
  var key = document.createElement('span');
  key.className = 'legend-key';
  key.style.backgroundColor = color;

  var value = document.createElement('span');
  value.innerHTML = layer;
  item.appendChild(key);
  item.appendChild(value);
  legend.appendChild(item);
}
