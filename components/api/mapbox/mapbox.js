let map = null;

window.addEventListener('load', (event) => {
    map = L.map('mapid').setView([46.71109, 1.7191036], 1);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicG9vbnk4MWZyIiwiYSI6ImNrczVxOXRqdzA0bzcycHMwemR3eHdvMmwifQ.qz6lsiljw8GekRSqgW--LA'
    }).addTo(map);
});

export { map };