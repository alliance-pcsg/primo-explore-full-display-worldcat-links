angular
  .module('fulldisplay-worldcat', [])
  .component('prmFullViewServiceContainerAfter', {
  bindings: { parentCtrl: '<' },
    controller: function controller($scope,  $element) {
        this.$onInit = function() {
        	$scope.wcDisplay=false; /* default hides template */
          //$scope.imagePath=oadoiOptions.imagePath;
          //var email=oadoiOptions.email;
        	var section=$scope.$parent.$ctrl.service.scrollId;
        	//var obj=$scope.$ctrl.parentCtrl.item.pnx.addata;


    				if (section=="getit_link1_0"){

                  $scope.wcDisplay=true;
                  $element.children().removeClass("ng-hide"); /* initially set by $scope.oaDisplay=false */
                  //$scope.oaClass="ng-show";
  
    				}
    				else{$scope.oaDisplay=false;}

        };

    },
  template: '<div ng-show="{{wcDisplay}}"><p >hello!</p></div>'
});
