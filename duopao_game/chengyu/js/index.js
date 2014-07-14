var SG = new SG(),
    WIDTH = 480,
    HEIGHT = 800;

window.onload = function(){
    SG.init('gameContainer', WIDTH, HEIGHT);

    var sources = [
        {path:"./img/game_bg.jpg", name:"gamebg"}
    ]
    //执行图片预加载，加载完成后执行main
    SG.loadImg(sources, main);
};
function main(){
    console.log(11111);
}