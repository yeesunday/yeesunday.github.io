var thisGold;

function GoldView(vx,vy)
{
	var s = this;
	base(s,LSprite,[]);
	thisGold = s;
	s.vx = vx;
	s.vy = vy;
	s.isUsed = false;
	s.isHit = false;
	s.init();
}
GoldView.prototype.init = function ()
{
	var s = this;
	//trace(s.isUsed);
	if(s.isUsed)return;
	s.isUsed = true;
	s.x = s.vx;
	s.y = s.vy;
	bitmap = new LBitmap(new LBitmapData(imgList["football"]));
  	s.addChild(bitmap)
	s.addBodyCircle(bitmap.getWidth()*0.5,0,0,1,1,0.8,0.1);//B.GetWorldCenter()
	s.name = "gold";
//	s.setBodyMouseJoint(true)
}
GoldView.prototype.SetPositionAndAngle = function(px,py,angle)
{
	var s = thisGold;
	s.box2dBody.SetPositionAndAngle(new LGlobal.box2d.b2Vec2(px/30,py/30),angle)
}
GoldView.prototype.setIsUsed = function(isUsed)
{
	var s= this;
	s.isUsed = isUsed;
}
GoldView.prototype.getIsUsed = function()
{
	var s = this;
	return s.isUsed;
}
GoldView.prototype.getSelf = function ()
{
	var s = this;
	return !s.isUsed?s:null;
}

