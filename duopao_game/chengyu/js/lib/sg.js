var SG;
(function(){
    SG = {
        container: null,
        width: 0,
        height: 0,
        simg: [],

        init: function(container, width, height){
            this.container = document.getElementById(container) || this.container;
            this.width = width;
            this.height = height;
            var _container = this.container,
                _width = this.width,
                _height = this.height;

            if (window.innerWidth > _width) {
                _container.style.left = (window.innerWidth - _width) / 2 + 'px';
            }else{
                _container.style.left = '0px';
            };
            if (window.innerHeight > _height) {
                _container.style.top = (window.innerHeight - _height) / 2 + 'px';
            }else{
                _container.style.top = '0px';
            };
            _container.style.position = 'absolute';
            _container.style.width = _width + 'px';
            _container.width = _width;
            _container.style.height = _height + 'px';
            _container.height = _height;
        },

        loadImg: function(src, callback){
            var imgCount = src.length, _simg = [], _img, _loadCount = 0;

            for (var i = 0; i < imgCount; i++) {
                _img = src[i];
                _simg[_img.name] = new Image();
                _simg[_img.name].src = _img.path;

                //当一张图片加载完成时执行
                _simg[_img.name].onload = function(){
                    //当所有图片加载完成时，执行回调函数callback
                    if (++_loadCount >= imgCount) {
                        if(callback){
                            SG.simg = _simg;
                            callback();
                        }
                    }
                };
            }
        }


    };
})();