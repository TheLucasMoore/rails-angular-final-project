function ArtistController($scope, $stateParams, BackEndService, LastfmService) {
  var ctrl = this;
  ctrl.id = $stateParams.id;

  var Genre = function(name) {
    this.name = name
  }

  var Comment = function(uid, comment) {
    this.uid = uid;
    this.comment = comment;
  }

  var init = function() {
    BackEndService
      .getArtist(ctrl.id)
      .then(function(response) {
        var artist = (response.data)
        var name = artist.name.replace(' ','%20')
        ctrl.name = artist.name 
        ctrl.image = artist.image
        ctrl.link = artist.link
        ctrl.streams = artist.streams
        ctrl.earnings = (artist.streams * 0.007).toLocaleString()
        ctrl.uri = artist.uri
        ctrl.genres = artist.genres
        ctrl.comments = artist.artist_users.slice(1);

      LastfmService
          .getArtist(name)
          .then(function(response) {
            ctrl.bio = response.data.artist.bio.summary
      })
    })
  };

  $scope.sendGenre = function() {
    var data = JSON.stringify({id: ctrl.id, genre: $scope.newGenre})
    var temp = new Genre($scope.newGenre)
    BackEndService
      .postGenre(data)
      .success(function(response) {
        ctrl.genres.push(response);
        // $('ul#genres').append('<li>' + $scope.newGenre + '</li>')
      })
  }

  $scope.sendComment = function() {
    var data = JSON.stringify({artist_id: ctrl.id, comment: $scope.newComment})
    var temp = new Comment("You just commented", $scope.newComment)

    BackEndService
      .postComment(data)
      .success(function(response) {
        console.log(response);
        ctrl.comments.push(temp)
      })
      .error(function(response) {
        alert("Log in to comment!")
      });
        // $('.list-group').append('<li class="list-group-item"><strong>You just said: </strong> ' + $scope.newComment + '</li>')
  }

  init()

};

ArtistController.$inject = ['$scope', '$stateParams', 'BackEndService', 'LastfmService'];

angular
  .module('app')
  .controller('ArtistController', ArtistController)