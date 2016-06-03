function SpotifyService($http) {

  var url = 'https://api.spotify.com/v1/'

  this.searchFor = function(query) {
    var searchTerm = query.replace(' ','%20');
    return $http.get(url + 'search?q=' + searchTerm + '&type=artist');
  };

  this.getArtistTracks = function(id) {
    return $http.get(url + 'artists/' + id + '/top-tracks?country=US')
  };

  this.authorize = function() {
    var client_id = '';
    var secret_code = '';
    var redirect_uri = '';
    var scope = '';

    var baseUrl = "https://accounts.spotify.com/authorize";
    return $http.get(baseUrl + '?client_id=' + client_id + '&response_type=code&redirect_uri=' + redirect_uri + '&scope=' + scope)
  }
};

angular
  .module('app')
  .service('SpotifyService', SpotifyService)