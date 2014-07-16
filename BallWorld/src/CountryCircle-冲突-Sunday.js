function CountryCircle(vx,vy,index)
{
	var s = this;
	s.index = index;
	base(s,LSprite,[]);
	s.init();
}
CountryCircle.prototype.init = function()
{
	var s = this;
	s.name = s.index+"";
	var btnBitmap0 = new LBitmap(new LBitmapData(imgList["countryCircle"+s.index]));
	var nameText = new LTextField()
	nameText.size = 25; 
    nameText.color = "#ffffff"; 
    nameText.text = countryNameArr[s.index-1]; 
	s.addChild(btnBitmap0);
	s.addChild(nameText);
	nameText.y = 130;
	nameText.x = 60;
	nameText.textAlign = "center";
	
	s.addEventListener(LMouseEvent.MOUSE_DOWN,s.onMouseDownBtn)
}
CountryCircle.prototype.onMouseDownBtn = function(e)
{
	trace(e.clickTarget.name);
	addRefrigerator(e.clickTarget.name)
}
