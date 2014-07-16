var mainView;
var gameView;
var choose;
var countryNameArr=["巴西","墨西哥","荷兰","智利","哥伦比亚","希腊","哥斯达黎加","乌拉圭","法国","瑞士","阿根廷","尼日利亚","德国","美国","比利时","阿尔及利亚"];
var isLost;
var contactNum;
var timeNum;
var timeCount;
var scoreSpr;
var timeSpr;
var wenzi02Spr;
var SI1;
var SI2;
var timesNum;
var daojiSpr;
var lostSpr;
var shareBtn;
var scoreLostSpr;
function Main()
{
	var s = this;
	mainView = s;
	base(s,LSprite,[]);
	s.screenHeight = 1024;
	s.screenWidth = 768;
}
Main.prototype.init = function ()
{
	var s = this;
	LGlobal.box2d = new LBox2d();
	
	s.addBackLayer();
}
function initGameView()
{
	var s = mainView;
	s.addFourWall();
	s.addGold();
	s.addRefrigerator();
	setTime()
	SI1 = setInterval(setTime,1000);
	updateShow("score",contactNum+"",mainView)
	LGlobal.box2d.setEvent(LEvent.BEGIN_CONTACT,beginContact);
	s.addEventListener(LEvent.ENTER_FRAME,s.onEnter_Frame);
}
function lostView()
{
	var s = mainView;
	if(SI1)
	{
		clearInterval(SI1);
		SI1 = null;
	}
	if(startView)
	{
		s.removeAllChild();
		startView = null;
		addLostView();
	}
}
function setTime()
{
	var s = mainView
	var t = changeTime(timeCount)
	updateShow("time",t,mainView);
	timeCount--;
	if(timeCount<0)
	{
		if(SI1)
		{
			clearInterval(SI1);
			SI1 = null;
		}
		if(startView)
		{
			s.removeAllChild();
			startView = null;
			addLostView();
		}
	}
}
function addLostView()
{
	var s = mainView;
	lostSpr = new LSprite();
	s.addChild(lostSpr)
	var bitmap = new LBitmap(new LBitmapData(imgList["back3"]));
	var ball = new LBitmap(new LBitmapData(imgList["football"]));
	var ref = new LBitmap(new LBitmapData(imgList["country"+choose]));
	var wenzi03 = new LBitmap(new LBitmapData(imgList["wenzi01"]));
	lostSpr.addChild(bitmap);
	lostSpr.addChild(ball)
	lostSpr.addChild(ref)
	lostSpr.addChild(wenzi03)
	wenzi03.x = 50;
	wenzi03.y = 400;
	ref.x = 250;
	ref.y = 500;
	ball.x = 500;
	ball.y = 800;
	
	var sharebtnBitmap = new LBitmap(new LBitmapData(imgList["shareBtn"]))
	sharebtnBitmap.scaleX =0.5;
	sharebtnBitmap.scaleY=0.5;
	shareBtn = new LButton(sharebtnBitmap,null)
	shareBtn.x = 500;
	shareBtn.y = 600;
	lostSpr.addChild(shareBtn);
	
	if(scoreLostSpr&&scoreLostSpr.parent)
	{
		scoreLostSpr.parent.removeChild(scoreLostSpr);
		scoreLostSpr = null;
	}
	var num = contactNum+""
	scoreLostSpr = new LSprite();
	scoreLostSpr.y = 300;
	scoreLostSpr.x = 330;
	s.addChild(scoreLostSpr)
	var bitmap = new LBitmap(new LBitmapData(imgList["times"]));
	scoreLostSpr.addChild(bitmap)
	bitmap.x=50;
	for (var i = 0; i <num.length; i++) 
	{
		var scorebitmap = new LBitmap(new LBitmapData(imgList["num"+num[i]]));
		scorebitmap.x = (i-num.length+1)*(scorebitmap.getWidth());
		scoreLostSpr.addChild(scorebitmap);
	}
	
}
function beginContact(contact){ 
	var gfa = contact.GetFixtureA().GetBody().GetUserData();
	var gfb = contact.GetFixtureB().GetBody().GetUserData();
	
	if((gfa.name == "Refrigerator"&&gfb.name == "gold"))
	{
		contactNum++;
		updateShow("score",contactNum+"",mainView)
	}
	else if((gfb.name == "Refrigerator"&&gfa.name == "gold"))
	{
		contactNum++;
		updateShow("score",contactNum+"",mainView)
	}
	else if((gfa.name == "down"&&gfb.name == "gold"))
  	{
  		trace("lost1")
  		if(!isLost)
  		{
  			isLost = true;
  			lostView();
  		}
  	}
  	else if(gfa.name == "gold"&&gfb.name == "down")
  	{
  		if(!isLost)
  		{
  			isLost = true;
  			lostView();
  		}
  	}
}
function changeTime(num)
{
	if(num<60)
	{
		if(num<10)
		{
			return "0"+num
		}
		else
		{
			return ""+num
		}
	}
	
}
function updateShow(type,num,parent)
{
	var s = mainView;
	if(type == "time")
	{
		if(timeSpr)
		{
			timeSpr.parent.removeChild(timeSpr);
			timeSpr = null;
		}
		timeSpr = new LSprite();
		timeSpr.y = 300;
		timeSpr.x = 560;
		s.addChild(timeSpr);
		var bitmap = new LBitmap(new LBitmapData(imgList["miao"]));
		timeSpr.addChild(bitmap)
		bitmap.x=100;
		for (var i = 0; i < num.length; i++) {
  				var timebitmap = new LBitmap(new LBitmapData(imgList["num"+num[i]]));
				timebitmap.x = i*timebitmap.getWidth();
				timeSpr.addChild(timebitmap);
		}
	}
	else if(type =="score")
	{
		if(scoreSpr&&scoreSpr.parent)
		{
			scoreSpr.parent.removeChild(scoreSpr);
			scoreSpr = null;
		}
		scoreSpr = new LSprite();
		scoreSpr.y = 200;
		scoreSpr.x = 600;
		s.addChild(scoreSpr)
		var bitmap = new LBitmap(new LBitmapData(imgList["times"]));
		scoreSpr.addChild(bitmap)
		bitmap.x=50;
		for (var i = 0; i <num.length; i++) 
		{
			//trace(num[i]);
			var scorebitmap = new LBitmap(new LBitmapData(imgList["num"+num[i]]));
			scorebitmap.x = (i-num.length+1)*(scorebitmap.getWidth());
			scoreSpr.addChild(scorebitmap);
		}
	}
}
function addGameView()
{
	var s = mainView;
	isLost = false;
	contactNum=0;
	timeCount = 30;
	timeNum = 0;
	timesNum = 4;
	gameView = new LSprite();
	s.addChild(gameView);
	var btnBitmap = new LBitmap(new LBitmapData(imgList["back2"]));
	gameView.addChild(btnBitmap);
	var wenzi02 = new LBitmap(new LBitmapData(imgList["wenzi02"]));
	var ball = new LBitmap(new LBitmapData(imgList["football"]));
	var bingxiang = new LBitmap(new LBitmapData(imgList["country"+choose]));
	wenzi02Spr = new LSprite()
	s.addChild(wenzi02Spr)
	wenzi02.x = 130;
	wenzi02.y = 300;
	ball.x = 350;
	ball.y = 200;
	bingxiang.x = 250;
	bingxiang.y = 500;
	wenzi02Spr.addChild(wenzi02)
	wenzi02Spr.addChild(ball)
	wenzi02Spr.addChild(bingxiang);
	clearLayer()
	SI2 = setInterval(clearLayer,1000);
//	initGameView();
}
function clearLayer()
{
	var s = mainView;
	timesNum--;
	if(timesNum<1)
	{
		if(daojiSpr) daojiSpr.parent.removeChild(daojiSpr)
		if(SI2)
		{
			clearInterval(SI2)
			SI2 = null;
		}
		if(wenzi02Spr&&wenzi02Spr.parent)
		{
			wenzi02Spr.parent.removeChild(wenzi02Spr)
			wenzi02Spr = null;
		}
		initGameView()
	}
	else
	{
		if(daojiSpr) daojiSpr.parent.removeChild(daojiSpr)
		daojiSpr = new LSprite();
		s.addChild(daojiSpr)
		var numBitmap = new LBitmap(new LBitmapData(imgList["num"+timesNum]));
		daojiSpr.addChild(numBitmap);
		daojiSpr.x = 360;
		daojiSpr.y = 400;
//		var tween0 = LTweenLite.to(numBitmap,1,{scaleX:3,ease:Strong.easeIn});
//		var tween1 = LTweenLite.to(numBitmap,1,{scaleY:3,ease:Strong.easeIn})//.to(daojiSpr,1,{scaleY:3,ease:Strong.easeIn}).to(daojiSpr,1,{alpha:1,ease:Strong.easeIn});
	}
	
}
Main.prototype.addBackLayer = function ()
{
	var s = this;
	back = new StartGameView()
	s.addChild(back);
}
Main.prototype.onEnter_Frame = function(e)
{
	
}
Main.prototype.addRefrigerator = function()
{
	var s= this
	var refrigerator = new Refrigerator(250,500);
	s.addChild(refrigerator)
}
	
Main.prototype.addGold = function ()
{
	var s = this;
	var gold = new GoldView(370,200);
	s.addChild(gold)
}
Main.prototype.addFourWall = function()
{
  	var s = this;
	var upWall = new LSprite();
	upWall.x = s.screenWidth*0.5;
	upWall.y = 10;
	upWall.addBodyPolygon(s.screenWidth,5,0,1,0.1,0)
	s.addChild(upWall);
  	
  	var downWall = new LSprite();
  	downWall.name = "down";
  	downWall.isOver = false;
  	downWall.x = s.screenWidth*0.5;
  	downWall.y = s.screenHeight;
  	downWall.addBodyPolygon(s.screenWidth,5,0,1,0.1,0)
  	s.addChild(downWall);
  	var leftWall = new LSprite();
  	leftWall.name = "left"
  	leftWall.x = 5;
  	leftWall.y = s.screenHeight*0.5;
  	leftWall.addBodyPolygon(5,s.screenHeight,0,1,0.1,0)
  	s.addChild(leftWall);
  	
  	var rightWall = new LSprite();
  	rightWall.name = "right";
  	rightWall.isWin = false;
  	rightWall.x = s.screenWidth-5;
  	rightWall.y = s.screenHeight*0.5;
  	rightWall.addBodyPolygon(5,s.screenHeight,0,1,0.1,0)
  	s.addChild(rightWall);
  	
}
