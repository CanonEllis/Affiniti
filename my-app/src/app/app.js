import angular from 'angular';

angular.module('app', [require("angular-ui-router")])
.config(function($stateProvider, $urlRouterProvider)

{
	$urlRouterProvider.otherwise("/state1");
	$stateProvider
	.state('state1',{url:"/state1",template:"Adasd"})
	.state('state2',{url:"/state2",template:"Asdasd"})
});