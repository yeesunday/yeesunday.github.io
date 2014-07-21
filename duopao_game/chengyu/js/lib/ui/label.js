(function(SG){
    function Label(id, x, y, w, h, html){
        this.x = x || 0;
        this.y = y || 0;
        this.width = w || 0;
        this.height = h || 0;
        this.id = id || '';
        this.html = html || '';

        this.append();
    }
    Label.prototype.append = function(){
        var label = document.createElement("div");
        var _style = {
            position: 'absolute',
            left: this.x + 'px',
            top: this.y + 'px',
            width: this.width + 'px',
            height: this.height + 'px',
            backgroundSize: "100% 100%"
        };
        for (var key in _style) {
            label.style[key] = _style[key];
        }
        label.id = this.id;
        label.innerHTML = this.html;

        SG.container.appendChild(label);
    }
    SG.Label = Label;
})(SG)