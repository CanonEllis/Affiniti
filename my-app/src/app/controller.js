import angular from 'angular';
angular.module('Controllers',[])
.controller('LoginCtrl',function($state,$scope,$http){
	

})
.controller('HomeCtrl',function($state,$scope,$http){
	
	$scope.firstname = "Stranger";
	$scope.lastname ="!";
	$scope.Userpage = function()
	{
	$http({
				method: 'GET',
				url: 'affinity.us/users',
				params:{
				 name: $scope.name,
				 				
				}
				}).then(function successCallback(response){
							//$scope.firstname = response.firstName;
						//	 $scope.lastname = response.LastName;
							$scope.res = response;
								});
	}
	})	
})
.controller('AppCtrl',function($scope,$state){
	
	$scope.Instructions=function()
	{
		$state.go("instruction");
	}
	$scope.Home=function()
	{
		$state.go("home");
	}
	$scope.Login=function()
	{
		$state.go("login");
	}
});