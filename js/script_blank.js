
var map = L.map('map', {
    //for US
    //center: [39.82, -98.58],
    //for Charlotte 
    center: [35.215135, -80.831639],
    zoom: 12,
    minZoom: 2,
    maxZoom: 18
});

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);// JavaScript Document

