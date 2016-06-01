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
      });
      $urlRouterProvider.otherwise("/");
  })