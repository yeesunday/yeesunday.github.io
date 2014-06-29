function ZoomSprite(x, y, w, h, step, img, gImg)
{
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.step = step;
	this.img = gImg[img];
	this.zoom = 1.5;
	this.zooms = [];
	this.interval = 1.5 / step;

	for (var i = 0; i < this.step; i++) {
		this.zooms[i] = 1.5 - this.interval*i;
	};
}
ZoomSprite.prototype.action = function(context)
{

	if (this.zooms[0]) {
		var _zoom = this.zooms.shift();
		this.x= this.x + (this.width / 2)*this.interval,
		this.y = this.y + (this.height / 2)*this.interval;
		context.drawImage(this.img, 0, 0, this.img.width, this.img.height,  this.x,  this.y, this.width*_zoom, this.height*_zoom);
		return true;
	}else{
		return false;
	};
}
function MoveSprite(x, y, w, h, step, src, des, img, gImg)
{
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.step = step;
	this.img = gImg[img];
	this.pos = src;
	this.paths = [];
	this.intervalX = (des.x - src.x) / step;
	this.intervalY = (des.y - src.y) / step;

	for (var i = 0; i < this.step; i++) {
		this.paths[i] = {
			x: src.x + this.intervalX*i,
			y: src.y + this.intervalY*i
		}
	};
}
MoveSprite.prototype.action = function(context)
{

	if (this.paths[0]) {
		var _path = this.zooms.shift();
		this.x= this.x + (this.width / 2)*this.interval,
		this.y = this.y + (this.height / 2)*this.interval;
		context.drawImage(this.img, 0, 0, this.img.width, this.img.height,  this.x,  this.y, this.width*_zoom, this.height*_zoom);
		return true;
	}else{
		return false;
	};
}
