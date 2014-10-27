/**
 * Created by Sunday on 22/10/14.
 */
app.controller('ViewGiftCtrl', ['$scope','$location', 'gift',
    function($scope, $location, gift) {
        /************************model**************************/
        $scope.gift = {
            id:1,
            hasPic:true,
            sponsor:{
                avatar:'http://f11.topit.me/l/201003/28/12697715175838.jpg',
                name:'坑小爱坑小爱',
                total:50,
                count:1,
                posttime:'10:30 AM'
            },
            status:1,
            desc:'wwwwwwwwwwwwwwwwwda大大大大大大大大大大大的顶顶顶顶顶顶顶顶顶顶的顶顶顶顶顶顶顶顶顶顶的顶顶顶顶顶顶顶顶顶顶大大大大大大大大大大大的顶顶顶顶顶顶顶顶顶顶的顶顶顶顶顶顶顶顶顶顶的顶顶顶顶顶顶顶顶顶顶',
            imgList:[
                'http://f11.topit.me/l/201003/28/12697715175838.jpg',
                'http://f11.topit.me/l/201003/28/12697715175838.jpg'
            ],
            fundsList:[
                {
                    avatar:'http://f11.topit.me/l/201003/28/12697715175838.jpg',
                    name:'羽秋',
                    money:50,
                    hasComment:true,
                    desc:'谢谢谢谢',
                    commentList:[
                        {
                            from:'郑坚义',
                            to:'慕洛暄',
                            text:'萌萌哒~大大大大大大大大大大大的顶顶顶顶顶顶顶顶顶顶的顶顶顶顶顶顶顶顶顶顶的顶顶顶顶顶顶顶顶顶顶'
                        },
                        {
                            from:'郑坚义',
                            to:'慕洛暄',
                            text:'萌萌哒~大大大大大大大大大大大的顶顶顶顶顶顶顶顶顶顶的顶顶顶顶顶顶顶顶顶顶的顶顶顶顶顶顶顶顶顶顶'
                        },
                        {
                            from:'郑坚义',
                            to:'慕洛暄',
                            text:'萌萌哒~大大大大大大大大大大大的顶顶顶顶顶顶顶顶顶顶的顶顶顶顶顶顶顶顶顶顶的顶顶顶顶顶顶顶顶顶顶'
                        }
                    ],
                    time:'11:30 AM'
                },
                {
                    avatar:'http://f11.topit.me/l/201003/28/12697715175838.jpg',
                    name:'羽秋',
                    money:50,
                    hasComment:true,
                    desc:'sssssssssssss',
                    commentList:[
                        {
                            from:'郑坚义',
                            to:'慕洛暄',
                            text:'萌萌哒~'
                        }
                    ],
                    time:'11:30 AM'
                }
            ]
        };
        $scope.subName = function(name){
            if(name.length >= 5){
                name = name.substr(0, 4);
                return name + '...';
            }else{
                return name;
            }
        }
        /************************view**************************/

        /************************ctrl**************************/
        console.log($('.click-name'));
        setTimeout(function(){
            $('.click-name').click(function(e){
                console.log(999999);
                var userid = $(this).data('id');
                new CommentWindow({callback:function(userid){
                    console.log('comm', userid);
                }});
            });
        }, 50)

        $scope.showTip = function(){
            new TipWindow();
        }
        setTimeout(function(){
            FollowTip();
            DownloadTip();
        }, 50);
    }]);