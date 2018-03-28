testApp.config(function($stateProvider, $urlRouterProvider,$locationProvider){
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: "main/home/home.html",
    controller: 'homeCtrl',
    controllerAs: 'vm'
  })
  $urlRouterProvider.otherwise("home");

});
