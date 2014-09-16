window.onload = function(){    
    var sources = [
			{ id: 'banana', src: 'img/s0.png'},
			{ id: 'strawberry', src: 'img/s1.png'},
			{ id: 'kiwi', src: 'img/s2.png'},
			{ id: 'apple', src: 'img/s3.png'},
			{ id: 'watermelon', src: 'img/s4.png'},
			{ id: 'pear', src: 'img/s5.png'},
			{ id: 'bear', src: 'img/s6.png'},

			{ id: 'bananaBg', src: 'img/s7.png'},
			{ id: 'strawberryBg', src: 'img/s8.png'},
			{ id: 'kiwiBg', src: 'img/s9.png'},
			{ id: 'appleBg', src: 'img/s10.png'},
			{ id: 'watermelonBg', src: 'img/s11.png'},
			{ id: 'pearBg', src: 'img/s12.png'},
			{ id: 'bearBg', src: 'img/s12.png'},

			{ id: 'bananaPiece1', src: 'img/s13.png'},
			{ id: 'bananaPiece2', src: 'img/s14.png'},
			{ id: 'strawberryPiece', src: 'img/s15.png'},
			{ id: 'kiwiPiece', src: 'img/s16.png'},
			{ id: 'applePiece', src: 'img/s17.png'},
			{ id: 'watermelonPiece', src: 'img/s18.png'},
			{ id: 'pearPiece', src: 'img/s19.png'},
			{ id: 'bearPiece1', src: 'img/s20.png'},
			{ id: 'bearPiece2', src: 'img/s21.png'},

			{ id: 'startBg', src: 'img/t.jpg'},
			{ id: 'startButton', src: 'img/ng.png'},
			{ id: 'continueButton', src: 'img/continue.png'},

			{ id: 'level1', src: 'img/l1.jpg'},
			{ id: 'level2', src: 'img/l2.jpg'},
			{ id: 'level3', src: 'img/l3.jpg'},

			{ id: 'blade', src: 'img/sb.png'}
		]
    //执行图片预加载，加载完成后执行main
    loadImages(sources,main);    
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

    console.log(sources, numImages);
    for (var i = 0; i < numImages; i++) {  
    	src = sources[i];
        gImg[src.id] = new Image();
        gImg[src.id].src = src.src;

        //当一张图片加载完成时执行    
        gImg[src.id].onload = function(){ 
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
		canvas.style.width = 640 + 'px';
		canvas.style.height = window.innerHeight + 'px';
		canvas.style.left = (window.innerWidth - 640) / 2;
		canvas.style.top = 0;
		canvas.width = 640;
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
	var dragConstant=0.05;  
	var dampingConstant = 0;  
	
	var maxFruitNum = 4;
	var gWidth = canvas.clientWidth;
	var gHeight = canvas.clientHeight;
	console.log(gWidth, gHeight, canvas.width, canvas.height);
	var initAngle = 80 * Math.PI / 180;
	var minPx = 200;
	var maxPx = 440;
	var fruits = [];
	var _scaleX = worldScale*1.3;
	var _scaleY = worldScale*4;
	var fruitsBox = [
		{ id: 'banana', size: {x:253/_scaleX, y:160/_scaleY}},
		{ id: 'strawberry', size: {x:162/_scaleX, y:160/_scaleY}},
		{ id: 'kiwi', size: {x:178/_scaleX, y:160/_scaleY}},
		{ id: 'apple', size: {x:173/_scaleX, y:160/_scaleY}},
		{ id: 'watermelon', size: {x:224/_scaleX, y:160/_scaleY}},
		{ id: 'pear', size: {x:189/_scaleX, y:160/_scaleY}},
		{ id: 'bear', size: {x:186/_scaleX, y:160/_scaleY}}
	]
	var gStatus;
	var gScore;
	var gLife;
	var gLevel;
	var CFSI;

	world = new b2World(new b2Vec2(0, 10), true);
	debugDraw();
	start();       
	window.setInterval(update,1000/60); 
	
	var effect = {
		list: [],
		addEffect: function(x, y, imgId, scaleX, scaleY, angle) {
			this.list.push({ 
				x: x, 
				y: y, 
				imgId: imgId, 
				frames: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9, 0.9, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0], 
				index: 0 ,
				scaleX: scaleX,
				scaleY: scaleY,
				angle: angle
			});
			return this;
		},
		clearEffects: function() {
			this.list = [];
			return this;
		},
		action: function() {
			var _efect;
			for (var i = this.list.length - 1; i >= 0; i--) {
				if (_effect = this.list[i]) {
					if (_effect.index++ >= _effect.frames.length - 1) {
						this.list.splice(i, 1);
					}
				}
			}
			_effect = null;
			return this;
		},
		render: function() {
			var _efect;
			for (var i = this.list.length - 1; i >= 0; i--) {
				if (_effect = this.list[i]) {
					context.globalAlpha = _effect.frames[_effect.index];
					drawImg(gImg[_effect.imgId], _effect.x, _effect.y, _effect.scaleX, _effect.scaleY, _effect.angle);
					context.globalAlpha = 1;
				}
			}
			_effect = null;
			return this;
		}
	};

	//游戏主逻辑
	function start(){
		for(var b = world.m_bodyList; b != null; b = b.m_next){  
			world.DestroyBody(b);
	    }
	    gScore = 0;
	    gLife = 5;
	    gLevel = 1;
		gStatus = 'start';
	}
	function run(){
		gStatus = 'run';
		CFSI = setInterval(createFruits,3000); 
	}
	function over(){ 
		gStatus = 'over'; 
		clearInterval(CFSI);
	}

	function update() {  
	    world.Step(1/60,10,10);  
	   	world.DrawDebugData(); 
	    world.ClearForces(); 
	    context.clearRect(0, 0, gWidth, gHeight);
	    switch(gStatus){
	    	case 'start':
	    		drawImg(gImg['startBg'], gWidth >> 1, gHeight >> 1, gWidth / 768, gHeight /1024, Math.PI/2);
	    		drawImg(gImg['startButton'], 320, gHeight-150, 1, 1, Math.PI/2);
	    		break;
	    	case 'run':
	    		//当生命为0游戏结束
	    		if (gLife == 0) {
					over();
				};
				//当前关卡
				if (gScore < 100) {
					gLevel = 1;
				}else if (gScore > 100 && gScore < 200) {
					gLevel = 2;
				}else if (gScore > 300) {
					gLevel = 3;
				};
				drawImg(gImg['level' + gLevel], gWidth >> 1, gHeight >> 1, gWidth / 768, gHeight /1024, Math.PI/2);

	    		context.font = "40px Arial";
				context.fillStyle = '#FFFF00';
	    		context.fillText(gScore, 10, 50);
	    		context.fillText(gLife, 600, 50);
	    		context.fillText('Level ' + gLevel, 260, 50);
	    		
	    		for(var b = world.m_bodyList; b != null; b = b.m_next){  
					if (b.GetUserData()) {
			    		var pos = b.GetPosition();
			    		var _type = b.GetUserData().type;
						var _name = b.GetUserData().name;
					   	var _img = gImg[_name];

			    		if(_type == "fruit") {
			    			drawImg(_img, pos.x * worldScale, pos.y * worldScale, 2/3, 2/3, b.GetAngle());
			    			if (pos.y > gHeight / worldScale) {
			    				world.DestroyBody(b);
			    				gLife -= 1;
			    			};
			            }else if(_type == "waitingDestroyFruit"){
			            	if (_name != 'bear') {
								effect.addEffect(pos.x * worldScale, pos.y * worldScale, _name + 'Bg', 1, 1, 0);
			            	};
							playBreakAnimate(b);
			            	world.DestroyBody(b);
			            }else if (_type == "blade") {
			            	effect.addEffect(pos.x * worldScale, pos.y * worldScale, _name, b.GetUserData().width*worldScale/ 500, b.GetUserData().height*worldScale / 40, b.GetAngle()+Math.PI/2);
			            	console.log(pos.x * worldScale, pos.y * worldScale, _name, b.GetUserData().width / 500, b.GetUserData().height / 40, b.GetAngle());
			            	world.DestroyBody(b);
			            }else if (_type == 'pieces') {
							drawImg(_img, pos.x * worldScale, pos.y * worldScale, 2/3, 2/3, b.GetAngle());
			            };
			    	}
			    	//跳出屏幕则回收body
			    	if (b && (pos.y > gHeight / worldScale || pos.x < 0 || pos.x > gWidth /worldScale) ){
			    		world.DestroyBody(b);
			    	};
			    }
				break;
			case 'over':
				context.font = "40px Arial";
				context.fillStyle = '#FFFF00';
	    		context.fillText('Your score is ' + gScore + '!', 165, (gHeight >> 1) - 20);
				drawImg(gImg['continueButton'], 320, gHeight-150, 1, 1, Math.PI/2);
				break;
			default:
				break;
		}
		effect.action().render();
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
	
	function handleMouseDown(e) {
	  	isMouseDown = true;
	   	setMousePosition(e);
	   	_startX = mouseX;
		_startY = mouseY;

		 switch(gStatus){
	    	case 'start':
	    		var _sx = _startX * worldScale;
	    		var _sy = _startY * worldScale;
	    		console.log('start');
	    		//点击新游戏按钮
	    		if ((_sx > 195) && (_sx < 445) && (_sy > gHeight - 188) && (_sy < gHeight - 112)) {
	    			console.log('start222');
	    			run();
	    		};
	    		break;
	    	case 'run':
	    		_startDate = Date.now();
				if (!_started) {
					_started = true;
				}
			   	//销毁物体
			   	var body = getBodyAtMouse();
		       	if(body) {
		       		if (body.GetUserData().type == 'fruit') {
		       			body.GetUserData().type = 'waitingDestroyFruit';	
		       			gScore += 1;
		       		};
		        }
				break;
			case 'over':
				var _sx = _startX * worldScale;
	    		var _sy = _startY * worldScale;
	    		//点击继续按钮
	    		if ((_sx > 195) && (_sx < 445) && (_sy > gHeight - 188) && (_sy < gHeight - 112)) {
	    			start();
	    		};
				break;
			default:
				break;
		}
	};

	function handleMouseMove(e) {
		if (e.preventDefault) {
			e.preventDefault();
		}
		if(!isMouseDown){
			return false;
		}
		if (gStatus == 'run') {
			setMousePosition(e);
			if (_startDate && Date.now() - _startDate >= 100) {
				_startDate = null;
				_endX = mouseX;
				_endY = mouseY;

				//创建鼠标滑动产生的刀剑刚体
				var _angle = Math.atan2(_endY-_startY, _endX - _startX);
				var _side = Math.sqrt(Math.pow((_endX - _startX), 2) + Math.pow((_endY - _startY), 2));
				var _userData = {
		    		type: "blade",
		    		name: 'blade',
		    		width: _side,
		    		height: 0.5
		    	};
				var _blade = createBox(_side >> 1, 1, (_startX + _endX )>> 1, (_startY + _endY) >> 1, _angle, b2Body.b2_kinematicBody, _userData);
				calculateScore(_blade);
		    }			
		};
		return true;
	};
	function handleMouseUp(e) {
		isMouseDown = false;
	   	mouseX = undefined;
	   	mouseY = undefined;
	   	_started = false;
	   	_startX = null;
	   	_startY = null;
	   	_endX = null;
	   	_endY = null; 
	   	startDate = null;
	};
	function debugDraw() {  
	    var debugDraw = new b2DebugDraw();  
	    debugDraw.SetSprite(context);  
	    debugDraw.SetDrawScale(worldScale);  
	    debugDraw.SetFillAlpha(0.5);  
	    debugDraw.SetLineThickness(1.0);  
	    debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);  
	    world.SetDebugDraw(debugDraw);  
	}
	//因为canvas与box2d坐标轴不一致，所以需要对x轴y轴进行转换
	function setMousePosition(e){
		var _e = e.targetTouches ? e.targetTouches[0] : e;
		mouseX = (_e.clientX - canvasPosition.x) / worldScale;
	   	mouseY = (_e.clientY - canvasPosition.y) / worldScale;
	   	_e = null;
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
	function createFruits(){
		var pX = 0;
		var pY = gHeight - 50;
		var angle = 0;
		var fruitNum = Math.floor(Math.random()*maxFruitNum + 1);
		var fruit;
		var directionFlag;
		var fruitType = 0;

	    for (var i = fruitNum; i > 0; i--) {
	    	pX = Math.floor(Math.random()*(maxPx - minPx + 1) + minPx);
	    	angle = Math.random()*(Math.PI/2 - initAngle) + initAngle;
	    	directionFlag = Math.round((Math.random()*2 - 1)) ? 1 : -1; //随机向左向右
	    	fruitType = Math.floor(Math.random()*7);
	    	_userData = {
	    		type: "fruit",
	    		name: fruitsBox[fruitType].id
	    	};  
			fruit = createBox(fruitsBox[fruitType].size.x,fruitsBox[fruitType].size.y,pX / worldScale,pY / worldScale, angle, b2Body.b2_dynamicBody,_userData);
			fruit.SetAngularVelocity(Math.PI / 2);
			fruit.SetLinearVelocity(new b2Vec2(20*Math.cos(angle) * directionFlag, -20*Math.sin(angle)));  
		    fruit.SetAngularDamping(dampingConstant);
			fruit.GetFixtureList().m_filter.groupIndex = -1;
		}
	}

	function playBreakAnimate(body){
		var name = body.GetUserData().name;
		var userData1, userData2, userData3;

		switch(name){
			case 'banana':
				userData1 = {type: 'pieces', name: 'bananaPiece1'};
				userData2 = {type: 'pieces', name: 'bananaPiece2'};
				break;
			case 'strawberry':
				userData1 = userData2 = {type: 'pieces', name: 'strawberryPiece'};
				break;
			case 'kiwi':
				userData1 = userData2 = {type: 'pieces', name: 'kiwiPiece'};
				break;
			case 'apple':
				userData1 = userData2 = {type: 'pieces', name: 'applePiece'};
				break;
			case 'watermelon':
				userData1 = userData2 = {type: 'pieces', name: 'watermelonPiece'};
				break;
			case 'pear':
				userData1 = userData2 = {type: 'pieces', name: 'pearPiece'};
				break;
			case 'bear':
				userData1 = {type: 'pieces', name: 'bearPiece1'};
				userData2 = {type: 'pieces', name: 'bearPiece2'};
				break;
		}
		var piece1 = createBox(0.1, 0.1, body.GetPosition().x - 3*Math.cos(body.GetAngle()), body.GetPosition().y - 3*Math.sin(body.GetAngle()), body.GetAngle(), b2Body.b2_dynamicBody, userData1);
		var piece2 = createBox(0.1, 0.1, body.GetPosition().x + 3*Math.cos(body.GetAngle()), body.GetPosition().y + 3*Math.sin(body.GetAngle()), body.GetAngle(), b2Body.b2_dynamicBody, userData2);
		
		var rAngle1 = Math.random(Math.PI/2) - Math.PI/2;
		var rAngle2 = Math.random(Math.PI/2) - Math.PI/2;

		piece1.GetFixtureList().m_filter.groupIndex = -1;
		piece1.SetAngularVelocity(Math.PI / 2);
		piece1.SetAngularDamping(dampingConstant);
		piece1.SetLinearVelocity(new b2Vec2(8*Math.cos(rAngle1), 8*Math.sin(rAngle1))); 
		piece2.GetFixtureList().m_filter.groupIndex = -1;
		piece2.SetAngularVelocity(-Math.PI / 2);
		piece2.SetAngularDamping(dampingConstant);
		piece2.SetLinearVelocity(new b2Vec2(8*Math.cos(rAngle2), 8*Math.sin(rAngle2))); 
	}
	function createBox(width,height,pX,pY,angle,type,data){  
	    var bodyDef = new b2BodyDef;  
	    bodyDef.type = type;  
	    bodyDef.position.Set(pX, pY);  
	    bodyDef.userData=data;  
	   
	    var polygonShape = new b2PolygonShape;  
	    polygonShape.SetAsBox(width/2, height/2);  
	   
	    var fixtureDef = new b2FixtureDef;  
	    fixtureDef.density = 1.0;  
	    fixtureDef.friction = 0.5;  
	    fixtureDef.restitution = 0.5;  
	    fixtureDef.shape = polygonShape;    
	         
	    var body = world.CreateBody(bodyDef);  
	    body.CreateFixture(fixtureDef); 
	    body.SetAngle(angle);

	    return body;
	}
	function drawImg(img, x, y, scaleX, scaleY, angle){
		context.save();
		context.translate(x, y);
        context.rotate(angle + 3*Math.PI/2);
       	context.drawImage(img, 0, 0, img.width, img.height,  - img.width * scaleX * 0.5,  - img.height * scaleY *0.5, img.width * scaleX, img.height * scaleY);
	   	context.restore();
	}
	function calculateScore(blade){
		var contactList = blade.GetContactList();
		var ctNum = 0;
		var contact;
		var _contactA;
		var _contactB;

		while(contactList){
			contact = contactList.contact;
			_contactA = contact.GetFixtureA().GetBody();
			_contactB = contact.GetFixtureB().GetBody();
			
			if (_contactA.GetUserData().type == 'fruit' && _contactB.GetUserData().type == 'blade') {
				_contactA.GetUserData().type = 'waitingDestroyFruit';
				ctNum++;
			};
			if (_contactB.GetUserData().type == 'fruit' && _contactA.GetUserData().type == 'blade') {
				_contactB.GetUserData().type = 'waitingDestroyFruit';
				ctNum++;
			};

			if (ctNum <= 1) {
				gScore += ctNum;
			}else{
				gScore += ctNum * 2;
			};
			contactList = contactList.next;
		}
	}
} 