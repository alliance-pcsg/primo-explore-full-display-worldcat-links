angular.module('fulldisplay-worldcat', []).component('prmFullViewServiceContainerAfter', {
  bindings: { parentCtrl: '<' },
  controller: function controller($scope, $element, fulldisplay_worldcat_links) {
    this.$onInit = function () {


      var rootScope = $scope.$root;
      var uSMS = rootScope.$$childHead.$ctrl.userSessionManagerService;
      var jwtData = uSMS.jwtUtilService.getDecodedToken();
      var group = jwtData.userGroup;
      if (group !="GUEST"){group=parseInt(group);}
      console.log(jwtData);

      //$scope.wcDisplay = true; /* default hides template */
      //$scope.imagePath=oadoiOptions.imagePath;
      //var email=oadoiOptions.email;
      var section = $scope.$parent.$ctrl.service.scrollId;
      //var obj=$scope.$ctrl.parentCtrl.item.pnx.addata;
    //  console.log($scope);
      console.log(fulldisplay_worldcat_links.length);

      if (section == "getit_link1_0") {

        console.log($element);
        $scope.wcDisplay = true;
        console.log($scope);
        console.log($scope.$parent.$parent.$parent.$parent.$parent.$parent.$ctrl.item);
        var oclc=$scope.$parent.$parent.$parent.$parent.$parent.$parent.$ctrl.item.pnx.display.lds02[0];
        console.log(oclc);

        //https://watzek.on.worldcat.org/search?queryString=no:982091451
        $scope.$watch('$parent.$parent.$parent.$parent.$parent.$parent.$ctrl.item.delivery.availability[0]', function (newValue, oldValue, scope) {
          var avail=$scope.$parent.$parent.$parent.$parent.$parent.$parent.$ctrl.item.delivery.availability[0];
          console.log(avail);
          console.log($scope.$parent.$parent.$parent.$parent.$parent.$parent.$ctrl.item);

            if (newValue=="does_not_exist_in_my_institution_unavailable"){
              var verdict= true;
            }

            $scope.showIt=function(){
              return verdict;
            }
            //worldCatLinks
            var html="";
            var arrayLength = fulldisplay_worldcat_links.length;
            var n=0;
            for (var i = 0; i < arrayLength; i++) {

                var dt=fulldisplay_worldcat_links[i]["displayText"];
                var dl=fulldisplay_worldcat_links[i]["link"];
                var gr=fulldisplay_worldcat_links[i]["groups"];
                console.log(gr);
                console.log(group);
                var check = gr.indexOf(group);
                console.log(check);



                if (group=="GUEST" || check > -1){
                  if (n>0){html+=" | ";}
                  var link=dl+"search?queryString=no:"+oclc;
                  html += "<a href='"+link+"' target='_blank'>"+dt+"</a>";
                  n++;
                }

            }
            $scope.worldCatLinks=html;

        }, true);

      } else {
        $scope.oaDisplay = false;
      }
    };
  },
  template: '<div ng-show="showIt()"><h3 class="medium-uppercase-bold">Check WorldCat</h3><p style="font-size:75%;" >If Summit borrowing is unavailaible for this title, follow a link below to request via Interlibrary Loan:</p><p ng-bind-html="worldCatLinks"></p></div>'
});


app.value('fulldisplay_worldcat_links', [{
    displayText: "Boley Library Worldcat",
    link: "https://lewisclarklaw.on.worldcat.org/",
    groups: [5,35,39,45]
}, {
    displayText: "Watzek Library Worldcat",
    link: "https://watzek.on.worldcat.org/",
    groups: [0, 1, 2, 3]
}]);
