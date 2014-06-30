window.requestAnimationFrame = (function(){
    return  window.requestAnimationFrame       || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
			window.setTimeout;
})();
//重写cancelAnimationFrame
window.cancelAnimationFrame = (function() {
	return window.cancelAnimationFrame         ||
		   window.webkitCancelAnimationFrame   ||
		   window.mozCancelAnimationFrame      ||
		   window.oCancelAnimationFrame        ||
		   window.msCancelAnimationFrame       ||
		   window.clearTimeout;
})();
window.onload = function(){    
    var sources = [
			{path:"./img/football.png",name:"football"},
			{path:"./img/3.jpg",name:"back3"},
			{path:"./img/21.jpg",name:"back21"},
			{path:"./img/22.jpg",name:"back22"},
			{path:"./img/1.jpg",name:"back1"},
			{path:"./img/4.jpg",name:"back4"},
			{path:"./img/0.png",name:"num0"},
			{path:"./img/1.png",name:"num1"},
			{path:"./img/2.png",name:"num2"},
			{path:"./img/3.png",name:"num3"},
			{path:"./img/4.png",name:"num4"},
			{path:"./img/5.png",name:"num5"},
			{path:"./img/6.png",name:"num6"},
			{path:"./img/7.png",name:"num7"},
			{path:"./img/8.png",name:"num8"},
			{path:"./img/9.png",name:"num9"},
			
			{path:"./img/country0.png",name:"country0"},
			{path:"./img/country1.png",name:"country1"},
			{path:"./img/country2.png",name:"country2"},
			{path:"./img/country3.png",name:"country3"},
			{path:"./img/country4.png",name:"country4"},
			{path:"./img/country5.png",name:"country5"},
			{path:"./img/country6.png",name:"country6"},
			{path:"./img/country7.png",name:"country7"},
			{path:"./img/country8.png",name:"country8"},
			{path:"./img/country9.png",name:"country9"},
			{path:"./img/country10.png",name:"country10"},
			{path:"./img/country11.png",name:"country11"},
			{path:"./img/country12.png",name:"country12"},
			{path:"./img/country13.png",name:"country13"},
			{path:"./img/country14.png",name:"country14"},
			{path:"./img/country15.png",name:"country15"},
			{path:"./img/country16.png",name:"country16"},
			
			
			{path:"./img/countryCircle1.png",name:"countryCircle1"},
			{path:"./img/countryCircle2.png",name:"countryCircle2"},
			{path:"./img/countryCircle3.png",name:"countryCircle3"},
			{path:"./img/countryCircle4.png",name:"countryCircle4"},
			{path:"./img/countryCircle5.png",name:"countryCircle5"},
			{path:"./img/countryCircle6.png",name:"countryCircle6"},
			{path:"./img/countryCircle7.png",name:"countryCircle7"},
			{path:"./img/countryCircle8.png",name:"countryCircle8"},
			{path:"./img/countryCircle9.png",name:"countryCircle9"},
			{path:"./img/countryCircle10.png",name:"countryCircle10"},
			{path:"./img/countryCircle11.png",name:"countryCircle11"},
			{path:"./img/countryCircle12.png",name:"countryCircle12"},
			{path:"./img/countryCircle13.png",name:"countryCircle13"},
			{path:"./img/countryCircle14.png",name:"countryCircle14"},
			{path:"./img/countryCircle15.png",name:"countryCircle15"},
			{path:"./img/countryCircle16.png",name:"countryCircle16"},
			
			{path:"./img/leftArrow.png",name:"leftArrow"},
			{path:"./img/rightArrow.png",name:"rightArrow"},
			{path:"./img/miao.png",name:"miao"},
			{path:"./img/wenzi01.png",name:"wenzi01"},
			{path:"./img/wenzi02.png",name:"wenzi02"},
			{path:"./img/wenzi03.png",name:"wenzi03"},
			{path:"./img/shareBtn.png",name:"shareBtn"},
			
			{path:"./img/wenan1.png",name:"wenan1"},
			{path:"./img/wenan2.png",name:"wenan2"},
			{path:"./img/wenan3.png",name:"wenan3"},
			{path:"./img/wenan4.png",name:"wenan4"},
			{path:"./img/logo.png",name:"logo"},
			{path:"./img/cup1.png",name:"cup1"},
			{path:"./img/cup2.png",name:"cup2"},

			{path:"./img/ci.png",name:"times"},
			{path:"./img/boli.png",name:"boli"},
			{path:"./img/startBtn.png",name:"startBtn"},
			{path:"./img/fireworks3.png",name:"fireworks3"},

			{path:"./img/cd3.png",name:"cd3"},
			{path:"./img/cd2.png",name:"cd2"},
			{path:"./img/cd1.png",name:"cd1"},
			{path:"./img/300PX.jpg", name:"300px"},

			{path:"./img/43.png",name:"back41"},
			{path:"./img/42.png",name:"back42"},
			{path:"./img/41.png",name:"back43"},
			{path:"./img/4.jpg",name:"back44"},
			{path:"./img/41.png",name:"back45"},
			{path:"./img/42.png",name:"back46"}
		]
    //执行图片预加载，加载完成后执行main
    loadImages(sources, main); 
};  
function loadImages(sources,callback){    
	canvas =document.getElementById("canvas");  
	context =canvas.getContext("2d");  
	gImg = [];
	GWIDTH = 1540;
	resetCanvasStyle(); 
	canvasPosition =getElementPosition(canvas); 
 	
 	var loadedImages = 0;  
    var numImages = sources.length;  
    context.font='14px bold';
    context.lineWidth=10;
    var clearWidth=canvas.width;
    var clearHeight=canvas.height;
    var src; 

    for (var i = 0; i < numImages; i++) {  
    	src = sources[i];
        gImg[src.name] = new Image();
        gImg[src.name].src = src.path;
        
        //当一张图片加载完成时执行    
        gImg[src.name].onload = function(){ 
            //重绘一个进度条
            context.font = "20px Arial";
			context.fillStyle = '#FFFF00';
            context.clearRect(0,0,clearWidth,clearHeight);
            context.fillText('Loading:'+ loadedImages +'/'+numImages,(clearWidth-130)/2,clearHeight/2-30);
            context.save();
            context.strokeStyle='#555';
            context.beginPath();
            context.moveTo((clearWidth-130)/2 - 85,clearHeight/2+10);
            context.lineTo((clearWidth-130)/2 + 215,clearHeight/2+10);
            context.stroke();
            context.beginPath();
            context.restore();
            context.moveTo((clearWidth-130)/2 - 85,clearHeight/2+10);
            context.lineTo(loadedImages/numImages*300+(clearWidth-130)/2 - 85,clearHeight/2+10);  
            context.stroke();
            //当所有图片加载完成时，执行回调函数callback
            if (++loadedImages >= numImages) {    
                callback();    
            }    
        };   
    }

   	function getElementPosition(element) {  
	    var elem=element, tagname="",x=0, y=0;  
	    while((typeof(elem) =="object") && (typeof(elem.tagName) != "undefined")){  
	        y += elem.offsetTop;  
	        x += elem.offsetLeft;  
	        tagname = elem.tagName.toUpperCase();  
	        if(tagname == "BODY"){  
	            elem=0;
	        }
	        if(typeof(elem) =="object"){  
	            if(typeof(elem.offsetParent) =="object"){  
	                elem = elem.offsetParent;  
	            }  
	        }  
	    }  
	    return {x: x, y: y};  
	}  
	function resetCanvasStyle(){
		if (window.innerWidth >= GWIDTH) {
			canvas.style.width = GWIDTH + 'px';
			canvas.style.left = (window.innerWidth - GWIDTH) / 2 + 'px';
			canvas.width = GWIDTH;
		}else{
			canvas.style.width = window.innerWidth + 'px';
			canvas.style.left = '0px';
			canvas.width = window.innerWidth;
		};
		canvas.style.height = window.innerHeight + 'px';
		canvas.style.top = 0;
		canvas.height = window.innerHeight;
 	}    
} 
function main(){
	var b2Vec2 =Box2D.Common.Math.b2Vec2;  
    var b2AABB =Box2D.Collision.b2AABB;  
    var b2BodyDef =Box2D.Dynamics.b2BodyDef;  
    var b2Body =Box2D.Dynamics.b2Body;  
    var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;  
    var b2Fixture =Box2D.Dynamics.b2Fixture;  
    var b2World =Box2D.Dynamics.b2World;  
    var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape; 
    var b2Shape = Box2D.Collision.Shapes; 
    var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape; 
	var b2DebugDraw =Box2D.Dynamics.b2DebugDraw;  
	var b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef;
	var b2ContactListener = Box2D.Dynamics.b2ContactListener;
	var b2WorldManifold = Box2D.Collision.b2WorldManifold;


	var worldScale = 30;  
	// var dragConstant=0.05;  
	// var dampingConstant = 0;  
	var world = new b2World(new b2Vec2(0, 20),true); 
	
	var gWidth = canvas.width;
	var gHeight = canvas.height;
	var gStatus;
	var gScore;
	var gLife;
	var CFSI;

	var gBtnList = [], renderBtns = [], teams = [];
	var curPage = 1, maxPage = 4;
	var freezer = gImg['country0'];
	var freezerSprite = null;
	var freezerX;
	var freezerY;

	var cds = [];
	var ball, freezer2, ball2; 
	var WIDTH = GWIDTH;
	var HEIGHT = 960;
	var STARTX = gWidth/2 + scaleX(15);
	var STARTY = scaleY(650);
	var _clicksx = 0;
	var _clicksy = 0;
	var fireworks = {
		x: 0,
		y: 0,
		img:gImg['fireworks3'],
		zooms: [],
		start: function(x, y) {
			this.x = x - scaleY(13);
			this.y = y - scaleY(13);
			this.width = scaleY(260);
			this.height = scaleY(260);
			this.zooms = [
				[0.1, 1], [0.1, 1], [0.1, 1], 
				[0.1, 1], [0.1, 1], [0.1, 1], 
				[0.2, 0.9], [0.2, 0.9], [0.2, 0.9], 
				[0.2, 0.9], [0.2, 0.9], [0.2, 0.9], 
				[0.3, 0.8], [0.3, 0.8], [0.3, 0.8], 
				[0.3, 0.8], [0.3, 0.8], [0.3, 0.8], 
				[0.3, 0.7], [0.3, 0.7], [0.3, 0.7],
				[0.3, 0.6], [0.3, 0.6], [0.3, 0.6]
			];
			this.interval = 1
		},
		render: function() {
			if (this.zooms.length > 0) {
				var node = this.zooms.shift();
				context.save();
				
				var _x = this.x - (node[0] - 0.1) * (this.width >> 1);
				var _y = this.y - (node[0] - 0.1) * (this.height >> 1);
				context.globalAlpha = node[1];
				context.drawImage(this.img, 0, 0, this.img.width, this.img.height,  _x,  _y, this.width*node[0], this.height*node[0]);
				
				context.restore();
				node = null;
			}
		}
	}; 

	var startchoose = false;
	var bgCount = 1;
	var flashNum;

	createBtns();

	debugDraw();
	start();       
	// window.setInterval(update,1000/60); 
	//UI界面单起一个循环
	var _lastDate = Date.now(), _isPause = false, _playTimer, _rafRun, _ieDate = _lastDate;
	if (!_playTimer) {
		(_rafRun = function() { //UI界面requestAnimationFrame主循环逻辑
			var _newDate = Date.now();
			if ((_newDate - _lastDate) >= 30) {
				_lastDate = _newDate;
				if (!_isPause) {
					update();
				}
			}
			_newDate = null;
			if (_rafRun)
				_playTimer = requestAnimationFrame(_rafRun);
		})();
	}


	//游戏主逻辑
	function start(){
		for(var b = world.m_bodyList; b != null; b = b.m_next){  
			world.DestroyBody(b);
	    }
	    gScore = 0;
	    gLife = 5;
	    gLevel = 1;
		gStatus = 'start';
		wenan1 = new MoveSprite(scaleX(459), scaleY(206), 20, {x:scaleX(-470), y:scaleY(50)}, {x:scaleX(50), y:scaleY(50)}, 'wenan1', gImg);
		wenan2 = new MoveSprite(scaleX(162), scaleX(162), 20, {x:scaleX(830), y:scaleY(90)}, {x:scaleX(450), y:scaleY(90)}, 'wenan2', gImg);
	}
	function start2(){
		gStatus = 'start2';
		wenan3 = new ZoomSprite(scaleX(87), scaleY(254), scaleX(386), scaleY(53), 2, 1, 30, 'wenan3', gImg);
	}
	function start3(){
		gStatus = 'start3';
		flashNum = 0;
		renderBtns = [gBtnList['startBtn']];
	}
	function choose(){
		gStatus = 'choose';
		flashNum = 0;
		renderBtns = [];
		teams = [gBtnList['team1'], gBtnList['team2'], gBtnList['team3'], gBtnList['team4']];
		for(var btn in teams){
			renderBtns.push(teams[btn]);
	    };
		renderBtns.push(gBtnList['preBtn'], gBtnList['nxtBtn']);
	}
	function reading(){
		gStatus = 'reading';
		flashNum = 0;
		setTimeout(function(){
		    countDown();                    
		},4000);
		renderBtns = [];
	}
	function countDown(){
		gStatus = 'countDown';
		flashNum = 0;
		cds = [
			new ZoomSprite(scaleX(240), scaleY(195), scaleX(100), scaleX(100), 3, 0, 30, 'cd3', gImg),
			new ZoomSprite(scaleX(240), scaleY(195), scaleX(100), scaleX(100), 3, 0, 30, 'cd2', gImg),	
			new ZoomSprite(scaleX(240), scaleY(195), scaleX(100), scaleX(100), 3, 0, 30, 'cd1', gImg)
		]
	}
	function run(){
		gStatus = 'run';
		flashNum = 0;
		ball = createCircle(scaleX(1), gWidth/2/worldScale, scaleY(150)/worldScale, b2Body.b2_dynamicBody, {name: 'ball'});
		var _x = Math.random()*2 - 1;
		ball.SetLinearVelocity(new b2Vec2(_x, 2)); 
		ball.SetAngularVelocity(Math.PI / 2);

		freezerX = STARTX;
		freezerY = STARTY;
		freezer2 = createBox(scaleX(120)/worldScale, scaleY(345)/worldScale, STARTX/worldScale, STARTY/worldScale,  b2Body.b2_kinematicBody, {name: 'freezer'});
		
		createWall();
		gLife = 30;

		GLSI = setInterval(function(){
			gLife--;
		},1000); 
	}
	function over(){ 
		for(var b = world.m_bodyList; b != null; b = b.m_next){  
			world.DestroyBody(b);
	    }
		gStatus = 'over'; 
		document.title = '我参加了“世界杯定出彩”活动，颠球' + gScore + '次，敢来挑战吗？';
		flashNum = 0;
		clearInterval(GLSI);
		ball = createCircle(scaleX(1), gWidth/worldScale, scaleY(800)/worldScale, b2Body.b2_dynamicBody, {name: 'ball'});
		ball.SetLinearVelocity(new b2Vec2(-9, 0)); 
		ball.SetAngularVelocity(Math.PI * 5 / 4);
		ball.GetFixtureList().m_friction = 0.5;
		ball.SetAngularDamping(1000);
		createBox(2/worldScale, gHeight/worldScale, (gWidth/2 + scaleX(60))/worldScale, 0,  b2Body.b2_kinematicBody, {name: 'freezer'});
		ground = createBox(gWidth/worldScale, 2/worldScale, gWidth/2/worldScale, scaleY(830)/worldScale,  b2Body.b2_staticBody, {name:''});
		ground.GetFixtureList().m_friction = 0.5;
	}
	function update(){
	   	world.Step(1/30,10,10);  
	   	world.DrawDebugData(); 
	    world.ClearForces(); 
		context.clearRect(0, 0, gWidth, gHeight);
	    switch(gStatus){
	    	case 'start':
	    		drawImg(gImg['back21'], 0, 0, gWidth, gHeight);
	    		drawImg(gImg['logo'], scaleX(600), scaleY(50), scaleX(136), scaleY(53));
	    		if(!wenan1.action(context)){
	    			if (!wenan2.action(context)) {
	    				start2();
	    			};
	    		}else{
	    			wenan2.action(context);
	    		};
	   			break;
	   		case 'start2':
	    		drawImg(gImg['back21'], 0, 0, gWidth, gHeight);
	    		drawImg(gImg['logo'], scaleX(600), scaleY(50), scaleX(136), scaleY(53));
	    		drawImg(gImg['wenan1'], 50, scaleY(50), scaleX(459), scaleY(206));
	    		drawImg(gImg['wenan2'], scaleX(450), scaleY(90), scaleX(162), scaleX(162));
	    		if(!wenan3.action(context)){
	    			start3();
	    		};
	   			break;
	   		case 'start3':
	    		drawImg(gImg['back21'], 0, 0, gWidth, gHeight);
	    		drawImg(gImg['logo'], scaleX(600), scaleY(50), scaleX(136), scaleY(53));
	    		drawImg(gImg['wenan1'], 50, scaleY(50), scaleX(459), scaleY(206));
	    		drawImg(gImg['wenan2'], scaleX(450), scaleY(90), scaleX(162), scaleX(162));
	    		drawImg(gImg['wenan3'], scaleX(280), scaleY(280), scaleX(386), scaleY(53));
	    		drawImg(gImg['wenan4'], 0, scaleY(435), scaleX(599), scaleY(254));

	    		if (Math.floor(flashNum / 20) % 2) {
	    			drawImg(gImg['cup1'], scaleX(500), scaleY(370), scaleX(263), scaleY(432));
	    			flashNum++;
	    		}else{
	    			drawImg(gImg['cup2'], scaleX(500), scaleY(370), scaleX(263), scaleY(432));
	    			flashNum++;
	    		};
	    		renderBtn();
	   			break;
	   		case 'choose':
	   			if (!startchoose) {
	   				drawImg(gImg['back4'], 0, 0, gWidth, gHeight);
	   			}else{
	   				drawImg(gImg['back4' + bgCount], 0, 0, gWidth, gHeight);
	   				flashNum++;
	   				if (flashNum == 10) {
	   					flashNum = 0;
	   					bgCount++;
	   					if (bgCount == 7) {
	   						bgCount = 1;
	   					};
	   				};
	   			};
	    		
	    		drawImg(gImg['wenzi03'], scaleX(200), scaleY(70), scaleX(360), scaleY(87));
	    		// drawImg(freezer, scaleX(240), scaleY(360), scaleX(300), scaleY(360));
	    		if (freezerSprite) {
	    			if (!freezerSprite.action(context)) {
	    				freezerSprite = null;
	    			};
	    		}else{
	    			drawImg(freezer, scaleX(250), scaleY(360), scaleX(300), scaleY(360));
	    		}

	    		// freezerSprite && !freezerSprite.action;
	    		renderBtns = [];
	    		for(var btn in teams){
					renderBtns.push(teams[btn]);
			    };
				renderBtns.push(gBtnList['preBtn'], gBtnList['nxtBtn']);
				if (freezer != gImg['country0']) {
					renderBtns.push(gBtnList['runBtn']);
				};
				
				renderBtn();
	   			break;
	   		case 'reading':
	    		drawImg(gImg['back21'], 0, 0, gWidth, gHeight);
	    		drawImg(gImg['football'], gWidth/2-scaleX(15), scaleY(120), scaleX(60), scaleX(60));
	    		drawImg(gImg['wenzi02'], scaleX(110), scaleY(310), scaleX(540), scaleY(87));
	    		drawImg(freezer, scaleX(250), scaleY(478), scaleX(300), scaleY(360));
	   			break;
	   		case 'countDown':
	    		drawImg(gImg['back21'], 0, 0, gWidth, gHeight);
	    		drawImg(gImg['football'], gWidth/2-scaleX(15), scaleY(120), scaleX(60), scaleX(60));
	    		
	    		drawImg(freezer, scaleX(250), scaleY(478), scaleX(300), scaleY(360));
	    		if (cds[0]) {
	    			if(!cds[0].action(context)){
	    				cds.shift();
	    			}
	    		}else{
	    			run();
	    		};
	   			break;
	   		case 'run':
	   			if (Math.floor(flashNum / 20) % 2) {
	    			drawImg(gImg['back21'], 0, 0, gWidth, gHeight);
	    			flashNum++;
	    		}else{
	    			drawImg(gImg['back22'], 0, 0, gWidth, gHeight);
	    			flashNum++;
	    		};
	    		if (gLife == 0) {
					over();
				};

				var _scoreImg = translateNumToPic(gScore);
				drawImg(_scoreImg[0], scaleX(400), scaleY(50), scaleX(50), scaleY(60));
				drawImg(_scoreImg[1], scaleX(450), scaleY(50), scaleX(50), scaleY(60));
				drawImg(gImg['times'], scaleX(500), scaleY(50), scaleX(50), scaleY(60));

				var _lifeImg = translateNumToPic(gLife);
				drawImg(_lifeImg[0], scaleX(200), scaleY(50), scaleX(50), scaleY(60));
				drawImg(_lifeImg[1], scaleX(250), scaleY(50), scaleX(50), scaleY(60));
				drawImg(gImg['miao'], scaleX(300), scaleY(50), scaleX(50), scaleY(60));
	    		

				freezer2.SetPositionAndAngle(new b2Vec2(freezerX/worldScale, freezerY/worldScale), 0);
	    		for(var b = world.m_bodyList; b != null; b = b.m_next){  
	    			var pos = b.GetPosition();
					if (b.GetUserData()) {
						var _name = b.GetUserData().name;

			    		if(_name == "ball") {
			    			var img = gImg['football'], angle = b.GetAngle();

			    			context.save();
			    			//context.drawImage(img, 0, 0, img.width, img.height,  pos.x * worldScale-scaleX(30),  pos.y * worldScale-scaleY(30), scaleX(60), scaleY(60));
					       	context.translate(pos.x * worldScale, pos.y * worldScale);
					       	context.rotate(angle);
					       	context.translate(-pos.x * worldScale, -pos.y * worldScale);
					       	context.drawImage(img, 0, 0, img.width, img.height,  pos.x * worldScale-scaleX(30),  pos.y * worldScale-scaleX(30), scaleX(60), scaleX(60));
						   	context.restore();
						   	// drawImg(gImg['football'], pos.x * worldScale - 30, pos.y * worldScale - 30, 60, 60);
						   	if (pos.y * worldScale > scaleY(488)) {
						   		over();
						   	};
			            }else if(_name == "freezer"){
			            	drawImg(freezer, pos.x * worldScale - scaleX(150), pos.y * worldScale - scaleY(190), scaleX(300), scaleY(360));
			            }
			    	}
			    	//跳出屏幕则回收body
			    	if (b && (pos.y > gHeight / worldScale || pos.x < 0 || pos.x > gWidth /worldScale) ){
			    		world.DestroyBody(b);
			    	};
			    }
			    fireworks.render();

	   			break;
	   		case 'over':
	   			drawImg(gImg['back3'], 0, 0, gWidth, gHeight);
	    		drawImg(gImg['logo'], scaleX(600), scaleY(50), scaleX(136), scaleY(53));

				drawImg(gImg['boli'], scaleX(245), scaleY(125), scaleX(290), scaleY(156));
	    		var _scoreImg = translateNumToPic(gScore);
				drawImg(_scoreImg[0], scaleX(275), scaleY(165), scaleX(80), scaleY(80));
				drawImg(_scoreImg[1], scaleX(355), scaleY(165), scaleX(80), scaleY(80));
				drawImg(gImg['times'], scaleX(435), scaleY(165), scaleX(80), scaleY(80));

				drawImg(gImg['wenzi01'], scaleX(65), scaleY(360), scaleX(659), scaleY(87));
				drawImg(freezer, scaleX(240), scaleY(478), scaleX(300), scaleY(360));

				for(var b = world.m_bodyList; b != null; b = b.m_next){  
	    			var pos = b.GetPosition();
					if (b.GetUserData()) {
						var _name = b.GetUserData().name;

			    		if(_name == "ball") {
			    			var img = gImg['football'], angle = b.GetAngle();

			    			context.save();
			    			//context.drawImage(img, 0, 0, img.width, img.height,  pos.x * worldScale-scaleX(30),  pos.y * worldScale-scaleY(30), scaleX(60), scaleY(60));
					       	context.translate(pos.x * worldScale, pos.y * worldScale);
					       	context.rotate(angle);
					       	context.translate(-pos.x * worldScale, -pos.y * worldScale);
					       	context.drawImage(img, 0, 0, img.width, img.height,  pos.x * worldScale-30,  pos.y * worldScale-30, scaleX(60), scaleX(60));
						   	context.restore();
			            }
			    	}
			    }
	    		break;
	    	default:
	    		break;
	    }
	    
	}
	function drawImg(img, x, y, w, h){
		context.save();
       	context.drawImage(img, 0, 0, img.width, img.height,  x,  y, w, h);
	   	context.restore();
	}
	function debugDraw() {  
	    var debugDraw = new b2DebugDraw();  
	    debugDraw.SetSprite(context);  
	    debugDraw.SetDrawScale(worldScale);  
	    debugDraw.SetFillAlpha(0.5);  
	    debugDraw.SetLineThickness(1.0);  
	    debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);  
	    world.SetDebugDraw(debugDraw);  
	}
	function getBodyAtMouse() {
	   mousePVec = new b2Vec2(mouseX/worldScale, mouseY/worldScale);
	   var aabb = new b2AABB();
	   aabb.lowerBound.Set(mouseX/worldScale - 0.001, mouseY/worldScale - 0.001);
	   aabb.upperBound.Set(mouseX/worldScale + 0.001, mouseY/worldScale + 0.001);
       selectedBody = null;
	   world.QueryAABB(getBodyCB, aabb);
	   return selectedBody;
	}
	function getBodyCB(fixture) {
	   if(fixture.GetBody().GetType() != b2Body.b2_staticBody) {
	      	if(fixture.GetShape().TestPoint(fixture.GetBody().GetTransform(), mousePVec)) {
	        	selectedBody = fixture.GetBody();
	      	}
	   }
	}
	function createBtns(){ 
		gBtnList['startBtn'] = new Button(scaleX(325), scaleY(720), scaleX(150), scaleX(150), 'startBtn', gImg, function(){
			choose();
		});
		gBtnList['preBtn'] = new Button(scaleX(30), scaleX(190), scaleX(76), scaleX(121), 'leftArrow', gImg, function(){
			var _idx;
			if (curPage == 1) {
				return false;
			}else{
				curPage--;
				_idx = (curPage - 1) * 4 + 1; 
				teams = [gBtnList['team' + (_idx++)], gBtnList['team' + (_idx++)], gBtnList['team' + (_idx++)], gBtnList['team' + (_idx++)]];
			};
		});
		gBtnList['nxtBtn'] = new Button(scaleX(660), scaleX(190), scaleX(76), scaleX(121), 'rightArrow', gImg, function(){
			var _idx;
			if (curPage == maxPage) {
				return false;
			}else{
				curPage++;
				_idx = (curPage - 1) * 4 + 1; 
				teams = [gBtnList['team' + (_idx++)], gBtnList['team' + (_idx++)], gBtnList['team' + (_idx++)], gBtnList['team' + (_idx++)]];
			};
		});
		for(var i = 1; i <= 16; i++){
			gBtnList['team' + i] = new Button(scaleX(110 + (i%4)*140), scaleX(180), scaleX(120), scaleX(129), 'countryCircle' + i, gImg, (function(index) {
				return function(){
					freezer = gImg['country' + index];
					startchoose = true;
					freezerSprite = new ZoomSprite(scaleX(340), scaleY(468), scaleX(300), scaleY(360), 0.4, 1, 30, 'country' + index, gImg);
				};
			})(i));
		}
		gBtnList['runBtn'] = new Button(scaleX(325), scaleY(750), scaleX(150), scaleX(150), 'startBtn', gImg, function(){
			reading();
		});
	}
	function renderBtn(){
		for(var btn in renderBtns){
			renderBtns[btn].render(context);
	    }
	}

	function scaleX(x){
		return Math.floor(x * (canvas.width / 770));
	}
	function scaleY(y){
		return Math.floor(y * (canvas.height / HEIGHT));
	}

	//处理鼠标事件
	var mouseX, mouseY, mousePVec, isMouseDown = false, mouseJoint;
	var _started = false, _startX = null, _startY = null, _endX = null, _endY = null, _startDate = null;
	document.addEventListener("mousedown", handleMouseDown, true);
	document.addEventListener("mousemove", handleMouseMove, true);
	document.addEventListener("mouseup", handleMouseUp, true);
	document.addEventListener("touchstart", handleMouseDown, true);
	document.addEventListener("touchmove", handleMouseMove, true);
	document.addEventListener("touchup", handleMouseUp, true);
	
	//因为canvas与事件对象坐标轴不一致，所以需要对x轴y轴进行转换
	function setMousePosition(e){
	   	var _e = e.targetTouches ? e.targetTouches[0] : e;
		mouseX = (_e.clientX - canvasPosition.x);
	   	mouseY = (_e.clientY - canvasPosition.y);
	   	_e = null;
	}
	function handleMouseDown(e) {
	   	setMousePosition(e);

	   	for(var btn in renderBtns){
			renderBtns[btn].click(mouseX, mouseY);
	    }

	    if(gStatus == 'run'){
	    	var body = getBodyAtMouse();
	       	if(body) {
	       		if (body.GetUserData().name == 'freezer') {
	       			isMouseDown = true;
	       			_clicksx = mouseX;
	       			_clicksy = mouseY;
	       		};
	        }
	    }
	};

	function handleMouseMove(e) {
		if (e.preventDefault) {
			e.preventDefault();
		}
		setMousePosition(e);
		if (gStatus == 'run') {
			if (isMouseDown) {
				// freezer2.position.Set(STARTX + (mouseX - _clicksx), STARTY + (mouseY - _clicksy)); 
				// freezer2.SetTransform((STARTX + (mouseX - _clicksx), STARTY + (mouseY - _clicksy)));
				var _x = STARTX + (mouseX - _clicksx);
				if (_x + scaleX(120) > gWidth) {
					_x = gWidth-scaleX(120);
				}else if (_x < scaleX(120)) {
					_x = scaleX(120);	
				};
				freezerX = _x;
				_x = null;
			};
		}
	};
	function handleMouseUp(e) {
		setMousePosition(e);
		if (gStatus == 'run') {
			if (isMouseDown) {
				STARTX = freezer2.GetPosition().x * worldScale;
				freezerX = STARTX;
			};
		}

		isMouseDown = false;
	};
	function createBox(width,height,pX,pY,type, userData){  
	    var bodyDef = new b2BodyDef;  
	    bodyDef.type = type;  
	    bodyDef.position.Set(pX, pY);  
	    bodyDef.userData=userData; 
	   
	    var polygonShape = new b2PolygonShape;  
	    polygonShape.SetAsBox(width/2, height/2);  
	   
	    var fixtureDef = new b2FixtureDef;  
	    fixtureDef.density = 1.0;  
	    fixtureDef.friction = 0;  
	    fixtureDef.restitution = 1;  
	    fixtureDef.shape = polygonShape;    
	         
	    var body = world.CreateBody(bodyDef);  
	    body.CreateFixture(fixtureDef); 
	    // body.SetAngle(angle);

	    return body;
	}
	function createCircle(radius,pX,pY,type, userData){  
	    var bodyDef = new b2BodyDef;  
	    bodyDef.type = type;  
	    bodyDef.position.Set(pX, pY);  
	    bodyDef.userData=userData; 
	   
	    var circleShape = new b2CircleShape;  
	    circleShape.SetRadius(radius);   

	    var fixtureDef = new b2FixtureDef;  
	    fixtureDef.density = 1;  
	    fixtureDef.friction = 0;  
	    fixtureDef.restitution = 1;  
	    fixtureDef.shape = circleShape;
	         
	    var body = world.CreateBody(bodyDef);  
	    body.CreateFixture(fixtureDef); 
	    // body.SetAngle(angle);

	    return body;
	}
	function createWall(){
		createBox(gWidth/worldScale, 2/worldScale, gWidth/2/worldScale, (gHeight-2)/worldScale,  b2Body.b2_staticBody, {name:''});
		createBox(gWidth/worldScale, 2/worldScale, gWidth/2/worldScale, 0,  b2Body.b2_staticBody, {name:''});
		createBox(2/worldScale, gHeight/worldScale, (gWidth-2)/worldScale, gHeight/2/worldScale,  b2Body.b2_staticBody, {name:''});
		createBox(2/worldScale, gHeight/worldScale, 0, gHeight/2/worldScale,  b2Body.b2_staticBody, {name:''});
	}
	function translateNumToPic(num){
		if (num < 100) {
			// if(Math.floor((num / 10)))
			return [
				gImg['num' + Math.floor((num / 10))],
				gImg['num' + (num % 10)]
			]
		}else{
			return [
				gImg['num0'],
				gImg['num0']
			]
		}
	}
	var contactListener = new b2ContactListener();
    contactListener.BeginContact = calculateScore;
    world.SetContactListener(contactListener);

	function calculateScore(contact){
		var _contactA;
		var _contactB;
		var pos, manifold = new b2WorldManifold;
		_contactA = contact.GetFixtureA().GetBody();
		_contactB = contact.GetFixtureB().GetBody();
		if (_contactA.GetUserData().name == 'ball' && _contactB.GetUserData().name == 'freezer') {
			gScore++;
			contact.GetWorldManifold(manifold);
			pos = manifold.m_points[0];
			fireworks.start(pos.x * worldScale, pos.y*worldScale);
		};
		if (_contactB.GetUserData().name == 'ball' && _contactA.GetUserData().name == 'freezer') {
			gScore++;
			contact.GetWorldManifold(manifold);
			pos = manifold.m_points[0];
			fireworks.start(pos.x * worldScale, pos.y*worldScale);
		};
	}
}