import angular from 'angular';
var myapp=angular.module('app', [require("angular-ui-router")])
.config(function($stateProvider, $urlRouterProvider)

{
	$urlRouterProvider.otherwise("/home");
	$stateProvider
	.state(
	  'login',
	    {
		  url:"/login",
			templateUrl:"templates/login.html",
		    controller:"LoginCtrl"
		}
	
	)
	.state(
	  'instruction',
	   {
		 url:"/instruction",
		 templateUrl:"templates/instruction.html",
		 controller:"SignupCtrl"
		}
	)
	.state(
		'home',
		{
			url:"^/home",
			templateUrl:"templates/home.html",
			controller:"HomeCtrl"
		}
	)
});
myapp.controller('AppCtrl',function($scope,$state){
	
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
})