var app = angular.module('myApp', []);
app.directive('helloWorld',function(){
	return {
		restrict: 'AE',
		replace: true,
		template: '<h3>Hello world</h3>'
	};
});