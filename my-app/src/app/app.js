import angular from 'angular';
/*! angular-base64-upload - v0.1.19
* https://github.com/adonespitogo/angular-base64-upload
* Copyright (c) Adones Pitogo <pitogo.adones@gmail.com> [March 13, 2016]
* Licensed MIT */

!function(a,b){"use strict";a._arrayBufferToBase64=function(b){for(var c="",d=new Uint8Array(b),e=d.byteLength,f=0;e>f;f++)c+=String.fromCharCode(d[f]);return a.btoa(c)};var c=a.angular.module("naif.base64",[]);c.directive("baseSixtyFourInput",["$window","$q",function(a,b){for(var c={onChange:"&",onAfterValidate:"&",parser:"&"},d=["onabort","onerror","onloadstart","onloadend","onprogress","onload"],e=d.length-1;e>=0;e--){var f=d[e];c[f]="&"}return{restrict:"A",require:"ngModel",scope:c,link:function(c,e,f,g){function h(){for(var c=t.length-1;c>=0;c--){var d=new a.FileReader,e=t[c],f={},g=[];f.filetype=e.type,f.filename=e.name,f.filesize=e.size,t[c].deferredObj=b.defer(),g.push(t[c].deferredObj.promise),b.all(g).then(n),k(d,e,f),d.readAsArrayBuffer(e)}}function i(a){f.onChange&&c.onChange()(a,t)}function j(a){if(f.onAfterValidate){for(var d=[],e=t.length-1;e>=0;e--)d.push(t[e].deferredObj.promise);b.all(d).then(function(){c.onAfterValidate()(a,u,t)})}}function k(a,b,e){for(var g=d.length-1;g>=0;g--){var h=d[g];f[h]&&"onload"!==h&&l(h,c[h],a,b,e)}a.onload=m(a,b,e)}function l(a,b,c,d,e){c[a]=function(a){b()(a,c,d,t,u,e)}}function m(d,e,g){return function(h){var i,j=h.target.result;g.base64=a._arrayBufferToBase64(j),i=f.parser?b.when(c.parser()(e,g)):b.when(g),i.then(function(a){u.push(a),e.deferredObj.resolve()}),f.onload&&c.onload()(h,d,e,t,u,g)}}function n(){var a=f.multiple?u:u[0];g.$setViewValue(a),q(a),r(a),o(a),p(a),s(a)}function o(a){if(f.maxnum&&f.multiple&&a){var b=a.length<=parseInt(f.maxnum);g.$setValidity("maxnum",b)}return a}function p(a){if(f.minnum&&f.multiple&&a){var b=a.length>=parseInt(f.minnum);g.$setValidity("minnum",b)}return a}function q(a){var b=!0;if(f.maxsize&&a){var c=1e3*parseFloat(f.maxsize);if(f.multiple)for(var d=0;d<a.length;d++){var e=a[d];if(e.filesize>c){b=!1;break}}else b=a.filesize<=c;g.$setValidity("maxsize",b)}return a}function r(a){var b=!0,c=1e3*parseFloat(f.minsize);if(f.minsize&&a){if(f.multiple)for(var d=0;d<a.length;d++){var e=a[d];if(e.filesize<c){b=!1;break}}else b=a.filesize>=c;g.$setValidity("minsize",b)}return a}function s(a){var b,c,d,e=!0;if(f.accept&&(c=f.accept.trim().replace(/[,\s]+/gi,"|").replace(/\./g,"\\.").replace(/\/\*/g,"/.*"),b=new RegExp(c)),f.accept&&a){if(f.multiple)for(var h=0;h<a.length;h++){var i=a[h];if(d="."+i.filename.split(".").pop(),e=b.test(i.filetype)||b.test(d),!e)break}else d="."+a.filename.split(".").pop(),e=b.test(a.filetype)||b.test(d);g.$setValidity("accept",e)}return a}if(g){var t=[],u=[];e.on("change",function(a){a.target.files.length&&(u=[],u=angular.copy(u),t=a.target.files,h(),i(a),j(a))}),g.$isEmpty=function(a){return!a||(angular.isArray(a)?0===a.length:!a.base64)},c._clearInput=function(){e[0].value=""},c.$watch(function(){return g.$viewValue},function(a,b){g.$isEmpty(b)||g.$isEmpty(a)&&c._clearInput()})}}}}])}(window);
//# sourceMappingURL=angular-base64-upload.min.js.map
/**
 * angular-drag-and-drop-lists v1.4.0
 *
 * Copyright (c) 2014 Marcel Juenemann marcel@juenemann.cc
 * Copyright (c) 2014-2016 Google Inc.
 * https://github.com/marceljuenemann/angular-drag-and-drop-lists
 *
 * License: MIT
 */
angular.module("dndLists",[]).directive("dndDraggable",["$parse","$timeout","dndDropEffectWorkaround","dndDragTypeWorkaround",function(e,n,r,t){return function(a,d,o){d.attr("draggable","true"),o.dndDisableIf&&a.$watch(o.dndDisableIf,function(e){d.attr("draggable",!e)}),d.on("dragstart",function(i){return i=i.originalEvent||i,"false"==d.attr("draggable")?!0:(i.dataTransfer.setData("Text",angular.toJson(a.$eval(o.dndDraggable))),i.dataTransfer.effectAllowed=o.dndEffectAllowed||"move",d.addClass("dndDragging"),n(function(){d.addClass("dndDraggingSource")},0),r.dropEffect="none",t.isDragging=!0,t.dragType=o.dndType?a.$eval(o.dndType):void 0,i._dndHandle&&i.dataTransfer.setDragImage&&i.dataTransfer.setDragImage(d[0],0,0),e(o.dndDragstart)(a,{event:i}),void i.stopPropagation())}),d.on("dragend",function(i){i=i.originalEvent||i
var f=r.dropEffect
a.$apply(function(){switch(f){case"move":e(o.dndMoved)(a,{event:i})
break
case"copy":e(o.dndCopied)(a,{event:i})
break
case"none":e(o.dndCanceled)(a,{event:i})}e(o.dndDragend)(a,{event:i,dropEffect:f})}),d.removeClass("dndDragging"),n(function(){d.removeClass("dndDraggingSource")},0),t.isDragging=!1,i.stopPropagation()}),d.on("click",function(n){o.dndSelected&&(n=n.originalEvent||n,a.$apply(function(){e(o.dndSelected)(a,{event:n})}),n.stopPropagation())}),d.on("selectstart",function(){this.dragDrop&&this.dragDrop()})}}]).directive("dndList",["$parse","$timeout","dndDropEffectWorkaround","dndDragTypeWorkaround",function(e,n,r,t){return function(a,d,o){function i(e,n,r){var t=E?e.offsetX||e.layerX:e.offsetY||e.layerY,a=E?n.offsetWidth:n.offsetHeight,d=E?n.offsetLeft:n.offsetTop
return d=r?d:0,d+a/2>t}function f(){var e
return angular.forEach(d.children(),function(n){var r=angular.element(n)
r.hasClass("dndPlaceholder")&&(e=r)}),e||angular.element("<li class='dndPlaceholder'></li>")}function l(){return Array.prototype.indexOf.call(D.children,v)}function g(e){if(!t.isDragging&&!y)return!1
if(!c(e.dataTransfer.types))return!1
if(o.dndAllowedTypes&&t.isDragging){var n=a.$eval(o.dndAllowedTypes)
if(angular.isArray(n)&&-1===n.indexOf(t.dragType))return!1}return o.dndDisableIf&&a.$eval(o.dndDisableIf)?!1:!0}function s(){return p.remove(),d.removeClass("dndDragover"),!0}function u(n,r,d,o){return e(n)(a,{event:r,index:d,item:o||void 0,external:!t.isDragging,type:t.isDragging?t.dragType:void 0})}function c(e){if(!e)return!0
for(var n=0;n<e.length;n++)if("Text"===e[n]||"text/plain"===e[n])return!0
return!1}var p=f(),v=p[0],D=d[0]
p.remove()
var E=o.dndHorizontalList&&a.$eval(o.dndHorizontalList),y=o.dndExternalSources&&a.$eval(o.dndExternalSources)
d.on("dragenter",function(e){return e=e.originalEvent||e,g(e)?void e.preventDefault():!0}),d.on("dragover",function(e){if(e=e.originalEvent||e,!g(e))return!0
if(v.parentNode!=D&&d.append(p),e.target!==D){for(var n=e.target;n.parentNode!==D&&n.parentNode;)n=n.parentNode
n.parentNode===D&&n!==v&&(i(e,n)?D.insertBefore(v,n):D.insertBefore(v,n.nextSibling))}else if(i(e,v,!0))for(;v.previousElementSibling&&(i(e,v.previousElementSibling,!0)||0===v.previousElementSibling.offsetHeight);)D.insertBefore(v,v.previousElementSibling)
else for(;v.nextElementSibling&&!i(e,v.nextElementSibling,!0);)D.insertBefore(v,v.nextElementSibling.nextElementSibling)
return o.dndDragover&&!u(o.dndDragover,e,l())?s():(d.addClass("dndDragover"),e.preventDefault(),e.stopPropagation(),!1)}),d.on("drop",function(e){if(e=e.originalEvent||e,!g(e))return!0
e.preventDefault()
var n,t=e.dataTransfer.getData("Text")||e.dataTransfer.getData("text/plain")
try{n=JSON.parse(t)}catch(d){return s()}var i=l()
return o.dndDrop&&(n=u(o.dndDrop,e,i,n),!n)?s():(n!==!0&&a.$apply(function(){a.$eval(o.dndList).splice(i,0,n)}),u(o.dndInserted,e,i,n),"none"===e.dataTransfer.dropEffect?"copy"===e.dataTransfer.effectAllowed||"move"===e.dataTransfer.effectAllowed?r.dropEffect=e.dataTransfer.effectAllowed:r.dropEffect=e.ctrlKey?"copy":"move":r.dropEffect=e.dataTransfer.dropEffect,s(),e.stopPropagation(),!1)}),d.on("dragleave",function(e){e=e.originalEvent||e,d.removeClass("dndDragover"),n(function(){d.hasClass("dndDragover")||p.remove()},100)})}}]).directive("dndNodrag",function(){return function(e,n,r){n.attr("draggable","true"),n.on("dragstart",function(e){e=e.originalEvent||e,e._dndHandle||(e.dataTransfer.types&&e.dataTransfer.types.length||e.preventDefault(),e.stopPropagation())}),n.on("dragend",function(e){e=e.originalEvent||e,e._dndHandle||e.stopPropagation()})}}).directive("dndHandle",function(){return function(e,n,r){n.attr("draggable","true"),n.on("dragstart dragend",function(e){e=e.originalEvent||e,e._dndHandle=!0})}}).factory("dndDragTypeWorkaround",function(){return{}}).factory("dndDropEffectWorkaround",function(){return{}});

var myapp=angular.module('app', [require("angular-ui-router"),"dndLists",'naif.base64'])
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
	.state(
		'stepthree',
		{
			url:"/stepthree",
			templateUrl:"templates/stepthree.html",
			controller:"stepthreeCtrl"
		}
	)
   .state(
    'finalview',
   {
	 url:"/finalview",
	 templateUrl:"templates/finalView.html",
	 controller:"finalViewCtrl"
	
   })
   .state(
	 'viewproject',
	{
		url:"/viewproject",
		templateUrl:"templates/viewproject.html",
		controller:"finalViewCtrl"
	})
	.state(
		'four',
		{
			url:"/four",
			templateUrl:"templates/four.html",
			controller:"fourCtrl"
		}
	)
	
});
myapp.factory('IMG',function($http,$state,Respon,Project)
{
	return {
		GetImg:function(username)
			{
				return $http({
					method: "POST",
					url:'http://affiniti.us/profpic',
					data: $.param({'username':username}),
					headers:{'Content-Type':'application/x-www-form-urlencoded'}
				}).then(function success(response){
				    
					if(response.data["success"]==="yes")
					{
					   Respon.img = response.data["profpic"];
					}
					else{alert("hmmm")}
				},function error(response){
					alert("failed");});
			},
		UpImg:function(username,img)
			{
				return $http({
					method:"PUT",
					url:'http://affiniti.us/profpic',
					data: $.param({'username':username,'profpic':img.base64}),
					headers:{'Content-Type':'application/x-www-form-urlencoded'}
				}).then(function success(response){
					
				},function error(response){
					alert("failed");
					});
			}
	};
});
myapp.factory('User',function($http,$state,Respon,Project,IMG){
	
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
					//Respon.data = response.data["projects"];
					Respon.data = $.map(response.data["projects"], function(value, index) {
						return [value];
					});					
					Respon.username = response.data["username"];
					Respon.email = response.data["email"];
					Respon.success = "yes";
					Respon.password =pass;
					Project.username = Respon.username;
					
					if(Respon.success=="yes")
					{
					      IMG.GetImg(Respon.username).then(function s(){$state.go("userProfile");});
						
					}
					
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
		},
	   Sub:function(d)
		{
			
		  	return $http({
			        method:'POST',
			        url: 'http://affiniti.us/final',
			        data:d,
			        headers:{'Content-Type':'application/json'}
					}).then(function success(response){
						 
					},function error(response){
						alert("somthingwrong");
					});
		},
		Delete:function(username,projectname)
		{
			return $http({
				method:'DELETE',
				url:'http://affiniti.us/delete',
				data: $.param({'username':username,'diagramname':projectname}),
				headers:{'Content-Type':'application/x-www-form-urlencoded'}
			}).then(function success(response){
				if(response.data.deleted!='yes')
				{
					alert(response.data);
				}
			},function error(response){});
		}
	};	
})
.factory('Respon',function(){
	return {
		data:{},
		username:"",
		password:"",
		email:"",
		success:"no",
		myimg:"",
		img:""
	
	 };
})
.factory('Project',function(){
	return{
	username:"",
	projectname:"",
	mainIdea:"",
	four:[],
	ideas:[],
	group:[],
	groups:[]
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
.controller('LoginCtrl',function($state,$scope,$http,User,Respon){
	
	
	$scope.log = function()
	{
	
		User.Login($scope.username,$scope.password);
								
	}
	$scope.register=function()
	{
		User.SignUp($scope.firstname,$scope.lastname,$scope.username,$scope.password,$scope.email);
	}
})
.controller('userCtrl',function($state,$scope,$http,User,Respon,Project,IMG){
		
	   
		if(Respon.success!="yes") $state.go("login");
        $scope.projects = Respon.data;
		$scope.name = Respon.username;
		$scope.email = Respon.email;
		$scope.img = Respon.img;
		$scope.changeimage = function()
		{
			IMG.UpImg($scope.name, $scope.myimg);
		    $scope.img = $scope.myimg.base64;
			
		}
			
		$scope.delete=function(project)
		{
			User.Delete(project.username,project.projectname);
			$scope.projects.splice($scope.projects.indexOf(project), 1);
		
		}
		$scope.view=function(project)
		{
			Project.projectname = project.projectname;
			Project.mainIdea = project.mainIdea;
			Project.ideas = project.ideas;
			Project.group = project.group;
			Project.groups = project.groups;
	
			$state.go('viewproject');
		}
		$scope.gonew = function()
		{
			$state.go("newproject");
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
			Project.mainIdea = $scope.mainIdea;
						$state.go("four");
		}
	})
	
	
	.controller('steponeCtrl',function($state,$scope,Project){
		$scope.mainIdea = Project.mainIdea;
		$scope.bulletpoints = [];
		$scope.bullet="";
		$scope.timeout = false;
		var total =10000;
		var s,m,c;
		function count()
		{  			
			m = parseInt(total/60000);
			s = total%60000;
			s = s/1000;
			if(s<10){s= "0"+s;}
		   if($scope.timeout==false) document.getElementById("remain").innerHTML="Your Time Remaining: "+m+":"+s;
			if(m<=0&&s<=0)
			{
				$scope.timeout=true;
				clearTimeout(c)
				$scope.$apply();	
				
			}
			total = total -1000;
		  if($scope.timeout == false) c=setTimeout(count, 1000);
		}
		count();
	   $scope.add= function()
		{
			if(event.keyCode==13){
			
			if ($scope.bulletpoints.indexOf($scope.bullet)<0 && $scope.bullet!="")
			{
				total=10000;
				$scope.timeout=false;
				clearTimeout(c);
				count();
				$scope.bulletpoints.push($scope.bullet);
				$scope.bullet = "";
			}
			else {
		     $scope.bullet="";
			}
			}
			
		}
		$scope.delete = function(b)
		{
		   $scope.bulletpoints.splice($scope.bulletpoints.indexOf(b),1);
		}
		
		$scope.gosteptwo=function()
		{
			$scope.timeout=true;
			clearTimeout(c);
			Project.ideas =$scope.bulletpoints;
			$state.go("steptwo");
		}
	})
	.controller('steptwoCtrl',function($state,$scope,Project){
		$scope.models = {
			selected: null,
			lists:[]
		};
        $scope.ideas = Project.ideas.concat();
		// Generate initial model
		$scope.models.lists.push({"name":"Original","l":$scope.ideas,"select":false});
        //alert(Project.ideas);
		// Model to JSON for demo purpose
		$scope.$watch('models', function(model) {
			$scope.modelAsJson = angular.toJson(model, true);
		}, true);	
		$scope.newgroup=function()
		{
			$scope.models.lists.push({"name":"NewGroup","l":[],"select":false});
		}
		$scope.changegroupname=function(list)
		{
			 list["select"]=true
		}
		$scope.confirm=function(list)
		{
			if(event.keyCode==13)
			{
			 list["select"]=false;
			}
			
		}	
		$scope.gostepthree=function()
		{
			Project.group = $scope.models.lists;
			$state.go("stepthree");
		}
		$scope.delete=function(list)
		{
			$scope.models.lists.splice($scope.models.lists.indexOf(list),1);
		}
		$scope.back=function()
		{
			window.history.back();
		}
	})
	.controller('stepthreeCtrl',function($state,$scope,Project)
	{
		$scope.models = {
			selected: null,
			lists:[]
		};
        $scope.group = Project.group.concat();
		// Generate initial model
		$scope.models.lists.push({"name":"Your Groups","l":$scope.group,"select":false});

		// Model to JSON for demo purpose
		$scope.$watch('models', function(model) {
			$scope.modelAsJson = angular.toJson(model, true);
		}, true);	
		$scope.newgroup=function()
		{
			$scope.models.lists.push({"name":"New Groups","l":[],"select":false});
		}
		$scope.changegroupname=function(list)
		{
			 list["select"]=true
		}
		$scope.confirm=function(list)
		{
			if(event.keyCode==13)
			{
			 list["select"]=false;
			}
			
		}	
		$scope.gofinal=function()
		{
			Project.groups = $scope.models.lists;
			$state.go("finalview");
		}
		$scope.delete=function(list)
		{
			$scope.models.lists.splice($scope.models.lists.indexOf(list),1);
		}
		$scope.back=function()
		{
			window.history.back();
		}		
	})
	.controller('finalViewCtrl',function($state,$scope,Project,User,Respon){
		$scope.groups = Project.groups;
		$scope.projectname=Project.projectname;
		$scope.mainIdea = Project.mainIdea;
		$scope.f = Project.four;
	
		$scope.back=function()
		{
			window.history.back();
		}
		$scope.sumb=function()
		{  
	
			
			User.Sub(JSON.stringify(Project));
			var p = {};
			angular.copy(Project,p);
			Respon.data.push(p);
			$state.go('userProfile');
		}
			})
	.controller('fourCtrl',function($state,$scope,Project,User){
		$scope.mainIdea =Project.mainIdea;
		/*$scope.timeout = false;
		var total =180000;
		var s,m,c;
		function count()
		{  			
			m = parseInt(total/60000);
			s = total%60000;
			s = s/1000;
			if(s<10){s= "0"+s;}
		   if($scope.timeout==false) document.getElementById("remain").innerHTML="Your Time Remaining: "+m+":"+s;
			if(m<=0&&s<=0)
			{
				$scope.timeout=true;
				clearTimeout(c)
				$scope.$apply();	
				
			}
			total = total -1000;
		  if($scope.timeout == false) c=setTimeout(count, 1000);
		}
		count();*/
		$scope.gostepone=function()
		{
			Project.four[0] = $scope.idea1;
			Project.four[1] = $scope.idea2;
			Project.four[2] = $scope.idea3;
			Project.four[3] = $scope.idea4;
			//$scope.timeout = true;
			$state.go("stepone");
		}
	});
	
	
	
	