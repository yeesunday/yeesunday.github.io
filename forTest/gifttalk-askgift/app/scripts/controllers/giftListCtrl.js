/**
 * Created by Sunday on 24/10/14.
 */
app.controller('GiftListCtrl', ['$scope', 'gifts', '$location',
    function($scope, gifts, $location) {
        $scope.gifts = gifts;
        console.log(gifts);

        setTimeout(function(){
//            $('.gi-desc')[0].mlellipsis(3);
//            console.log($('.gi-desc')[0], 11111);
//            $('.gi-desc').hide();
        }, 50)

        $scope.goWithdraw = function(giftId){
            new ConfirmWindow({
                content:'提前取款将结束此次求礼物活动，是否继续？',
                callback: function(){
                    console.log(1111);
//                    location.href = AppUrl + '/withdraw/' + giftId;
//                    setTimeout(function(){
                        $scope.$apply($location.path('withdraw/' + giftId));
//                    }, 50);
                }
            });
        }
    }]);