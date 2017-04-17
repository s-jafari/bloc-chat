(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
      enabled: true,
      requireBase: false
    });
/* Example code below:  
    $stateProvider
      .state('landing', {
        url: '/',
        controller: 'LandingCtrl as landing',
        templateUrl: '/templates/landing.html'
      })
      .state('album', {
        url: '/album',
        controller: 'AlbumCtrl as album',
        templateUrl: '/templates/album.html'
      })
      .state('collection', {
        url: '/',
        controller: 'CollectionCtrl as collection',
        templateUrl: '/templates/collection.html'
      });
*/  
  }

  angular
    .module('blocChat', ['ui.router', 'firebase'])
    .config(config);
})();