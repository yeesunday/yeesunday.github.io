var refrigerat;
function Refrigerator(vx,vy)
{
	var s = this;
	refrigerat = s;
	base(s,LSprite,[]);
	s.name = "Refrigerator";
	s.x = vx;
	s.y = vy;
	s.vx = vx;
	s.vy = vy;
	s.init();
}
Refrigerator.prototype.setUsed= function(bol)
{
	var s = this;
	s.isUsed = bol;
}
Refrigerator.prototype.getUsed= function()
{
	var s = this;
	return s.isUsed;
}

Refrigerator.prototype.getPosition= function()
{
	var s = this;
	return s.box2dBody.GetPosition();
}
Refrigerator.prototype.init = function ()
{
	var s = this;
	var ptm_ratio = 30;
	
  	s.addBodyCar([

										[
											// density, friction, restitution
                                            1, 0.8, 1,
                                            // categoryBits, maskBits, groupIndex, isSensor
											1, 65535, -1, false,
											'POLYGON',

                                            // vertexes of decomposed polygons
                                            [

                                                [   new LStage.box2d.b2Vec2(205/ptm_ratio, 356/ptm_ratio)  ,  new LStage.box2d.b2Vec2(210/ptm_ratio, 352/ptm_ratio)  ,  new LStage.box2d.b2Vec2(208/ptm_ratio, 356/ptm_ratio)  ] ,
                                                [   new LStage.box2d.b2Vec2(193/ptm_ratio, 360/ptm_ratio)  ,  new LStage.box2d.b2Vec2(193/ptm_ratio, 358/ptm_ratio)  ,  new LStage.box2d.b2Vec2(205/ptm_ratio, 356/ptm_ratio)  ,  new LStage.box2d.b2Vec2(203/ptm_ratio, 360/ptm_ratio)  ] ,
                                                [   new LStage.box2d.b2Vec2(193/ptm_ratio, 358/ptm_ratio)  ,  new LStage.box2d.b2Vec2(96/ptm_ratio, 359/ptm_ratio)  ,  new LStage.box2d.b2Vec2(95/ptm_ratio, 357/ptm_ratio)  ,  new LStage.box2d.b2Vec2(87/ptm_ratio, 236/ptm_ratio)  ,  new LStage.box2d.b2Vec2(89/ptm_ratio, 236/ptm_ratio)  ,  new LStage.box2d.b2Vec2(210/ptm_ratio, 352/ptm_ratio)  ,  new LStage.box2d.b2Vec2(205/ptm_ratio, 356/ptm_ratio)  ] ,
                                                [   new LStage.box2d.b2Vec2(87/ptm_ratio, 236/ptm_ratio)  ,  new LStage.box2d.b2Vec2(95/ptm_ratio, 357/ptm_ratio)  ,  new LStage.box2d.b2Vec2(87/ptm_ratio, 356/ptm_ratio)  ] ,
                                                [   new LStage.box2d.b2Vec2(212/ptm_ratio, 352/ptm_ratio)  ,  new LStage.box2d.b2Vec2(210/ptm_ratio, 352/ptm_ratio)  ,  new LStage.box2d.b2Vec2(89/ptm_ratio, 236/ptm_ratio)  ,  new LStage.box2d.b2Vec2(208/ptm_ratio, 11/ptm_ratio)  ,  new LStage.box2d.b2Vec2(211/ptm_ratio, 12/ptm_ratio)  ] ,
                                                [   new LStage.box2d.b2Vec2(91/ptm_ratio, 8/ptm_ratio)  ,  new LStage.box2d.b2Vec2(208/ptm_ratio, 9/ptm_ratio)  ,  new LStage.box2d.b2Vec2(208/ptm_ratio, 11/ptm_ratio)  ,  new LStage.box2d.b2Vec2(89/ptm_ratio, 236/ptm_ratio)  ,  new LStage.box2d.b2Vec2(87/ptm_ratio, 234/ptm_ratio)  ,  new LStage.box2d.b2Vec2(87/ptm_ratio, 10/ptm_ratio)  ]
											]

										]

									],0,0,1,1,0.8,1)
  	s.setBodyMouseJoint(true);
  	var bitmap = new LBitmap(new LBitmapData(imgList["country"+choose]))
  	var temp = new LSprite();
  	temp.x = s.vx-100;
	s.addChild(bitmap)
  	temp.y = s.vy+bitmap.getHeight()*0.5;
  	temp.addBodyCircle(5,0,0,0,0.1,0.3,0.2,true)
  	world.addChild(temp)
	var upSpr = new LSprite();
	upSpr.x = s.vx;
	upSpr.y =s.vy
	upSpr.name = "score";
	
	upSpr.addBodyCar([

										[
											// density, friction, restitution
                                            1, 0.8, 1,
                                            // categoryBits, maskBits, groupIndex, isSensor
											1, 65535, -1, false,
											'POLYGON',

                                            // vertexes of decomposed polygons
                                            [

												 [   new LStage.box2d.b2Vec2(92/ptm_ratio, 350/ptm_ratio)  ,  new LStage.box2d.b2Vec2(142/ptm_ratio, 305/ptm_ratio)  ,  new LStage.box2d.b2Vec2(176/ptm_ratio, 303/ptm_ratio)  ,  new LStage.box2d.b2Vec2(211/ptm_ratio, 349/ptm_ratio)  ] ,
                                                [   new LStage.box2d.b2Vec2(176/ptm_ratio, 55/ptm_ratio)  ,  new LStage.box2d.b2Vec2(141/ptm_ratio, 54/ptm_ratio)  ,  new LStage.box2d.b2Vec2(102/ptm_ratio, 33/ptm_ratio)  ,  new LStage.box2d.b2Vec2(86/ptm_ratio, 8/ptm_ratio)  ,  new LStage.box2d.b2Vec2(210/ptm_ratio, 8/ptm_ratio)  ] ,
                                                [   new LStage.box2d.b2Vec2(176/ptm_ratio, 303/ptm_ratio)  ,  new LStage.box2d.b2Vec2(142/ptm_ratio, 305/ptm_ratio)  ,  new LStage.box2d.b2Vec2(141/ptm_ratio, 54/ptm_ratio)  ,  new LStage.box2d.b2Vec2(176/ptm_ratio, 55/ptm_ratio)  ]
											]

										]

									],0,0,1,1,0.8,1)
//	upSpr.addBodyPolygon(bitmap.getWidth()*0.5-40,bitmap.getHeight(),1, 1, 0.1, 1,null,-1)
	world.addChild(upSpr);
	upSpr.setBodyMouseJoint(true);
	LGlobal.box2d.setWeldJoint(upSpr.box2dBody,s.box2dBody)
LGlobal.box2d.setPrismaticJoint(temp.box2dBody, s.box2dBody,[1,0],[-12,12],[0.1,0.1]);
LGlobal.box2d.setFrictionJoint(s.box2dBody,[1000,1000])
}