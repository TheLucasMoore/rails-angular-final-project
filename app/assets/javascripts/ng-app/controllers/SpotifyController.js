function SpotifyController($scope) {
  var audioObject = null;

  window.addEventListener('click', function (e) {
    var target = e.target;
    if (target !== null && target.classList.contains('img-responsive')) {
      if (target.classList.contains('playing')) {
          audioObject.pause();
      } else {
        if (audioObject) {
          audioObject.pause();
      }
      audioObject = new Audio(target.alt);
      audioObject.play();
      target.classList.add('playing');
      audioObject.addEventListener('ended', function () {
      target.classList.remove('playing');
    });

    audioObject.addEventListener('pause', function () {
    target.classList.remove('playing');
          });
        };
      }
  });
}

angular
  .module('app')
  .controller('SpotifyController', SpotifyController)