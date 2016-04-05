import angular from 'angular';
var myapp=angular.module('app', [require("angular-ui-router")])
.config(function($stateProvider, $urlRouterProvider)

{
	$urlRouterProvider.otherwise("/login");
	$stateProvider
	.state(
	  'userProfile',
	    {
		  url:"/userProfile",
			templateUrl:"templates/userProfile.html",
		    controller:"userCtrl"
		}
	
	)
	.state(
	  'about',
	   {
		 url:"/about",
		 templateUrl:"templates/aboutUS.html",
		 controller:"aboutCtrl"
		}
	)
	.state(
		'landing',
		{
			url:"^/landing",
			templateUrl:"templates/landingpage.html",
			controller:"LandingCtrl"
		}
	)
	.state(
		'login',
		{
			url:"^/login",
			templateUrl:"templates/login.html",
			controller:"LoginCtrl"
		}
	)
});
myapp.factory('User',function(){
	return {data:{}};
})
.controller('AppCtrl',function($scope,$state){
	
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
	$scope.login=function()
	{
		$state.go("login")
	}
})
.controller('LoginCtrl',function($state,$scope,$http,User){
	/*$scope.name = "jsmith";
    $scope.email= "someone@smu.edu"
	$scope.log = function()
	{
		
			$http({
				method: 'GET',
				url: 'http://private-d095eb-affiniti.apiary-mock.com/users/jsmith',
				params:{
				}
				}).then(function successCallback(response){
						//	$scope.firstname = response.firstName;
							// $scope.lastname = response.LastName;
							
							User.data = response.data;
							
							if(User.data["password"]==$scope.password)
							 {$state.go("userProfile");}
							else {alert(User.data["password"])}
							
							 // $scope.res="Good"
								}, function errorCallback(response){
							
								
								});
	}*/
	})
	.controller('userCtrl',function($state,$scope,$http,User){
		
		$scope.name = "jsmith";
		$scope.email="some@smu.edu"
		if(User.data!= null)
		{
			$scope.name = User.data["username"];
			$scope.email = User.data["email"];
		}
		
		
		
	});