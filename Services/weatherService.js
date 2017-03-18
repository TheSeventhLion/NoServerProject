angular.module('DashboardApp').service('WeatherService', function($http) {

	this.getForecast = function() {
		return $http({
			url:'http://api.wunderground.com/api/2d34f5958a9c90b4/forecast/forecast10day/'+ lat + ',' + long+'/json',
			method: 'GET'
		}).then(function(rezForecast){
			return(rezForecast)
		})
	}

	this.getLocation = function(){
		return $http({
			url:'http://ip-api.com/json',
			method:'GET'
		}).then(function(rezLoc){
			return(rezLoc)
		})
	}

	


})
