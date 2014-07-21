var WIDTH = 480,
    HEIGHT = 800;

window.onload = function(){
    SG.init('levelContainer', WIDTH, HEIGHT);
    var sources = [
        {path:"./img/game_bg.jpg", name:"gamebg"},
        {path:"./img/menu_bg.jpg", name:"menubg"},
        {path:"./img/level_bg.png", name:"levelbg"},
        {path:"./img/lock.png", name:"lockbg"},
        {path:"./img/unlock.png", name:"unlockbg"},

        {path:"./img/menu_start.png", name:"startbtn"},
        {path:"./img/rank.png", name:"rankbtn"},
        {path:"./img/more.png", name:"morebtn"},
        {path:"./img/contribute.png", name:"contributebtn"},

        {path:"./img/heart.png", name:"heart"},
        {path:"./img/pre.png", name:"prebtn"},
        {path:"./img/nxt.png", name:"nxtbtn"}

    ]
    //执行图片预加载，加载完成后执行main
    SG.loadImg(sources, main);
//    main();
};
function main(){
    var curPage = 1,
        maxPage = 1,
        curNum = 7,
        maxNum = 9,
        levels = [],
        levelData = [{level:44, help: 5}, {level:55, help: 10}, {level:66, help: 0}],
        userId = -1;

    var rankBtn = new SG.Button('', '', 320, 0, 150, 70, SG.simg['rankbtn'].src, function(){
        window.location.href="rank.html";
    });
    var contributeBtn = new SG.Button('', '', 160, 707, 150, 60, SG.simg['contributebtn'].src, function(){
        window.location.href="contribute.html";
    });
    var moreBtn = new SG.Button('', '', 320, 700, 150, 70, SG.simg['morebtn'].src, function(){
//        window.location.href="rank.html";
    });
    var preBtn = new SG.Button('', '', 60, 600, 63, 77, SG.simg['prebtn'].src, function(){
        if(curPage > 1){
            curPage--;
        }
    });
    var nxtBtn = new SG.Button('', '', 360, 600, 63, 77, SG.simg['nxtbtn'].src, function(){
        if(curPage < maxPage){
            curPage++;
        }
    });
//    for(var i = 0; i < maxNum; i++){
//        levels[i] = new SG.Button('level' + i, '', 20 + 150*(i%3), 90 + 160*Math.floor(i/3), 140, 150, SG.simg['lockbg'].src, function(){
//            window.location.href="answer.html";
//        });
//        $('#level' + i).children(":first").after('<div id="helpHeart">' + levelData[i].help + '</div>');
//    }

    $('#pageCount').html(curPage + ' / ' + maxPage);
    for(var i = 0; i < levelData.length; i++){
        levels[i] = new SG.Button('level' + i, levelData[i].level, 20 + 150*(i%3), 90 + 160*Math.floor(i/3), 140, 150, SG.simg['unlockbg'].src, function(){
            window.location.href="answer.html";
        });
        if(levelData[i].help > 0){
            $('#level' + i).children(":first").after('<div id="helpHeart">' + levelData[i].help + '</div>');
        }
    }
    levels[i] = new SG.Button('', '', 20 + 150*(i%3), 90 + 160*Math.floor(i/3), 140, 150, SG.simg['lockbg'].src, function(){
        window.location.href="game.html";
    });
    i++;
    for(; i < maxNum; i++){
        levels[i] = new SG.Button('', '', 20 + 150*(i%3), 90 + 160*Math.floor(i/3), 140, 150, SG.simg['lockbg'].src, function(){

        });
    }



    function requestPage(){
        $.ajax({
            type: "post",
            dataType: "json",
            data:{
                'cur_page':curPage,
                'user_id':userId
            },
            url: server.Level,
            success: function(result){
                curPage = result['cur_page'];
                maxPage = result['max_page'];
                levelData = result['level_data'];
                curNum = levelData.length;
                userId = result['user_id'];

                refreshPage();
            }
        });
    }
    function refreshPage(){
        $('#pageCount').html(curPage + ' / ' + maxPage);
        for(var i = 0; i < levelData.length; i++){
            levels[i] = new SG.Button('level' + i, levelData[i].level, 20 + 150*(i%3), 90 + 160*Math.floor(i/3), 140, 150, SG.simg['unlockbg'].src, function(){
                window.location.href="answer.html";
            });
            if(levelData[i].help > 0){
                $('#level' + i).children(":first").after('<div id="helpHeart">' + levelData[i].help + '</div>');
            }
        }
        levels[i] = new SG.Button('', '', 20 + 150*(i%3), 90 + 160*Math.floor(i/3), 140, 150, SG.simg['lockbg'].src, function(){
            window.location.href="game.html";
        });
        i++;
        for(; i < maxNum; i++){
            levels[i] = new SG.Button('', '', 20 + 150*(i%3), 90 + 160*Math.floor(i/3), 140, 150, SG.simg['lockbg'].src, function(){

            });
        }
    }
    function sendLevel(){
        $.ajax({
            type: "post",
            dataType: "json",
            data:{
                'cur_page':curPage,
                'level' : level,
                'user_id':userId
            },
            url: server.Level,
            success: function(result){

            }
        });
    }
}