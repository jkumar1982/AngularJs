var app = angular.module('myApp', []);
app.directive('mainMenu',function(){
	return {
		restrict: 'ACE',
		replace: true,
		transclude: 'element',
		scope: true,
		template: [
			'<ul>',	
				'<li rel="{{menuItems.indexOf(item)}}">{{item.name}}</li>',
			'</ul>'
		].join(''),
		compile: function(elem, attr){
			var rpt = document.createAttribute('ng-repeat');
			rpt.value = attr.element;
			console.log(attr.element, elem);
			elem[0].children[0].attributes.setNamedItem(rpt);
			
			var link = function(scope, elem, attr){			
				console.log(elem.children('li'));
			}
			return link;
		}
	};
});

app.directive('mainMenu',function(){
	return {
		restrict: 'ACE',		
		scope: true,
		link: function(){console.log("link",arguments);},
		controller: function(){console.log("controller",arguments);}
	};
});

app.controller('mainMenuCtrl',function($scope){
	$scope.menuItems = [
		{"name": "aa"}, {"name":"bb"}, {"name":"cc"}
	];
});