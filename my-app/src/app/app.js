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
					Respon.success = "yes";
					Respon.password =pass;
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
					$state.go($state.current, {}, {reload: true});
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
		email:"",
		success:"no"
	 };
})
.factory('Project',function(){
	return{
	projectname:""
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
		
		if(Respon.success!="yes")
		{
			$state.go("login");
		}
		$scope.name = Respon.username;
		$scope.email = Respon.email;
		$scope.gonew = function()
		{
			$state.go("newproject");
		}
		$scope.changeusername=function()
		{
			$http({
				method:'POST',
				url: 'http://affiniti.us/profile',
				data: $.param({'newusername':$scope.changedname,'oldusername':$scope.name}),
				headers:{'Content-Type':'application/x-www-form-urlencoded'}
			}).then(function success(response){
				if(response.data["success"]=="yes")
				{
				   Respon.username = $scope.changedname;
				   $scope.name = Respon.username;
				}
				else{
					alert("somethingwrong");
				}
			}, function error(response){
				alert("Connection Fail")
			});
		}
		$scope.changepass=function()
		{
			$http({
				method:'POST',
				url: ' http://affiniti.us/profile',
				data: $.param({'newpass':$scope.changedpassword,'oldpass':$scope.oldpassword,'username':Respon.username}),
				headers:{'Content-Type':'application/x-www-form-urlencoded'}
			}).then(function success(response){
				if(response.data["success"]=="yes")
				{  
					Respon.password = $scope.changedpassword;
				}
				else{
					alert("somethingwrong");
				}
			}, function error(response){
				alert("Connection Fail")
			});
		}
		$scope.changeemail=function()
		{
			$http({
				method:'POST',
				url: ' http://affiniti.us/profile',
				data: $.param({'newemail':$scope.changedemail,'username':Respon.username}),
				headers:{'Content-Type':'application/x-www-form-urlencoded'}
			}).then(function success(response){
				if(response.data["success"]=="yes")
				{
					Respon.email = $scope.changedemail;
					$scope.email = $scope.changedemail;
				}
				else{
					alert("somethingwrong");
				}
			}, function error(response){
				alert("Connection Fail")
			});
		}
		
		
	})
	
	//end of userCtrl
	
	.controller('newprojectCtrl',function($state,$scope,User,Project){
		
		
		$scope.gostepone = function()
		{
			Project.projectname = $scope.projectname;
						$state.go("stepone");
		}
	})
	
	
	.controller('steponeCtrl',function($state,$scope,Project){
		$scope.projectname = Project.projectname;
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