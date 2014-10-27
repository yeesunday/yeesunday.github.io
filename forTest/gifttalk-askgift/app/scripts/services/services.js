'use strict';

var services = angular.module('askgift.services',
    ['ngResource']);

services.factory('Gift', ['$resource',
    function($resource) {
        return $resource(Server.allList + '/:id', {id: '@id'},
                        {'query': {method: 'GET', isArray: false}}
        );
    }]);

services.factory('MultiGiftLoader', ['Gift', '$q',
    function(Gift, $q) {
        return function() {
            var delay = $q.defer();
            Gift.query(function(gifts) {
                delay.resolve(gifts);
            }, function() {
                delay.reject('Unable to fetch gifts');
            });
            return delay.promise;
        };
}]);

services.factory('GiftLoader', ['Gift', '$route', '$q',
    function(Gift, $route, $q) {
    return function() {
        var delay = $q.defer();
//        console.log('GiftLoader', $route.current.params);
        Gift.get({id: $route.current.params.giftId}, function(gift) {
            console.log(gift);
            delay.resolve(gift);
        }, function() {
            delay.reject('Unable to fetch gift '  + $route.current.params.giftId);
        });
        return delay.promise;
    };
}]);
