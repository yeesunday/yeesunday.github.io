/**
 * Created by Sunday on 25/10/14.
 */
app.controller('WithdrawCtrl', ['$scope','gift','$location',
    function($scope, gift, $location) {
        $scope.gift = gift;
        $scope.withdraw = function(){
//            $scope.$apply($location.path('withdraw/' + $scope.gift.id + '/success'));
//            $scope.$apply();
            $location.path('withdraw/1/success');
        }
    }]);