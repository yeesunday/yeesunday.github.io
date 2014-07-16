(function(SG){
    function Button(id, value, x, y, w, h, img, callback){
        this.x = x || 0;
        this.y = y || 0;
        this.width = w || 0;
        this.height = h || 0;
        this.img = img || null;
        this.id = id || '';
        this.value = value;
        this.callback = callback || null;

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
            background: "url(" + this.img + ")",
            backgroundSize: "100% 100%"
        };
        for (var key in _style) {
            btn.style[key] = _style[key];
        }
        btn.id = this.id;
        btn.innerHTML = '<div style="position: absolute;left: 0px;top: 0px;width: 100%; height:' + this.height + 'px;text-align: center;line-height: ' +
            this.height + 'px;font-size:50px;font-family: cursive;color:#000;font-weight: bold;">' + this.value + '</div>';

        btn.onclick = this.callback;
        SG.container.appendChild(btn);
    }
    SG.Button = Button;

    function Keyboard(id, value, x, y, img, callback){
        this.x = x || 0;
        this.y = y || 0;
        this.width = 48;
        this.height = 48;
        this.img = img || null;
        this.id = id || '';
        this.value = value;
        this.callback = callback || null;

        this.append();
    }
    Keyboard.prototype.append = function(){
        var btn=document.createElement("div");
        var _style = {
            position: 'absolute',
            left: this.x + 'px',
            top: this.y + 'px',
            width: this.width + 'px',
            height: this.height + 'px',
            background: "url(" + this.img + ")",
            backgroundSize: "100% 100%"
        };
        for (var key in _style) {
            btn.style[key] = _style[key];
        }
        btn.id = this.id;

        btn.onclick = this.callback;
        SG.container.appendChild(btn);
    }
    SG.Keyboard = Keyboard;
})(SG)