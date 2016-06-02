function SpotifyService($http) {

  var url = 'https://api.spotify.com/v1/'

  this.searchFor = function(query) {
    var searchTerm = query.replace(' ','%20');
    return $http.get(url + 'search?q=' + searchTerm + '&type=artist');
  };

  this.getArtistTracks = function(id) {
    return $http.get(url + 'artists/' + id + '/top-tracks?country=US')
  };
};

angular
  .module('app')
  .service('SpotifyService', SpotifyService)