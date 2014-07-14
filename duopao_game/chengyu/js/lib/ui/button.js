(function(SG){
    function Button(x, y, w, h, img, callback){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.img = img;
        this.callback = callback;

        this.append();
    }
    Button.prototype.append = function(){
        var btn=document.createElement("div");
        var _style = {
            position: 'absolute',
            left: this.x + 'px',
            top: this.y + 'px',
            width: this.width + 'px',
            height: this.height + 'px',
            background: "url(" + this.img + ")"
        };
        for (var key in _style) {
            btn.style[key] = _style[key];
        }
//        btn.src = this.img;
        btn.onclick = this.callback;
        SG.container.appendChild(btn);
    }
//    Button.prototype.onclick = function(){
//        if (this.callback) {
//            this.callback();
//        };
//    }
    SG.Button = Button;
})(SG)