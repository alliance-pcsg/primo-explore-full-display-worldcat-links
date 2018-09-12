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

        console.log($element);
        $scope.wcDisplay = true;
        console.log($scope);
        console.log($scope.$parent.$parent.$parent.$parent.$parent.$parent.$ctrl.item.delivery);

        $scope.$watch('$parent.$parent.$parent.$parent.$parent.$parent.$ctrl.item.delivery.availability[0]', function (newValue, oldValue, scope) {
          var avail=$scope.$parent.$parent.$parent.$parent.$parent.$parent.$ctrl.item.delivery.availability[0];
          console.log(avail);
            if (newValue=="does_not_exist_in_my_institution_unavailable"){
              var verdict= true;
            }

            $scope.showIt=function(){
              return verdict;
            }

        }, true);



        //console.log(avail);

        $element.children().removeClass("ng-hide"); /* initially set by $scope.oaDisplay=false */
        //$scope.oaClass="ng-show";
      } else {
        $scope.oaDisplay = false;
      }
    };
  },
  template: '<div ng-show="showIt()"><h3 class="medium-uppercase-bold">Check WorldCat</h3><p style="font-size:75%;">If Summit borrowing is unavailaible for this title, follow a link below to request via Interlibrary Loan:</p></div>'
});
