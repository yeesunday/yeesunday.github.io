window.onload = function(){    
    var sources = [
			{path:"./img/football.png",name:"football"},
			{path:"./img/3.jpg",name:"back3"},
			{path:"./img/2.jpg",name:"back2"},
			{path:"./img/1.jpg",name:"back1"},
			{path:"./img/1g.jpg",name:"back0"},
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
			
			
			{path:"./img/ci.png",name:"times"},
			{path:"./img/startBtn.png",name:"startBtn"}
		]
    //执行图片预加载，加载完成后执行main
    loadImages(sources, main); 
};  
function loadImages(sources,callback){    
	canvas =document.getElementById("canvas");  
	context =canvas.getContext("2d");  
	resetCanvasStyle(); 
	canvasPosition =getElementPosition(canvas); 
	gImg = [];
 	
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
            context.font = "40px Arial";
			context.fillStyle = '#FFFF00';
            context.clearRect(0,0,clearWidth,clearHeight);
            context.fillText('Loading:'+ loadedImages +'/'+numImages,200,280);
            context.save();
            context.strokeStyle='#555';
            context.beginPath();
            context.moveTo(120,300);
            context.lineTo(520,300);
            context.stroke();
            context.beginPath();
            context.restore();
            context.moveTo(120,300);
            context.lineTo(loadedImages/numImages*400+120,300);  
            context.stroke();
            //当所有图片加载完成时，执行回调函数callback
            if (++loadedImages >= numImages) {    
                callback();    
            }    
        };   
    }
    // console.log(gImg, loadedImages, numImages, 111);
    // callback(); 

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
		if (window.innerWidth >= 770) {
			canvas.style.width = 770 + 'px';
			canvas.style.left = (window.innerWidth - 770) / 2 + 'px';
			canvas.width = 770;
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

	var worldScale = 30;  
	// var dragConstant=0.05;  
	// var dampingConstant = 0;  
	var world = new b2World(new b2Vec2(0, 10),true); 
	
	var gWidth = canvas.width;
	var gHeight = canvas.height;
	var gStatus;
	var gScore;
	var gLife;
	var CFSI;

	var gBtnList = [], renderBtns = [], teams = [];
	var curPage = 1, maxPage = 4;
	var freezer = gImg['country0'];
	var cds = [];
	var ball, freezer2, ball2; 
	var WIDTH = 770;
	var HEIGHT = 960;

	createBtns();

	debugDraw();
	start();       
	window.setInterval(update,1000/60); 

	//游戏主逻辑
	function start(){
		for(var b = world.m_bodyList; b != null; b = b.m_next){  
			world.DestroyBody(b);
	    }
	    gScore = 0;
	    gLife = 5;
	    gLevel = 1;
		gStatus = 'start';
		renderBtns = [gBtnList['startBtn']];
	}
	function choose(){
		gStatus = 'choose';
		renderBtns = [];
		teams = [gBtnList['team1'], gBtnList['team2'], gBtnList['team3'], gBtnList['team4']];
		for(var btn in teams){
			renderBtns.push(teams[btn]);
	    };
		renderBtns.push(gBtnList['preBtn'], gBtnList['nxtBtn']);
	}
	function reading(){
		gStatus = 'reading';
		setTimeout(function(){
		    countDown();                    
		},000);
	}
	function countDown(){
		gStatus = 'countDown';
		cds = [
			new ZoomSprite(scaleX(330), scaleY(270), 100, 100, 60, 'num3', gImg),
			new ZoomSprite(scaleX(330), scaleY(270), 100, 100, 60, 'num2', gImg),	
			new ZoomSprite(scaleX(330), scaleY(270), 100, 100, 60, 'num1', gImg)
		]
		// CFSI = setInterval(createFruits,3000); 
	}
	function run(){
		gStatus = 'run';
		ball = createCircle(1, gWidth/2/worldScale, scaleY(150)/worldScale, b2Body.b2_dynimacBody, {name: 'ball'});
		ball.SetLinearVelocity(new b2Vec2(0, -1)); 
		freezer2 = createBox(scaleX(120)/worldScale, scaleY(345)/worldScale, gWidth/2/worldScale, scaleY(650)/worldScale,  b2Body.b2_dynimacBody, {name: 'freezer'});
		createWall();
		gLife = 30;
		// CFSI = setInterval(createFruits,3000); 

	}
	function over(){ 
		gStatus = 'over'; 
		// clearInterval(CFSI);
	}
	function update(){
	   	world.Step(1/60,10,10);  
	   	world.DrawDebugData(); 
	    world.ClearForces(); 
		context.clearRect(0, 0, gWidth, gHeight);
	    switch(gStatus){
	    	case 'start':
	    		drawImg(gImg['back1'], 0, 0, gWidth, gHeight);
	    		renderBtn();
	   			break;
	   		case 'choose':
	    		drawImg(gImg['back1'], 0, 0, gWidth, gHeight);
	    		drawImg(gImg['wenzi03'], scaleX(200), scaleY(70), scaleX(360), scaleY(87));
	    		drawImg(freezer, scaleX(240), scaleY(360), scaleX(300), scaleY(360));
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
	   			drawImg(gImg['back2'], 0, 0, gWidth, gHeight);
	    		drawImg(gImg['wenzi02'], scaleX(110), scaleY(70), scaleX(540), scaleY(87));
	    		drawImg(freezer, scaleX(240), scaleY(360), scaleX(300), scaleY(360));
	   			break;
	   		case 'countDown':
	   			drawImg(gImg['back2'], 0, 0, gWidth, gHeight);
	    		drawImg(gImg['wenzi02'], scaleX(110), scaleY(70), scaleX(540), scaleY(87));
	    		drawImg(freezer, scaleX(240), scaleY(360), scaleX(300), scaleY(360));
	    		if (cds[0]) {
	    			if(!cds[0].action(context)){
	    				cds.shift();
	    			}
	    		}else{
	    			run();
	    		};
	   			break;
	   		case 'run':
	   			drawImg(gImg['back2'], 0, 0, gWidth, gHeight);
	    		if (gLife == 0) {
					over();
				};

				context.font = "40px Arial";
				context.fillStyle = '#FFFF00';
				var _scoreImg = translateNumToPic(gScore);
				drawImg(_scoreImg[0], scaleX(600), scaleY(100), scaleX(50), scaleY(60));
				drawImg(_scoreImg[1], scaleX(650), scaleY(100), scaleX(50), scaleY(60));
				drawImg(gImg['times'], scaleX(700), scaleY(100), scaleX(50), scaleY(60));

				var _lifeImg = translateNumToPic(gLife);
				drawImg(_lifeImg[0], scaleX(100), scaleY(100), scaleX(50), scaleY(60));
				drawImg(_lifeImg[1], scaleX(150), scaleY(100), scaleX(50), scaleY(60));
	    		
	    		for(var b = world.m_bodyList; b != null; b = b.m_next){  
	    			var pos = b.GetPosition();
					if (b.GetUserData()) {
						var _name = b.GetUserData().name;

			    		if(_name == "ball") {
			    			drawImg(gImg['football'], pos.x * worldScale-30, pos.y * worldScale-30, 60, 60);
			            }else if(_name == "freezer"){
			            	drawImg(freezer, pos.x * worldScale - scaleX(150), pos.y * worldScale - scaleY(180), scaleX(300), scaleY(360));
			            }
			    	}
			    	//跳出屏幕则回收body
			    	if (b && (pos.y > gHeight / worldScale || pos.x < 0 || pos.x > gWidth /worldScale) ){
			    		world.DestroyBody(b);
			    	};
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
	   mousePVec = new b2Vec2(mouseX, mouseY);
	   var aabb = new b2AABB();
	   aabb.lowerBound.Set(mouseX - 0.001, mouseY - 0.001);
	   aabb.upperBound.Set(mouseX + 0.001, mouseY + 0.001);
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
		gBtnList['startBtn'] = new Button(scaleX(335), scaleY(740), scaleX(110), scaleY(110), 'startBtn', gImg, function(){
			choose();
		});
		gBtnList['preBtn'] = new Button(scaleX(30), scaleY(190), scaleX(76), scaleY(121), 'leftArrow', gImg, function(){
			var _idx;
			if (curPage == 1) {
				return false;
			}else{
				curPage--;
				_idx = (curPage - 1) * 4 + 1; 
				teams = [gBtnList['team' + (_idx++)], gBtnList['team' + (_idx++)], gBtnList['team' + (_idx++)], gBtnList['team' + (_idx++)]];
			};
		});
		gBtnList['nxtBtn'] = new Button(scaleX(660), scaleY(190), scaleX(76), scaleY(121), 'rightArrow', gImg, function(){
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
			gBtnList['team' + i] = new Button(scaleX(110 + (i%4)*140), scaleY(180), scaleX(120), scaleY(129), 'countryCircle' + i, gImg, (function(index) {
				return function(){
					freezer = gImg['country' + index];
					console.log(index);
				};
			})(i));
		}
		gBtnList['runBtn'] = new Button(scaleX(335), scaleY(770), scaleX(110), scaleY(110), 'startBtn', gImg, function(){
			reading();
		});
	}
	function renderBtn(){
		for(var btn in renderBtns){
			renderBtns[btn].render(context);
	    }
	}

	function scaleX(x){
		return x * (canvas.width / WIDTH);
	}
	function scaleY(y){
		return y * (canvas.height / HEIGHT);
	}

	//处理鼠标事件
	var mouseX, mouseY, mousePVec, isMouseDown, mouseJoint;
	var _started = false, _startX = null, _startY = null, _endX = null, _endY = null, _startDate = null;
	document.addEventListener("mousedown", handleMouseDown, true);
	document.addEventListener("mousemove", handleMouseMove, true);
	document.addEventListener("mouseup", handleMouseUp, true);
	document.addEventListener("touchstart", handleMouseDown, true);
	document.addEventListener("touchmove", handleMouseMove, true);
	document.addEventListener("touchup", handleMouseUp, true);
	
	//因为canvas与事件对象坐标轴不一致，所以需要对x轴y轴进行转换
	function setMousePosition(e){
		mouseX = (e.clientX - canvasPosition.x);
	   	mouseY = (e.clientY - canvasPosition.y);
	}
	function handleMouseDown(e) {
	  	isMouseDown = true;
	   	setMousePosition(e);

	   	for(var btn in renderBtns){
			renderBtns[btn].click(mouseX, mouseY);
	    }
		// switch(gStatus){
		// 	case 'start':
		// 		var _sx = _startX * worldScale;
		// 		var _sy = _startY * worldScale;
		// 		console.log('start');
		// 		//点击新游戏按钮
		// 		if ((_sx > 195) && (_sx < 445) && (_sy > gHeight - 188) && (_sy < gHeight - 112)) {
		// 			console.log('start222');
		// 			run();
		// 		};
		// 		break;
		// 	case 'run':
		// 		_startDate = Date.now();
		// 		if (!_started) {
		// 			_started = true;
		// 		}
		// 	   	//销毁物体
		// 	   	var body = getBodyAtMouse();
		// 	   	if(body) {
		// 	   		if (body.GetUserData().type == 'fruit') {
		// 	   			body.GetUserData().type = 'waitingDestroyFruit';	
		// 	   			gScore += 1;
		// 	   		};
		// 	    }
		// 		break;
		// 	case 'over':
		// 		var _sx = _startX * worldScale;
		// 		var _sy = _startY * worldScale;
		// 		//点击继续按钮
		// 		if ((_sx > 195) && (_sx < 445) && (_sy > gHeight - 188) && (_sy < gHeight - 112)) {
		// 			start();
		// 		};
		// 		break;
		// 	default:
		// 		break;
		// }
	};

	function handleMouseMove(e) {
		// if (e.preventDefault) {
		// 	e.preventDefault();
		// }
		// if(!isMouseDown){
		// 	return false;
		// }
		// if (gStatus == 'run') {
		// 	setMousePosition(e);
		// 	if (_startDate && Date.now() - _startDate >= 100) {
		// 		_startDate = null;
		// 		_endX = mouseX;
		// 		_endY = mouseY;

		// 		//创建鼠标滑动产生的刀剑刚体
		// 		var _angle = Math.atan2(_endY-_startY, _endX - _startX);
		// 		var _side = Math.sqrt(Math.pow((_endX - _startX), 2) + Math.pow((_endY - _startY), 2));
		// 		var _userData = {
		//     		type: "blade",
		//     		name: 'blade',
		//     		width: _side,
		//     		height: 0.5
		//     	};
		// 		var _blade = createBox(_side >> 1, 1, (_startX + _endX )>> 1, (_startY + _endY) >> 1, _angle, b2Body.b2_kinematicBody, _userData);
		// 		calculateScore(_blade);
		//     }			
		// };
		// return true;
	};
	function handleMouseUp(e) {
		// isMouseDown = false;
	 //   	mouseX = undefined;
	 //   	mouseY = undefined;
	 //   	_started = false;
	 //   	_startX = null;
	 //   	_startY = null;
	 //   	_endX = null;
	 //   	_endY = null; 
	 //   	startDate = null;
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
	    fixtureDef.friction = 0.5;  
	    fixtureDef.restitution = 0.5;  
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
	    fixtureDef.density = 1.0;  
	    fixtureDef.friction = 0.5;  
	    fixtureDef.restitution = 0.5;  
	    fixtureDef.shape = circleShape;
	         
	    var body = world.CreateBody(bodyDef);  
	    body.CreateFixture(fixtureDef); 
	    // body.SetAngle(angle);

	    return body;
	}
	function createWall(){
		createBox(gWidth/worldScale, 2/worldScale, gWidth/2/worldScale, (gHeight-2)/worldScale,  b2Body.b2_staticBody, null);
		createBox(gWidth/worldScale, 2/worldScale, gWidth/2/worldScale, 0,  b2Body.b2_staticBody, null);
		createBox(2/worldScale, gHeight/worldScale, (gWidth-2)/worldScale, gHeight/2/worldScale,  b2Body.b2_staticBody, null);
		createBox(2/worldScale, gHeight/worldScale, 0, gHeight/2/worldScale,  b2Body.b2_staticBody, null);
	}
	function translateNumToPic(num){
		return [
			gImg['num' + (num / 10)],
			gImg['num' + (num % 10)]
		]
	}
}