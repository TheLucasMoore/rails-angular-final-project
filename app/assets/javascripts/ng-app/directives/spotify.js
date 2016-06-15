function spotify() {
  return {
    templateUrl: 'directives/spotify.html',
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