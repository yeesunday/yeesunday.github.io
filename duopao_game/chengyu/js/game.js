var WIDTH = 480,
    HEIGHT = 800;

window.onload = function(){
    SG.init('gameContainer', WIDTH, HEIGHT);
    var sources = [
        {path:"./img/game_bg.jpg", name:"gamebg"},
        {path:"./img/menu_bg.jpg", name:"menubg"},
        {path:"./img/level_bg.png", name:"levelbg"},

        {path:"./img/menu_start.png", name:"startbtn"},
        {path:"./img/rank.png", name:"rankbtn"},
        {path:"./img/more.png", name:"morebtn"},
        {path:"./img/contribute.png", name:"contributebtn"},
        {path:"./img/btn_next.png", name:"goonbtn"},
        {path:"./img/btn_ok.png", name:"submitbtn"},
        {path:"./img/closeBtn.png", name:"closebtn"},

        {path:"./img/heart.png", name:"heart"},
        {path:"./img/play_panel_bg.png", name:"playPanelbg"},
        {path:"./img/play_panel_edt_bg.png", name:"editbg"},
        {path:"./img/lock.png", name:"lockbg"},
        {path:"./img/unlock.png", name:"unlockbg"},
        {path:"./img/right.png", name:"right"},
        {path:"./img/wrong.png", name:"wrong"},
        {path:"./img/zhitiao.png", name:"zhitiao"},

        {path:"./img/older_state_nice.png", name:"esmile"},
        {path:"./img/older_state_think.png", name:"ethink"},
        {path:"./img/older_state_null.png", name:"enull"},

        {path:"./img/up_a.png", name:"upa"},
        {path:"./img/up_b.png", name:"upb"},
        {path:"./img/up_c.png", name:"upc"},
        {path:"./img/up_d.png", name:"upd"},
        {path:"./img/up_e.png", name:"upe"},
        {path:"./img/up_f.png", name:"upf"},
        {path:"./img/up_g.png", name:"upg"},
        {path:"./img/up_h.png", name:"uph"},
        {path:"./img/up_i.png", name:"upi"},
        {path:"./img/up_j.png", name:"upj"},
        {path:"./img/up_k.png", name:"upk"},
        {path:"./img/up_l.png", name:"upl"},
        {path:"./img/up_m.png", name:"upm"},
        {path:"./img/up_n.png", name:"upn"},
        {path:"./img/up_o.png", name:"upo"},
        {path:"./img/up_p.png", name:"upp"},
        {path:"./img/up_q.png", name:"upq"},
        {path:"./img/up_r.png", name:"upr"},
        {path:"./img/up_s.png", name:"ups"},
        {path:"./img/up_t.png", name:"upt"},
        {path:"./img/up_u.png", name:"upu"},
        {path:"./img/up_v.png", name:"upv"},
        {path:"./img/up_w.png", name:"upw"},
        {path:"./img/up_x.png", name:"upx"},
        {path:"./img/up_y.png", name:"upy"},
        {path:"./img/up_z.png", name:"upz"},
        {path:"./img/up_back.png", name:"upback"},

        {path:"./img/question37.jpg", name:"question"}

    ]
    //执行图片预加载，加载完成后执行main
    SG.loadImg(sources, main);
};
function main(){
    var questionbg = SG.simg['question'].src,
        timeCost = 0,
        itemNum = 11,
        answer = '',
        helpCount = 2,
        letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
                  'h', 'j', 'k', 'l', 'm', 'n',
                  'o', 'p', 'q', 'r', 's', 't',
                  'w', 'x', 'y', 'z'],
        keyboard = [],
        isMe = false,
        helpPic,
        helpName = 'xxx',
        success = false;

    for(var i = 0; i < letter.length; i++){
        keyboard[i] = new SG.Keyboard('', letter[i], 40+50*(i%8), 550+50*Math.floor(i/8), SG.simg['up'+letter[i]].src, (function(index){
            return function(){answer += letter[index];
                $('#editinput').val(answer);}
        })(i));
    }
    keyboard[i] = new SG.Keyboard('', letter[i], 40+50*(i%8), 550+50*Math.floor(i/8), SG.simg['upback'].src, function(){
        if(answer != ''){
            answer = answer.substring(0,answer.length-1);
            $('#editinput').val(answer);
        }
    });
    var zhitiaoBtn = new SG.Button('', '', 250, 17, 100, 60, SG.simg['zhitiao'].src, function(){
//        window.location.href="level.html";
    });
    var closeBtn = new SG.Button('closeBtn', '', 425, 2, 50, 50, SG.simg['closebtn'].src, function(){
        window.location.href="level.html";
    });
    var goonBtn = new SG.Button('goonBtn', '', 320, 407, 125, 70, SG.simg['goonbtn'].src, function(){
        window.location.href="game.html";
    });
    var submitBtn = new SG.Button('submitBtn', '', 320, 407, 125, 70, SG.simg['submitbtn'].src, function(){
//        $.ajax()
    });
    var moreBtn = new SG.Button('', '', 320, 700, 150, 70, SG.simg['morebtn'].src, function(){
//        window.location.href="rank.html";
    });

    function refreshPage(){
        $.ajax({
            type: "post",
            dataType: "json",
            data:{
                'level' : itemNum,
                'user_id': userId
            },
            url: server.Level,
            success: function(result){
                questionBg = result['question_bg'];
                isMe = result['is_Me'];
                helpCount = result['help_count'];
                userId = result['user_id'];

                helpPic = result['help_pic'];
                helpName = result['help_name'];
            }
        });
    }

    function submitAnswer(){
//        answer = 0;
        $.ajax({
            type: "post",
            dataType: "json",
            data:{
                'answer' : answer,
                'time_cost': timeCost,
                'isMe' : isMe,
                'user_id': userId
            },
            url: server.Level,
            success: function(result){
                helpCount = result['help_count'];
                success = result['success']
                userId = result['user_id'];
                isMe = result['is_Me'];

                helpPic = result['help_pic'];
                helpName = result['help_name'];

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
        });
    }

    if(isMe){
        $('#emotion').css("background-image","url(" + SG.simg['enull'].src + ")");
        $('#portrait').hide();
    }else{
        $('#emotion').css("background-image","");
        $('#portrait').show();
//        $('#helpPic').css("background-image","url(" + SG.simg['enull'].src + ")");
        $('#helpName').html(helpName);
        $('#chat > div').html('恭喜您答对了！</br>请大侠留下姓名吧</br>让我永铭深恩~')
    }

    $('#timeCount').html('时间：' + timeCost + '秒');
    TC = setInterval(function(){
        timeCost++;
        $('#timeCount').html('时间：' + timeCost + '秒');
        if(isMe){
            if(timeCost < 10){
                $('#emotion').css("background-image","url(" + SG.simg['enull'].src + ")");
            }else if(timeCost >= 10){
                $('#emotion').css("background-image","url(" + SG.simg['ethink'].src + ")");
            }
        }
    },1000);

    $('#goonBtn').hide();
    $('#submit').show();
    $('#answerbg').css("background-image","url(" + questionbg + ")");
    $('#itemNumber').html(itemNum);
    $('#editinput').val(answer);
    $('#zhitiaoCount').html('x' + helpCount);

}