/**
 * Created by Sunday on 20/10/14.
 */
'use strict';
var app = angular.module('askgift',
    ['ngRoute', 'askgift.directives', 'askgift.services']);
Mock.mockjax(app);

//app.directive("ngFileSelect",function(){
//    return {
//        link: function($scope,el){
//            el.bind("change", function(e){
//                $scope.file = (e.srcElement || e.target).files[0];
//                console.log($scope.file, 222);
//                $scope.getFile();
//            })
//        }
//    }
//})

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('', {
            controller: 'GiftListCtrl',
            resolve: {
                gifts: ["MultiGiftLoader", function(MultiGiftLoader) {
                    return MultiGiftLoader();
                }]
            },
            templateUrl:'views/giftList.html'
        }).when('/edit/:giftId', {
            controller: 'EditCtrl',
            resolve: {
                gift: ["GiftLoader", function(GiftLoader) {
                    return GiftLoader();
                }]
            },
            templateUrl:'views/recipeForm.html'
        }).when('view/:giftId', {
            controller: 'ViewGiftCtrl',
            resolve: {
                gift: ["GiftLoader", function(GiftLoader) {
                    return GiftLoader();
                }]
            },
            templateUrl:'views/viewGift.html'
        }).when('new', {
            controller: 'NewGiftCtrl',
            templateUrl:'views/newGift.html'
        }).when('sponsor/:giftId', {
            controller: 'SponsorCtrl',
            templateUrl:'views/sponsor.html'
        }).when('sponsor/:giftId/success', {
//            controller: 'SponsorCtrl',
            templateUrl:'views/sponsorSuccess.html'
        }).when('withdraw/:giftId', {
            resolve: {
                gift: ["GiftLoader", function(GiftLoader) {
                    return GiftLoader();
                }]
            },
            controller: 'WithdrawCtrl',
            templateUrl:'views/withdraw.html'
        }).when('withdraw/:giftId/success', {
//            controller: 'SponsorCtrl',
            templateUrl:'views/withdrawSuccess.html'
        }).otherwise({redirectTo:''});
}]);