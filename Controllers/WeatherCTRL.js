// INITILIZE CONTROLLER
// ============================================================
angular.module("DashboardApp")
  .controller("WeatherCTRL", function($scope, WeatherService) {

    // VARIABLES
    // ============================================================
   //  $scope.user = 'user';

    // FUNCTIONS
    // ============================================================
    WeatherService.getLocation()
        .then(function(rezLoc) {
   	 	      $scope.location = rezLoc.data;

			WeatherService.getForecast($scope.location.region, $scope.location.city).then(function(response){
				$scope.forecast = response.data;
				console.log($scope.forecast)
			})
		});

// install if else logic here for UV index calculation. https://www.epa.gov/sunsafety/uv-index-scale-0



  });
