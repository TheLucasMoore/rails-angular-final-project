function HomeController(LastfmService) {
  this.query = '';

  this.submit = function() {
    var query = this.query;

    LastfmService
      .searchFor(query)
      .then(function(resp) {
        this.data = resp.data
        this.artist = resp.data.results.artistmatches.artist[0].name
        this.listeners = resp.data.results.artistmatches.artist[0].listeners
        console.log(this.artist, this.listeners);
      })
  }
}


angular
  .module('app')
  .controller('HomeController', HomeController)