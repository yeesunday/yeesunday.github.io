var WIDTH = 480,
    HEIGHT = 800;

window.onload = function(){
    SG.init('indexContainer', WIDTH, HEIGHT);

    var sources = [
        {path:"./img/game_bg.jpg", name:"gamebg"},
        {path:"./img/menu_bg.jpg", name:"menubg"},
        {path:"./img/level_bg.png", name:"levelbg"},
        {path:"./img/lock.png", name:"lockbg"},
        {path:"./img/unlock.png", name:"unlockbg"},

        {path:"./img/menu_start.png", name:"startbtn"},
        {path:"./img/rank.png", name:"rankbtn"},
        {path:"./img/more.png", name:"morebtn"},

        {path:"./img/heart.png", name:"heart"}
    ]
    //执行图片预加载，加载完成后执行main
    SG.loadImg(sources, main);
};
function main(){
    var startBtn = new SG.Button('', '', 100, 500, 300, 113, SG.simg['startbtn'].src, function(){
        window.location.href="level.html";
    });
}