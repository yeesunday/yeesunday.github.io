function Button(x, y, w, h, img, gImg, callback)
{
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.img = gImg[img];
	this.callback = callback;
}
Button.prototype.render = function(context)
{
	context.drawImage(this.img, 0, 0, this.img.width, this.img.height,  this.x,  this.y, this.width, this.height);
}
Button.prototype.collision = function(x1, y1, w1, h1, x2, y2, w2, h2)
{
	if(w2 && Math.abs((x1 + parseInt(w1/2)) - (x2 + parseInt(w2/2))) < parseInt((w1 + w2) / 2) && Math.abs((y1 + parseInt(h1/2)) - (y2 + parseInt(h2/2))) < parseInt((h1 + h2) / 2))
		return true;
	return false;
}
Button.prototype.click = function(mouseX, mouseY){
	var s = this;
	if (s.collision(s.x, s.y, s.width, s.height, mouseX, mouseY, 1, 1)) {
		this.callback();
	};
}
