function createMap (){
    var mbAttr = '<a href = "http://openstreetmap.org">OpenStreetMap</a>' + "<a href = http://mapbox.com>Mapbox</a> <a href = "https://souny.github.io/">Sounny Slitine </a>';
    
    var apitoken = 'pk.eyJ1IjoiZnJhbmNpYXRlbm9yaW8iLCJhIjoiY2s4YnVnaGJyMGNtNzNkbnNsODl1ZzVhayJ9.UCoY_bf_K-CrQStHu6b3sA'
    
    var mbUrl = 'https://api.tiles.mapbox.com/v4{id}/{z}/{x}/{y}.png?access_token';
    
    var mbsStyleUrl = 'https://api.mapbox.com/styles/v1/{id}tiles/256/{z}/{x}/{y}?access_token ={token}';
    
    
    var galaxyTerrain = L.tileLayer(mbsStyleUrl, {id: 'https://api.mapbox.com/styles/v1/franciatenorio/ck8bulgsf2e1h1ipfij9q2dee.html?fresh=true&title=view&access_token=pk.eyJ1IjoiZnJhbmNpYXRlbm9yaW8iLCJhIjoiY2s4YnVnaGJyMGNtNzNkbnNsODl1ZzVhayJ9.UCoY_bf_K-CrQStHu6b3sA', token: apitoken, attribution: mbAttr});
    
    var grayscale = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});
    
    var dark = L.tileLayer(mbUrl, {id: 'mapbox.dark', token: apitoken, attribution: mbAttr});
    
    var outdoors = L.tileLayer(mbUrl, {id: 'mapbox.outdoors', token: apitoken, attribution: mbAttr});
    
    
    var map = L.map('map', {
        center: [31.000, -5],
        zoom: 6,
        layers:galaxyTerrain
    });
    
    L.Control.Layers(baseLayers).addTo(map);
};
}