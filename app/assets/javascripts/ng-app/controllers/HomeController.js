function HomeController(LastfmService, SpotifyService) {
  var ctrl = this;
  ctrl.query = '';

  ctrl.submit = function() {
    var query = ctrl.query;

    LastfmService // first search for Last.fm exact artist name, returning first result.
      .searchFor(query)
      .then(function(resp) {
        ctrl.lastData = resp.data
        ctrl.artist = resp.data.results.artistmatches.artist[0].name
        ctrl.listeners = resp.data.results.artistmatches.artist[0].listeners

        LastfmService // next search to grab the total playcount for correct artist
          .getArtist(ctrl.artist)
          .then(function(response) {
            ctrl.playcount = response.data.artist.stats.playcount
            console.log(ctrl.artist, ctrl.playcount)
          })
      })

    SpotifyService // first search to grab artist ID from Spotify
      .searchFor(query)
      .then(function(resp) {
        var spotifyID = resp.data.artists.items[0].id
        ctrl.spotifyName = resp.data.artists.items[0].name

        SpotifyService
          .getArtistTracks(spotifyID)
          .then(function(response) {
            var topSongs = response.data
          })
      })
  }
}


angular
  .module('app')
  .controller('HomeController', HomeController)