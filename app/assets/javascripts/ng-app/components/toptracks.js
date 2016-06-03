var TopTracks = {
  bindings: {
    info: '='
  },
  templateUrl: 'track.html',
  controllerAs: 'track'
}

angular
  .module('app')
  .component('topTracks', TopTracks)