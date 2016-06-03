function HomeController(LastfmService, SpotifyService) {
  var ctrl = this;
  ctrl.query = '';

  ctrl.submit = function() {
    var query = ctrl.query;

    LastfmService // first search for Last.fm exact artist name, returning first result.
      .searchFor(query)
      .then(function(resp) {
        ctrl.artist = resp.data.results.artistmatches.artist[0].name
        ctrl.listeners = resp.data.results.artistmatches.artist[0].listeners

        LastfmService // next search to grab the total playcount for correct artist
          .getArtist(ctrl.artist)
          .then(function(response) {
            // console.log(response);
            ctrl.bio = response.data.artist.bio.summary
            ctrl.playcount = response.data.artist.stats.playcount
          })
      })

    SpotifyService // first search to grab artist ID from Spotify
      .searchFor(query)
      .then(function(resp) {
        console.log(resp)
        var spotifyID = resp.data.artists.items[0].id
        ctrl.spotifyName = resp.data.artists.items[0].name
        ctrl.spotifyImage = resp.data.artists.items[0].images[0].url

        SpotifyService // next search to get spotify top-track data for right artist
          .getArtistTracks(spotifyID)
          .then(function(response) {
            // console.log(response);
            ctrl.tracks = response.data.tracks.slice(0, 4)
          })
      })
  }
}


angular
  .module('app')
  .controller('HomeController', HomeController)