var videos = document.querySelectorAll('.pl-video-title');

var descargas = [];
var originales = [];

videos.forEach(function(video){
  var newUrl = video.childNodes[1].href.replace('https://www.','ss');
  originales.push(video.childNodes[1].href);
  descargas.push(newUrl);
});

var total = descargas.length;

for(var i=0; i<total; i++){
  window.location = ''
}
