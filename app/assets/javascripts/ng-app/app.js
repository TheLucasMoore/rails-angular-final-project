angular
  .module('app', [
    'ui.router',
    'ngAnimate',
    'templates'
    ])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'index.html',
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
      });
      $urlRouterProvider.otherwise("/");
  })