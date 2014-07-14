var WIDTH = 500,
    HEIGHT = 800;

window.onload = function(){
    SG.init('gameContainer', WIDTH, HEIGHT);

    var sources = [
        {path:"./img/game_bg.jpg", name:"gamebg"},
        {path:"./img/menu_bg.jpg", name:"menubg"},

        {path:"./img/menu_shop.png", name:"shopbtn"},
        {path:"./img/menu_start.png", name:"startbtn"}
    ]
    //执行图片预加载，加载完成后执行main
    SG.loadImg(sources, main);
};
function main(){
    var startBtn = new SG.Button(100, 500, 300, 113, SG.simg['startbtn'].src, function(){
        window.location.href="level.html";
    });
}