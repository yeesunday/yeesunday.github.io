function SG(){
    this.canvas = null;
    this.width = 0;
    this.height = 0;
    this.simg = [];
}

SG.prototype.init = function(canvas, width, height){
    var _canvas = this.canvas, _width = this.width, _height = this.height;

    _canvas = document.getElementById(canvas);
    _width = width;
    _height = height;

    if (window.innerWidth > _width) {
        _canvas.style.left = (window.innerWidth - _width) / 2 + 'px';
    }else{
        _canvas.style.left = '0px';
    };
    if (window.innerHeight > _height) {
        _canvas.style.top = (window.innerHeight - _height) / 2 + 'px';
    }else{
        _canvas.style.top = '0px';
    };
    _canvas.style.position = 'absolute';
    _canvas.style.width = _width + 'px';
    _canvas.width = _width;
    _canvas.style.height = _height + 'px';
    _canvas.height = _height;
}

SG.prototype.loadImg = function(src, callback){
    var imgCount = src.length, _simg = this.simg, _img, _loadCount = 0;

    for (var i = 0; i < imgCount; i++) {
        _img = src[i];
        _simg[_img.name] = new Image();
        _simg[_img.name].src = _img.path;

        //当一张图片加载完成时执行
        _simg[_img.name].onload = function(){
            //重绘一个进度条
//            context.font = "20px Arial";
//            context.fillStyle = '#FFFF00';
//            context.clearRect(0,0,clearWidth,clearHeight);
//            context.fillText('Loading:'+ loadedImages +'/'+numImages,(clearWidth-130)/2,clearHeight/2-30);
//            context.save();
//            context.strokeStyle='#555';
//            context.beginPath();
//            context.moveTo((clearWidth-130)/2 - 85,clearHeight/2+10);
//            context.lineTo((clearWidth-130)/2 + 215,clearHeight/2+10);
//            context.stroke();
//            context.beginPath();
//            context.restore();
//            context.moveTo((clearWidth-130)/2 - 85,clearHeight/2+10);
//            context.lineTo(loadedImages/numImages*300+(clearWidth-130)/2 - 85,clearHeight/2+10);
//            context.stroke();
            //当所有图片加载完成时，执行回调函数callback
            if (++_loadCount >= imgCount) {
                if(callback){
                    callback();
                }
            }
        };
    }
}