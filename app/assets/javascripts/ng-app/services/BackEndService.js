function BackEndService($http) {

  // return artist index
  this.getArtists = function() {
    return $http.get('/artists')
  };

  // return artist show page by id
  this.getArtist = function(id) {
    return $http.get('/artists/' + id)
  };

  // return genres index
  this.getGenres = function() {
    return $http.get('/genres')
  };

  // return genre show
  this.getGenre = function(id) {
    console.log(id)
    return $http.get('/genres/' + id)
  }

  // return a user's set of top artists
  this.getUserArtists = function(id) {
    return $http.get('/users/' + id)
  }

  this.postArtistListens = function(id, playcount) {
    $http.patch('/artists/' + id, playcount)
  }
}

angular
  .module('app')
  .service('BackEndService', BackEndService)