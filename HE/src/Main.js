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
var wenziSpr;
var SI1;
var SI2;
var SI3;
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
	wenzi03.y = 350;
	ref.x = 230;
	ref.y = 550;
	ball.x = 500;
	ball.y = 820;
	
//	var sharebtnBitmap = new LBitmap(new LBitmapData(imgList["shareBtn"]))
//	sharebtnBitmap.scaleX =0.5;
//	sharebtnBitmap.scaleY=0.5;
//	shareBtn = new LButton(sharebtnBitmap,null)
//	shareBtn.x = 500;
//	shareBtn.y = 600;
//	lostSpr.addChild(shareBtn);
	
	if(scoreLostSpr&&scoreLostSpr.parent)
	{
		scoreLostSpr.parent.removeChild(scoreLostSpr);
		scoreLostSpr = null;
	}
	var num = contactNum+""
	scoreLostSpr = new LSprite();
	scoreLostSpr.y = 150;
	scoreLostSpr.x = 300;
	s.addChild(scoreLostSpr)
	var dikuang = new LBitmap(new LBitmapData(imgList["dikuang"]));
	scoreLostSpr.addChild(dikuang)
	dikuang.x = -40;
	dikuang.y = -20;
	var bitmap = new LBitmap(new LBitmapData(imgList["times"]));
	scoreLostSpr.addChild(bitmap)
	bitmap.x=70;
	bitmap.y =0;
	for (var i = 0; i <num.length; i++) 
	{
		var scorebitmap = new LBitmap(new LBitmapData(imgList["num"+num[i]]));
		scorebitmap.x = (i-num.length+1)*(scorebitmap.getWidth()-10)+20;
		scorebitmap.y = 0;
		scoreLostSpr.addChild(scorebitmap);
	}
	
}
function beginContact(contact){ 
	var gfa = contact.GetFixtureA().GetBody().GetUserData();
	var gfb = contact.GetFixtureB().GetBody().GetUserData();
	
	if((gfa.name == "score"&&gfb.name == "gold"))
	{
		contactNum++;
		updateShow("score",contactNum+"",mainView)
	}
	else if((gfb.name == "score"&&gfa.name == "gold"))
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
		timeSpr.y = 170;
		timeSpr.x = 550;
		s.addChild(timeSpr);
		var dikuang = new LBitmap(new LBitmapData(imgList["dikuang"]));
		timeSpr.addChild(dikuang)
		dikuang.x = -30;
		dikuang.y = 20;
		var bitmap = new LBitmap(new LBitmapData(imgList["miao"]));
		timeSpr.addChild(bitmap)
		bitmap.x=100;
		bitmap.y = 50;
		for (var i = 0; i < num.length; i++) {
  				var timebitmap = new LBitmap(new LBitmapData(imgList["num"+num[i]]));
				timebitmap.x = i*(timebitmap.getWidth()-10)-10;
				timebitmap.y = 50;
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
		scoreSpr.y = 50;
		scoreSpr.x = 570;
		s.addChild(scoreSpr)
		var dikuang = new LBitmap(new LBitmapData(imgList["dikuang"]));
		scoreSpr.addChild(dikuang)
		dikuang.x = -50;
		dikuang.y = -20;
		var bitmap = new LBitmap(new LBitmapData(imgList["times"]));
		scoreSpr.addChild(bitmap)
		bitmap.x=70;
		bitmap.y = 10;
		for (var i = 0; i <num.length; i++) 
		{
			var scorebitmap = new LBitmap(new LBitmapData(imgList["num"+num[i]]));
			scorebitmap.x = (i-num.length+1)*(scorebitmap.getWidth()-10);
			scorebitmap.y = 5;
			scoreSpr.addChild(scorebitmap);
		}
	}
}
var w02Spr;
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
	w02Spr = new LSprite();
	w02Spr.addChild(wenzi02);
	var ball = new LBitmap(new LBitmapData(imgList["football"]));
	var bingxiang = new LBitmap(new LBitmapData(imgList["country"+choose]));
	wenzi02Spr = new LSprite()
	s.addChild(wenzi02Spr);
	wenzi02Spr.addChild(w02Spr)
	wenzi02.x = 130;
	wenzi02.y = 200;
	ball.x = 370;
	ball.y = 100;
	bingxiang.x = 250;
	bingxiang.y = 550;
	w02Spr.addChild(wenzi02)
	wenzi02Spr.addChild(ball)
	wenzi02Spr.addChild(bingxiang);
	SI3 = setInterval(showWenzi,3000)
	
//	initGameView();
}
function showWenzi()
{
	if(SI3) clearInterval(SI3);
	wenzi02Spr.removeChild(w02Spr)
	clearLayer()
	SI2 = setInterval(clearLayer,1000);
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
		var dikuang = new LBitmap(new LBitmapData(imgList["dikuang"]));
		daojiSpr.addChild(dikuang)
		dikuang.x = -80;
		dikuang.y = -20
		var numBitmap = new LBitmap(new LBitmapData(imgList["num"+timesNum]));
		daojiSpr.addChild(numBitmap);
		daojiSpr.x = 370;
		daojiSpr.y = 370;
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
	var refrigerator = new Refrigerator(250,550);
	s.addChild(refrigerator)
}
	
Main.prototype.addGold = function ()
{
	var s = this;
	var gold = new GoldView(380,200);
	s.addChild(gold)
}
Main.prototype.addFourWall = function()
{
  	var s = this;
	var upWall = new LSprite();
	upWall.x = s.screenWidth*0.5;
	upWall.y = 10;
	upWall.addBodyPolygon(s.screenWidth,5,0,1,0.1,1)
	s.addChild(upWall);
  	
  	var downWall = new LSprite();
  	downWall.name = "down";
  	downWall.isOver = false;
  	downWall.x = s.screenWidth*0.5;
  	downWall.y = s.screenHeight;
  	downWall.addBodyPolygon(s.screenWidth,5,0,1,0.1,1)
  	s.addChild(downWall);
  	var leftWall = new LSprite();
  	leftWall.name = "left"
  	leftWall.x = 5;
  	leftWall.y = s.screenHeight*0.5;
  	leftWall.addBodyPolygon(5,s.screenHeight,0,1,0.1,1)
  	s.addChild(leftWall);
  	
  	var rightWall = new LSprite();
  	rightWall.name = "right";
  	rightWall.isWin = false;
  	rightWall.x = s.screenWidth-5;
  	rightWall.y = s.screenHeight*0.5;
  	rightWall.addBodyPolygon(5,s.screenHeight,0,1,0.1,0)
  	s.addChild(rightWall);
  	
}
