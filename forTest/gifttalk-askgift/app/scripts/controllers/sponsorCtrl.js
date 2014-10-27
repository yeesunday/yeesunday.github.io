/**
 * Created by Sunday on 23/10/14.
 */
app.controller('SponsorCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.formData = {};
        $scope.processForm = function(){
            $http({
                method  : 'POST',
                url     : Server.sponsor,
                data    : $.param($scope.formData),
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
                .success(function(data) {
                    console.log(data);

//                    if (!data.success) {
//                    } else {
//                    }
                });
        };
    }]);