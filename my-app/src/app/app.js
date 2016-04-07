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
		 url:"^/about",
		 templateUrl:"templates/aboutUS.html",
		 controller:"aboutCtrl"
		}
	)
	.state(
		'stepone',
		{
			url:"/stepone",
			templateUrl:"templates/stepOne.html",
			controller:"steponeCtrl"
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
	.state(
		'newproject',
		{
			url:"/newproject",
			templateUrl:"templates/NewProject.html",
			controller:"newprojectCtrl"
		}
	)
	.state(
		'steptwo',
		{
			url:"/steptwo",
			templateUrl:"templates/simple-frame.html",
			controller:"steptwoCtrl"
		}
	)
});
myapp.factory('User',function($http,$state,Respon){
	
	return {
		Login:function(name,pass)
		{
			
			return $http({
				method: 'POST',
				url: 'http://affiniti.us/login',
				data:  $.param({ 'username' : name, 'password' :pass}),
				headers:{'Content-Type':'application/x-www-form-urlencoded'}
			}).then(function success(response){
		       if(response.data["success"]=="yes")
		        {
					Respon.data = response.data;
					Respon.username = Respon.data["username"];
					Respon.email = Respon.data["email"];
					$state.go("userProfile");
				}
		       else{ alert(response.data["success"]);
			         //alert("wrong password or username");
			      }
			}, function error(response){
				
				alert("Connection Fail");
			});
		},
		SignUp:function(first,last,name,pass,email)
		{
			return $http({
				method:'POST',
				url: ' http://affiniti.us/login',
				data: $.param({'username':name,'password':pass,'first':first,'last':last,'email':email,'reemail':email}),
				headers:{'Content-Type':'application/x-www-form-urlencoded'}
			}).then(function success(response){
				if(response.data["success"]=="yes")
				{
					$state.go("login");
				}
				else{
					alert("somethingwrong");
				}
			}, function error(response){
				alert("Connection Fail")
			});
		}
		};
	
})
.factory('Respon',function(){
	return {
		data:{},
		username:"",
		password:"",
		email:""
	 };
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
		$state.go("login");
	}
})
.controller('LoginCtrl',function($state,$scope,$http,User){
	
	/*$scope.name = "jsmith";
    $scope.email= "someone@smu.edu"*/
	$scope.log = function()
	{
		
		User.Login($scope.username,$scope.password);
			//$state.go("userProfile");
								
	}
	$scope.register=function()
	{
		User.SignUp($scope.firstname,$scope.lastname,$scope.username,$scope.password,$scope.email);
	}
})
	.controller('userCtrl',function($state,$scope,$http,User,Respon){
		
		$scope.name = Respon.username;
		$scope.gonew = function()
		{
			$state.go("newproject");
		}
		
		
	})
	.controller('newprojectCtrl',function($state,$scope,User){
		
		$scope.gostepone = function()
		{
			$state.go("stepone");
		}
	})
	.controller('steponeCtrl',function($state,$scope){
		$scope.bulletpoints = [];
		$scope.bullet="";
		$scope.add= function()
		{
			
			if ($scope.bulletpoints.indexOf($scope.bullet)<0 && $scope.bullet!="")
			{
				$scope.bulletpoints.push($scope.bullet);
				$scope.bullet = "";
			}
			else {
		     $scope.bullet="";
			}
			
		}
		$scope.delete = function(b)
		{
		   $scope.bulletpoints.splice($scope.bulletpoints.indexOf(b),1);
		}
		
		$scope.gosteptwo=function()
		{
			$state.go("steptwo");
		}
	});