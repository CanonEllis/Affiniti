import angular from 'angular';
var myapp=angular.module('app', [require("angular-ui-router")])
.config(function($stateProvider, $urlRouterProvider)

{
	$urlRouterProvider.otherwise("/home");
	$stateProvider
	.state(
	  'userProfile',
	    {
		  url:"/login",
			templateUrl:"templates/userProfile.html",
		    controller:"userCtrl"
		}
	
	)
	.state(
	  'about',
	   {
		 url:"/instruction",
		 templateUrl:"templates/aboutUS.html",
		 controller:"aboutCtrl"
		}
	)
	.state(
		'landing',
		{
			url:"^/home",
			templateUrl:"templates/landingpage.html",
			controller:"LandingCtrl"
		}
	)
});
myapp.controller('AppCtrl',function($scope,$state){
	
	$scope.about=function()
	{
		$state.go("about");
	}
	$scope.landing=function()
	{
		$state.go("landing");
	}
	$scope.userProfile=function()
	{
		$state.go("userProfile");
	}
})
.controller('HomeCtrl',function($state,$scope,$http){
	
	$scope.firstname = "Stranger";
	$scope.lastname ="!";
	$scope.Userpage = function()
	{
	$http({
				method: 'GET',
				url: 'http://private-6ef9df-affiniti.apiary-mock.com/login',
				params:{
				// name: $scope.name,
				 				
				}
				}).then(function successCallback(response){
						//	$scope.firstname = response.firstName;
							// $scope.lastname = response.LastName;
							
							 // $scope.res="Good";
								});
	}
	});