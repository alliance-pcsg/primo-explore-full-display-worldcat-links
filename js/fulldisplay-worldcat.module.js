angular.module('fulldisplay-worldcat', []).component('prmFullViewServiceContainerAfter', {
  bindings: { parentCtrl: '<' },
  controller: function controller($scope, $element) {
    this.$onInit = function () {


      //$scope.wcDisplay = true; /* default hides template */
      //$scope.imagePath=oadoiOptions.imagePath;
      //var email=oadoiOptions.email;
      var section = $scope.$parent.$ctrl.service.scrollId;
      //var obj=$scope.$ctrl.parentCtrl.item.pnx.addata;


      if (section == "getit_link1_0") {
        $scope.wcDisplay = true;
        console.log($scope);
        console.log($scope.$parent.$parent.$parent.$parent.$parent.$parent.$ctrl.item.delivery);
        var avail=$scope.$parent.$parent.$parent.$parent.$parent.$parent.$ctrl.item.delivery.availability[0];

        $scope.$watch('$parent.$parent.$parent.$parent.$parent.$parent.$ctrl.item.delivery.availability[0]', function (newValue, oldValue, scope) {
          console.log(newValue);

            if (newValue=="does_not_exist_in_my_institution_unavailable"){
              $scope.wcDisplay = true;
              angular.copy(true, $scope.wcDisplay);
              $scope.oaClass="ng-show";
              unregister();



            }
            else{$scope.wcDisplay = false;}

            //...
        }, true);



        //console.log(avail);

        $element.children().removeClass("ng-hide"); /* initially set by $scope.oaDisplay=false */
        //$scope.oaClass="ng-show";
      } else {
        $scope.oaDisplay = false;
      }
    };
  },
  template: '<div ng-show="{{wcDisplay}}"><h3 class="medium-uppercase-bold">Check WorldCat</h3><p style="font-size:75%;">If Summit borrowing is unavailaible for this title, follow a link below to request via Interlibrary Loan:</p></div>'
});
