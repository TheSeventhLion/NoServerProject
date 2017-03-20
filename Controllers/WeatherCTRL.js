// INITILIZE CONTROLLER
// ============================================================
angular.module("DashboardApp")
  .controller("WeatherCTRL", function($scope, WeatherService) {

    // VARIABLES
    // ============================================================
   //  $scope.user = 'user';

    // FUNCTIONS
    // ============================================================
    WeatherService.getLocation().then(function(rezLoc) {
   	 	$scope.location = rezLoc.data;

			WeatherService.getForecast($scope.location.region, $scope.location.city).then(function(response){
				$scope.forecast = response.data;
				console.log($scope.forecast)
			})
		});




  });
