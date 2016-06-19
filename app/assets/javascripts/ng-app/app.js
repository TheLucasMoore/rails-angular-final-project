angular
  .module('app', [
    'ui.router',
    'ngAnimate',
    'templates',
    'ngSanitize',
    'chart.js'
    ])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController as home'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about.html'
      })
      .state('charts', {
        url: '/charts',
        templateUrl: 'charts.html',
        controller: 'ChartsController as chart',
      })
      .state('userChart', {
        url: '/chart/:id',
        templateUrl: 'userChart.html',
        controller: 'UserChartController as user',
      })
      .state('login', {
        url: '/login',
        templateUrl: 'login.html',
        controller: 'LoginController as login',
      })
      .state('artists', { // INDEX PAGE
        url: '/artists',
        templateUrl: 'artists.html',
        controller: 'ArtistsController as artists',
      })
      .state('artist', { // SHOW PAGE
        url: '/artist/:id',
        templateUrl: 'artist.html',
        controller: 'ArtistController as artist',
      })
      .state('genres', { // INDEX PAGE
        url: '/genres',
        templateUrl: 'genres.html',
        controller: 'GenresController as genres',
      })
      .state('genre', { // SHOW PAGE
        url: '/genre/:id',
        templateUrl: 'genre.html',
        controller: 'GenreController as genre',
      })
      .state('genres.list', { // NESTED PAGE
        url: '/list',
        templateUrl: 'genres.list.html'
      });
      $urlRouterProvider.otherwise("/");
  })