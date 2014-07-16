var WIDTH = 480,
    HEIGHT = 800;

window.onload = function(){
    SG.init('answerContainer', WIDTH, HEIGHT);
    var sources = [
        {path:"./img/game_bg.jpg", name:"gamebg"},
        {path:"./img/menu_bg.jpg", name:"menubg"},
        {path:"./img/level_bg.png", name:"levelbg"},

        {path:"./img/menu_start.png", name:"startbtn"},
        {path:"./img/rank.png", name:"rankbtn"},
        {path:"./img/more.png", name:"morebtn"},
        {path:"./img/contribute.png", name:"contributebtn"},
        {path:"./img/btn_left.png", name:"backbtn"},
        {path:"./img/btn_next.png", name:"goonbtn"},
        {path:"./img/btn_ok.png", name:"submitbtn"},

        {path:"./img/heart.png", name:"heart"},
        {path:"./img/play_panel_bg.png", name:"playPanelbg"},
        {path:"./img/play_panel_edt_bg.png", name:"editbg"},
        {path:"./img/lock.png", name:"lockbg"},
        {path:"./img/unlock.png", name:"unlockbg"},
        {path:"./img/right.png", name:"right"},
        {path:"./img/wrong.png", name:"wrong"},

        {path:"./img/older_state_nice.png", name:"esmile"},
        {path:"./img/older_state_think.png", name:"ethink"},

        {path:"./img/question37.jpg", name:"question"}

    ]
    //执行图片预加载，加载完成后执行main
    SG.loadImg(sources, main);
};
function main(){
    var isFail = false, answer='一石二鸟', helpList = [{img:'#444', name:'张三'}, {img:'#444', name:'李四'}], _html = '';
    var goonBtn = new SG.Button('goonBtn', '', 320, 407, 125, 70, SG.simg['goonbtn'].src, function(){
        window.location.href="game.html";
    });
    var closeBtn = new SG.Button('goonBtn', '', 350, 20, 50, 50, SG.simg['wrong'].src, function(){
        window.location.href="level.html";
    });

    $('#answerbg').css("background-image","url(" + SG.simg['question'].src + ")");
    $('#itemNumber').html(111);

    if(!isFail){
        $('#emotion').css("background-image","url(" + SG.simg['esmile'].src + ")");
        $('#flag').css("background-image","url(" + SG.simg['right'].src + ")");
        $('#goonBtn').hide();
        if(helpList.length != 0){
            $('#tip').html('此题是由您的小伙伴们：');
            $('#tip2').html('帮您完成的，好基友一辈子！');
            $('#tip2').show();
            for(var i = 0; i < helpList.length; i++){
                _html += '<div style="position: relative;float:left;padding: 10px;width: 50px;height: 90px;">' +
                            '<div style="position: absolute;left:0px; top: 0px; width: 50px;height: 50px;background: ' + helpList[i].img + ';"></div>' +
                            '<div style="position: absolute;left:0px; top: 50px; width:50px;height:40px;font-size:16px;font-family:cursive;text-align:left;line-height:20px;">' + helpList[i].name + '</div>' +
                          '</div>';
            }
            $('#helpList').html(_html);
            $('#heart').show();
        }else{
            $('#tip').html('此题是由聪明睿智，英明神武的您亲自完成的！');
            $('#helpList').hide();
            $('#tip2').hide();
            $('#heart').hide();
        }

    }else{
        $('#emotion').css("background-image","url(" + SG.simg['ethink'].src + ")");
        $('#flag').css("background-image","url(" + SG.simg['wrong'].src + ")");
        $('#goonBtn').show();
    }
    $('#editbg').html(answer);
}