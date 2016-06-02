function LastfmService($http) {

  var url = 'http://ws.audioscrobbler.com/2.0/';
  var API_KEY = '00e8b5ac96892ec9c27ac8f763125b4e';

  this.searchFor = function(query) {
    return $http.get(url + "?method=artist.search&artist=" + query + "&api_key=" + API_KEY + "&format=json")
  };

  this.getArtist = function(artist) {
    return $http.get(url + "?method=artist.getinfo&artist=" + artist + "&api_key=" + API_KEY + "&format=json")
  }
}

angular
  .module('app')
  .service('LastfmService', LastfmService)