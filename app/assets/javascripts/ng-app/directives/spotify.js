function spotify() {
  return {
    templateUrl: 'spotify.html',
    scope: {
      info: '='
    },
    controller: SpotifyController,
    controllerAs: 'info',
  }
}

angular
  .module('app')
  .directive('spotify', spotify)