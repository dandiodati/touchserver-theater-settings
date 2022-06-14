if(_feedback && _feedback.startsWith('{')) {
data = JSON.parse(_feedback);
if(data.result.item && data.result.item.art) {
   poster = data.result.item.art.poster;
   title = data.result.item.title;
}
if (poster) {
_global.currentMoviePoster = 'http://192.168.1.11:18081/image/' + encodeURIComponent(poster);
_global.currentMovieTitle = title;

 log('got poster ' + poster);

} else {
 log('no poster' + poster);
//_global.currentMoviePoster = 'images/theater-buttons/postericon.png';
_global.currentMoviePoster = 'https://picsum.photos/150/220';
//_global.currentMoviePoster = '';
_global.currentMovieTitle = "No Movie Playing.";
}


return '[#]kodi^movie_image';

} else {
log("got error " + _feedback);


}