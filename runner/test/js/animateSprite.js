function ZoomSprite(x, y, w, h, szoom, dzoom, step, img, gImg)
{
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.step = step;
	this.img = gImg[img];
	this.szoom = szoom;
	this.dzoom = dzoom;
	this.zooms = [];
	this.interval = (this.szoom-this.dzoom) / step;

	for (var i = 0; i < this.step; i++) {
		this.zooms[i] = this.szoom - this.interval*i;
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
function MoveSprite(w, h, step, src, des, img, gImg)
{
	this.x = src.x;
	this.y = src.y;
	this.width = w;
	this.height = h;
	this.step = step;
	this.img = gImg[img];
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
		var _path = this.paths.shift();
		this.x= _path.x,
		this.y = _path.y;
		context.drawImage(this.img, 0, 0, this.img.width, this.img.height,  this.x,  this.y, this.width, this.height);
		return true;
	}else{
		return false;
	};
}
