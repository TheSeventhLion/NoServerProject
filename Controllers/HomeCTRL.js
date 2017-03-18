// INITILIZE CONTROLLER
// ============================================================
angular.module("DashboardApp")
    .controller("HomeCTRL", function($scope, quoteService, nameService) {

        // VARIABLES
        // ============================================================
		  $scope.name = nameService.get("name") || ""

        // FUNCTIONS
        // ============================================================
		  //This gets my quote
        quoteService.getquote().then(function(response) {
			  // console.log('response: ', response);


            $scope.quote = response.data[0];
        	});

			//This sets up my clock

			function displayTime(){
				$scope.time = moment().format("h:mm:A")
				console.log($scope.time)

				var dayEvents= $scope.time.split(':');
				console.log(dayEvents);
				if(dayEvents[2] == 'PM'){
					if(dayEvents[0] < 6){
						$scope.period = "Good Afternoon, "
					}else{
						$scope.period = "Good Evening, "
					}
				}else{
						$scope.period = "Good Morning, "
				}

				$scope.$apply()
			}

			$scope.time = moment().format("h:mm:A")
			setInterval(displayTime,1000)
			console.log(moment().format)

			//This stores the value of the input

			$scope.addName = function(name){
				nameService.store("name" , name);
				$scope.name = name
			}






    });
