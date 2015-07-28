describe('PasswordController', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('my name', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('MyName', { $scope: $scope });
    });

    it('check name', function() {
      expect($scope.name).toEqual('jayakumar');
    });
	
  });
});