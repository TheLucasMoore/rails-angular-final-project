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
        templateUrl: 'about.html',
        controller: 'StaticController as static',
      })
      .state('charts', {
        url: '/charts',
        templateUrl: 'charts.html',
        controller: 'ChartsController as chart',
      })
      .state('login', {
        url: '/login',
        templateUrl: 'login.html',
        controller: 'LoginController as login',
      })
      .state('artists', {
        url: '/artists',
        templateUrl: 'artists.html',
        controller: 'ArtistsController as artists',
      })
      .state('genres', {
        url: '/genres',
        templateUrl: 'genres.html',
        controller: 'GenresController as genres',
      });
      $urlRouterProvider.otherwise("/");
  })