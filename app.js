(function () {
'use strict';

angular.module('DIApp',[])

.controller('DIController',DIController);
function DIController ($scope,$filter){
  $scope.name="Poo";
  $scope.upper =function(){
    var uppCase = $filter('uppercase');
    $scope.name = uppCase($scope.name);
  };
}

})();
