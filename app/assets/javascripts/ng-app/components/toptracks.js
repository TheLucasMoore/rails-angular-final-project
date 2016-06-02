var topTracks(track) = {
  bindings: {
    info: '='
    console.log(info)
  },
  templateUrl: 'track.html',
  controllerAs: 'track'
}

angular
  .module('app')
  .component('topTracks', TopTracks)