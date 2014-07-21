var WIDTH = 480,
    HEIGHT = 800;

window.onload = function(){
    SG.init('contributeContainer', WIDTH, HEIGHT);
    var sources = [
        {path:"./img/rank_bg.jpg", name:"rankbg"},
        {path:"./img/closeBtn.png", name:"closebtn"},
        {path:"./img/pre.png", name:"prebtn"},
        {path:"./img/nxt.png", name:"nxtbtn"}
    ]
    //执行图片预加载，加载完成后执行main
    SG.loadImg(sources, main);
};
function main(){
    var maxNum = 5,
        friends = [],
        friendData = [{ranking:1, pic:'#333', name:'xxx', score:'1111'},
                      {ranking:1, pic:'#333', name:'xxx', score:'1111'},
                    {ranking:1, pic:'#333', name:'xxx', score:'1111'},
                    {ranking:1, pic:'#333', name:'xxx', score:'1111'},
                    {ranking:1, pic:'#333', name:'xxx', score:'1111'}
                     ],
        curPage = 1,
        maxPage = 1,
        curNum = 2;

    var closeBtn = new SG.Button('closeBtn', '', 425, 2, 50, 50, SG.simg['closebtn'].src, function(){
        window.location.href="level.html";
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
    $('#pageCount').html(curPage + ' / ' + maxPage);

    for(var i = 0; i < maxNum; i++){
        friends[i] = new SG.Label('friend' + i, 10, 170 + 80*i, 450, 80, '' +
            '<div class="ranking" id="ranking' + i + '" style="position:absolute; left:20px; top:0px; width:100px; height: 70px;font-size:45px;font-family:cursive;text-align:center;line-height:70px;"></div>' +
            '<div class="rankPic" id="rankPic' + i + '" style="position: absolute; left: 110px;top: 0px;width: 70px;height: 70px;"></div>' +
            '<div class="rankName" id="rankName' + i + '" style="position:absolute; left:190px; top:18px; width:100px; height: 60px;font-size:25px;font-family:cursive;text-align:center;line-height:30px;"></div>' +
            '<div class="contributeScore" id="contributeScore' + i + '" style="position:absolute; left:320px; top:0px; width:100px; height: 70px;font-size:25px;font-family:cursive;text-align:left;line-height:70px;"></div>'
        );
    }

    for(i = 0; i < friendData.length; i++){
        $('#ranking'+i).html(friendData[i].ranking);
        $('#rankPic'+i).css("background", friendData[i].pic);
        $('#rankName'+i).html(friendData[i].name);
        $('#contributeScore'+i).html(friendData[i].score);
        $('#friend'+i).show();
    }
    for(; i < maxNum; i++){
        $('#friend'+i).hide();
    }
}