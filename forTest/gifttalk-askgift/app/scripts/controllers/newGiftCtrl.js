/**
 * Created by Sunday on 21/10/14.
 */
app.controller('NewGiftCtrl', ['$scope', '$location', 'Gift', 'fileReader',
    function($scope, $location, Gift, fileReader) {
        console.log(222222);
        $scope.gift = new Gift({
//            ingredients: [ {} ]
        });

        $scope.save = function() {
            $scope.gift.$save(function(gift) {
                $location.path('/view/' + gift.id);
            });
        };

//        $scope.imgList = ['http://f11.topit.me/l/201003/28/12697715175838.jpg', 'http://f11.topit.me/l/201003/28/12697715175838.jpg',
//            'http://f11.topit.me/l/201003/28/12697715175838.jpg', 'http://f11.topit.me/l/201003/28/12697715175838.jpg',
//            'http://f11.topit.me/l/201003/28/12697715175838.jpg'
//        ];
        $scope.imgList = [];

        //图片上传
        $scope.selectFile = function(){
//            console.log(222222222434343);
            $('#upload-input').click();
        };
        $scope.getFile = function () {
            $scope.progress = 0;
            fileReader.readAsDataUrl($scope.file, $scope)
                .then(function(result) {
                    var _b = new Object();
                    _b.src = result;
                    _b.progress = 0;
                    $scope.imgList.push(_b);
                });
        };
    }]);