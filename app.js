var app = angular.module("DashboardApp", ["ui.router"])
// CONFIG
// ============================================================
.config(function($stateProvider, $urlRouterProvider) {

  // INITILIZE STATES
  // ============================================================
  $stateProvider

    // HOME STATE
    .state('home', {
      url: '/home',
      templateUrl: './HTML/Home.html',
      controller: 'HomeCTRL'
    })


	 // HOME STATE
	 .state('weather', {
	   url: '/weather',
	   templateUrl: './HTML/weather.html',
	   controller: 'WeatherCTRL'
	 });



  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/home');
});
