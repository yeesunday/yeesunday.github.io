var startbtn;
var startbtn1;
var leftBtn;
var rightBtn;
var startView;
var backHeight;
var backWidth;
var circleLayer;
var index;
var refrigerLayer;
var backImg;
function StartGameView()
{
	var s = this;
	base(s,LSprite,[]);
	startView = this;
	s.init();
}
StartGameView.prototype.init = function()
{
	var s = this;
	backImg = new LBitmap(new LBitmapData(imgList["back0"]));
	s.addChild(backImg)
	var startbtnBitmap = new LBitmap(new LBitmapData(imgList["startBtn"]))
	
	startbtn = new LButton(startbtnBitmap,null)
	s.addChild(startbtn)
	backWidth = backImg.getWidth();
	backHeight = backImg.getHeight()
	startbtn.scaleX = 0.5;
	startbtn.scaleY = 0.5;
	startbtn.x = backWidth*0.5 - startbtnBitmap.getWidth()*0.5+50;
	startbtn.y = backHeight-250;
	startbtn.addEventListener(LMouseEvent.MOUSE_DOWN,onStartGame)
}
function onStartGame()
{
	var s= startView;
	backImg.parent.removeChild(backImg)
	backImg = new LBitmap(new LBitmapData(imgList["back1"]));
	s.addChild(backImg)
	if(startbtn)
	{
		startbtn.removeEventListener(LMouseEvent.MOUSE_DOWN,onStartGame);
		if(startbtn.parent)
		{
			startbtn.parent.removeChild(startbtn);
			index = 0;
			s.initLeftRightBtn();
//			initGameView()
		}
	}
}
StartGameView.prototype.initLeftRightBtn =function ()
{
	var s = this
	var wenzi03 = new LBitmap(new LBitmapData(imgList["wenzi03"]))
	var leftBtnBitmap = new LBitmap(new LBitmapData(imgList["leftArrow"]))
	var rightBtnBitmap = new LBitmap(new LBitmapData(imgList["rightArrow"]))
	leftBtn = new LButton(leftBtnBitmap,null)
	rightBtn = new LButton(rightBtnBitmap,null)
	s.addChild(wenzi03)
	wenzi03.x = 220;
	wenzi03.y = 200;
	s.addChild(leftBtn);
	s.addChild(rightBtn);
	leftBtn.addEventListener(LMouseEvent.MOUSE_DOWN,s.onLeftMouseDown);
	rightBtn.addEventListener(LMouseEvent.MOUSE_DOWN,s.onRightMouseDown);
	leftBtn.x = backWidth*0.5-350;
	leftBtn.y = 300;
	rightBtn.x = backWidth*0.5+270;
	rightBtn.y = 300;
	
	refrigerLayer = new LSprite();
	s.addChild(refrigerLayer);
	
	circleLayer= new LSprite();
	s.addChild(circleLayer);
	circleLayer.x = backWidth*0.5-260;
	circleLayer.y = 300;
	for (var i = 1; i <= 4; i++) {
		var btn = new CountryCircle(i*130,0,i+index*4)
		btn.x = (i-1)*130;
		circleLayer.addChild(btn);
	}
}
StartGameView.prototype.onLeftMouseDown =function (e)
{
	if(index<=0)return;
	index--;
	var s = startView;
	if(circleLayer)circleLayer.removeAllChild()
	for (var i = 1; i <= 4; i++) {
		var btn = new CountryCircle(i*130,0,i+index*4)
		btn.x = (i-1)*130;
		circleLayer.addChild(btn);
	}
}
StartGameView.prototype.onRightMouseDown =function (e)
{
	if(index>=3)return;
	index++;
	var s= startView;
	if(circleLayer)circleLayer.removeAllChild()
	for (var i = 1; i <= 4; i++) {
		var btn = new CountryCircle(i*130,0,i+index*4)
		btn.x = (i-1)*130;
		circleLayer.addChild(btn);
	}
}
function addRefrigerator(click)
{
	var s = startView;
	choose = click;
	if(refrigerLayer)refrigerLayer.removeAllChild()
	var bitmap = new LBitmap(new LBitmapData(imgList["country"+click]))
	bitmap.x = backWidth*0.5-bitmap.getWidth()*0.5;
	bitmap.y = 450;
	refrigerLayer.addChild(bitmap);
	s.addStartBtn()
}
StartGameView.prototype.addStartBtn =function()
{
	var s=this;
	var startbtnBitmap = new LBitmap(new LBitmapData(imgList["startBtn"]))
	
	startbtn1 = new LButton(startbtnBitmap,null)
	s.addChild(startbtn1)
	startbtn1.x = backWidth*0.5 - startbtnBitmap.getWidth()*0.5+50;
	startbtn1.y = 850;
	startbtn1.scaleX = 0.5;
	startbtn1.scaleY = 0.5;
	startbtn1.addEventListener(LMouseEvent.MOUSE_DOWN,onStartGameView)
}
function onStartGameView(event)
{
	startbtn1.removeEventListener(LMouseEvent.MOUSE_DOWN,onStartGameView)
	var s = startView;
	if(s&&s.parent)
	{
		s.removeAllChild();
		s.parent.removeChild(s);
	}
	addGameView()
}
