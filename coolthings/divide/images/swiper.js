/*
 * 全站公共脚本,基于jquery-1.9.1脚本库
 */
$(function() {
	//微信分享到朋友圈
        var imgUrl = "http://www.locuser.cn/demo/kr/images/ico.jpg";
        var lineLink = "http://www.locuser.cn/demo/kr";
        var descContent = '经纬创享汇第二季：经纬中国+猎聘网=撮合经济的新玩法';
        var shareTitle = '经纬创享汇';
        var appid = '';
         
        function shareFriend() {
            WeixinJSBridge.invoke('sendAppMessage',{
                "appid": appid,
                "img_url": imgUrl,
                "img_width": "200",
                "img_height": "200",
                "link": lineLink,
                "desc": descContent,
                "title": shareTitle
            }, function(res) {
                //_report('send_msg', res.err_msg);
            })
        }
        function shareTimeline() {
            WeixinJSBridge.invoke('shareTimeline',{
                "img_url": imgUrl,
                "img_width": "200",
                "img_height": "200",
                "link": lineLink,
                "desc": descContent,
                "title": descContent,
            }, function(res) {
                   //_report('timeline', res.err_msg);
            });
        }
        function shareWeibo() {
            WeixinJSBridge.invoke('shareWeibo',{
                "content": descContent,
                "url": lineLink,
            }, function(res) {
                //_report('weibo', res.err_msg);
            });
        }
        // 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
        document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
            // 发送给好友
            WeixinJSBridge.on('menu:share:appmessage', function(argv){
                shareFriend();
            });
            // 分享到朋友圈
            WeixinJSBridge.on('menu:share:timeline', function(argv){
                shareTimeline();
            });
            // 分享到微博
            WeixinJSBridge.on('menu:share:weibo', function(argv){
                shareWeibo();
            });
        }, false);
		
		window.onload = function()
		{
			$(".sound").css("visibility","visible");
			document.getElementById("music").play();
		}
		$(".sound")[0].addEventListener('touchstart',function(event){
			if ( $(this).hasClass("soundstop") )
			{
				document.getElementById("music").play();
				$(this).removeClass("soundstop");
			}
			else
			{
				document.getElementById("music").pause();
				$(this).addClass("soundstop");
			}
		})
	//页面加载完成后的事件
		var page1 = $("#page1").html();
		var page2 = $("#page2").html();
		var page3 = $("#page3").html();
		var page4 = $("#page4").html();
		var page5 = $("#page5").html();
		var page6 = $("#page6").html();
		var page7 = $("#page7").html();
		window.onload = function()
		{
			//设定页面加载完成状态
				var numbers = "";
				$("#tongji1 img").each(function(){
					var shuzi = $(this).attr("src");
					numbers += shuzi.substring(32,shuzi.length-4);
				})
				$("#tongji").html(numbers);
				page6 = $("#page6").html();
				change();
		}
	//初始加载分屏动画
		mySwiper = $('.swiper-container').swiper({
			loop: false,
			noSwiping:true,
			noSwipingNext:true,
			noSwipingPrev:true,
		    onSlideChangeEnd : function(){
		    	setTimeout(function(){
		    		setTimeout(change,100);
		    	},100);
		    	switch ( mySwiper.activeIndex )
		    	{
		    		case 0:
		    			remove(2,page2);
		    			break;
		    		case 1:
		    			remove(1,page1);
		    			remove(3,page3);
		    			break;
		    		case 2:
		    			remove(2,page2);
		    			remove(4,page4);
		    			break;
		    		case 3:
		    			remove(3,page3);
		    			remove(5,page5);
		    			break;
		    		case 4:
		    			remove(4,page4);
		    			remove(6,page6);
		    			break;
		    		case 5:
		    			remove(5,page5);
		    			remove(7,page7);
		    			break;
		    		case 6:
		    			remove(6,page6);
						$(".bm").on("tap",function(){
							setTimeout(function(){mySwiper.swipeTo(mySwiper.activeIndex+1,1);},300);
						})
		    			break;
		    		case 7:
		    			remove(7,page6);
		    			break;
		    	}
		    }
		})
	//移除动画后的效果
		function remove(which,content)
		{
			$("#page"+which+"").empty().html(content);
		}
		function removes(jn)
		{
			$(".swiper-container .swiper-slide:not(:eq("+jn+")) .animate1").removeAttr("style");
			$(".swiper-container .swiper-slide:not(:eq("+jn+")) .animate2").removeAttr("style");
		}
	//换屏动画
		var changeslide,techAuto,showtechs,bolang;
		function change()
		{
			changeSlide = $(".swiper-container .swiper-slide:eq("+mySwiper.activeIndex+")");
			if ( mySwiper.activeIndex == 0 )
			{
				changeSlide.children().filter(":first").css({x:0,y:-30}).transition({y:0,opacity:1},500);
				changeSlide.children().filter(":eq(1)").css({x:0,y:30}).transition({y:0,opacity:1,complete:function(){
					showtech();
					clearInterval(techAuto);
					autotech();
				}},500);
				changeSlide.find(".animate1").on("touchmove",touchmove);
				changeSlide.find(".animate1").on("touchstart",touchstart);
				textAuto = false;
    			showNext();
			}
			else if ( mySwiper.activeIndex == 1 || mySwiper.activeIndex == 2 || mySwiper.activeIndex == 3 )
			{
				changeSlide.children().filter(":first").css({x:0,y:-30}).transition({y:0,opacity:1},500);
				changeSlide.children().filter(":eq(1)").css({x:0,y:30}).transition({y:0,opacity:1,complete:function(){
					showtech();
					clearInterval(techAuto);
					autotech();
				}},500);
				changeSlide.find(".animate1").on("touchmove",touchmove);
				changeSlide.find(".animate1").on("touchstart",touchstart);
				textAuto = false;
    			showNext();
			}
			else if ( mySwiper.activeIndex == 4 )
			{
				changeSlide.children().filter(":first").css({x:0,y:-30}).transition({y:0,opacity:1},500);
				changeSlide.children().filter(":eq(1)").css({x:0,y:30}).transition({y:0,opacity:1,complete:function(){
					showtech();
					clearInterval(techAuto);
					autotech();
				}},500);
				changeSlide.children().filter(".animate4-1-2").css({x:0,y:-30}).transition({y:0,opacity:1},500);
				changeSlide.children().filter(".animate4-1-3").css({x:0,y:-30}).transition({y:0,opacity:1},500);
				changeSlide.children().filter(".animate4-2-2").css({x:0,y:30}).transition({y:0,opacity:1},500);
				changeSlide.children().filter(".animate4-2-3").css({x:0,y:30}).transition({y:0,opacity:1},500);
				changeSlide.find(".animate1").on("touchmove",touchmove);
				changeSlide.find(".animate1").on("touchstart",touchstart);
				textAuto = false;
    			showNext();
			}
			else if ( mySwiper.activeIndex == 5 )
			{
				var i = 1;
				bolang = setInterval(function(){
					if ( i >= -9000 )
					{
						i = 1;
					}
					$(".bo").transition({x:"-="+1},0);
					i++;
				},10)
				changeSlide.children().filter(".bo").css({y:30}).transition({y:0,opacity:1,complete:function(){
					changeSlide.children().filter(":first").css({x:-30}).transition({x:0,opacity:1,complete:function(){
						showtech();
						clearInterval(techAuto);
						autotech();
					}},500);
					changeSlide.children().filter(":eq(1)").css({x:30}).transition({x:0,opacity:1,delay:300},500);
					changeSlide.children().filter(".hits").css({y:-30}).transition({y:0,opacity:1,delay:600},500);
				}},500);
				changeSlide.find(".animate1").on("touchmove",touchmove);
				changeSlide.find(".animate1").on("touchstart",touchstart);
				textAuto = false;
    			showNext();
			}
			else if ( mySwiper.activeIndex == 6 )
			{
				textAuto = true;
				setTimeout(function(){
					changeSlide.find(".animate2").css({opacity:1}).find(">div").each(function(){
						$(this).removeAttr("style");
						textGo($(this));
					})
				},500)
				changeSlide.children().filter(":first").css({x:0,y:0}).transition({y:0,opacity:1,delay:1500},500);
    			showNext();
			}
			else
			{
				$("#form").attr("src",$("#form").attr("loadsrc"));
    			hideNext();
			}
		}
	//操作教程
		var handX,handY;
		function tech()
		{
			switch ( mySwiper.activeIndex )
			{
				case 0:
					handX = 70;
					handY = 90;
					break;
				case 1:
					handX = 30;
					handY = 90;
					break;
				case 2:
					handX = 0;
					handY = 90;
					break;
				case 3:
					handX = 40;
					handY = 60;
					break;
				case 4:
					handX = 70;
					handY = 80;
					break;
				case 5:
					handX = 90;
					handY = 0;
					break;
					
			}
			changeSlide.find(".hand").transition({x:0,y:0},200).transition({x:handX,y:handY},1200);
		}
		function autotech()
		{
			techAuto = setInterval(function(){
				tech();
			},5000);
			setTimeout(tech,2000);
		}
		function showtech()
		{
			showtechs = setTimeout(function(){
				changeSlide.children().filter(":eq(2)").show().css({scale:0}).transition({scale:1,opacity:1},500);
			},1000)
		}
	//摄合
		var x,y,x1,y1,x2,y2,x3,y3,w,h,sw,sh;
		function touchstart(e)
		{
			e.preventDefault();
			sw = document.documentElement.clientWidth;
			sh = document.documentElement.clientHeight;
			x = $(this).offset().left;
			y = $(this).offset().top;
			$(this).css({left:x,top:y,x:0,y:0,"margin":0});
			x1 = e.originalEvent.targetTouches[0].pageX;
			y1 = e.originalEvent.changedTouches[0].pageY;
			w = $(this).width();
			h = $(this).height();
			clearTimeout(showtechs);
			changeSlide.find(".tip").fadeOut(300);
		}
		function touchmove(e)
		{
			e.preventDefault();
			x2 = e.originalEvent.targetTouches[0].pageX;
			y2 = e.originalEvent.changedTouches[0].pageY;
				//最新的位置
					x3 = x2-x1;
					y3 = y2-y1;
				//拖动处理方式
					if ( mySwiper.activeIndex == 0 )
					{
							$(this).css({x:x3,y:y3});
						//判断是否摄合成功
							if ( ( ( $(this).offset().left + w ) < $(this).next().offset().left ) || ( ( $(this).offset().top + h ) < $(this).next().offset().top ) || ( $(this).offset().top > ( $(this).next().offset().top + $(this).next().height() ) ) || ( $(this).offset().left > ( $(this).next().offset().left + $(this).next().width() ) ) )
							{
							}
							else
							{
								document.getElementById("music").play();
								sucess();
							}
					}
					else if ( mySwiper.activeIndex == 1 )
					{
						//最新的位置
							$(this).css({x:x3,y:y3});
						//判断是否摄合成功
							if ( ( ( $(this).offset().left + w ) < ( $(this).next().offset().left ) + 50 ) || ( ( $(this).offset().top + h ) < $(this).next().offset().top +50 ) || ( $(this).offset().top + 50 > ( $(this).next().offset().top + $(this).next().height() ) ) || ( $(this).offset().left + 50 > ( $(this).next().offset().left + $(this).next().width() ) ) )
							{
							}
							else
							{
								
								sucess();
							}
					}
					else if ( mySwiper.activeIndex == 2 )
					{
						//最新的位置
							$(this).css({x:x3,y:y3});
						//判断是否摄合成功
							if ( ( ( $(this).offset().left + w ) < ( $(this).next().offset().left ) + 10 ) || ( ( $(this).offset().top + h ) < $(this).next().offset().top +10 ) || ( $(this).offset().top + 10 > ( $(this).next().offset().top + $(this).next().height() ) ) || ( $(this).offset().left + 10 > ( $(this).next().offset().left + $(this).next().width() ) ) )
							{
							}
							else
							{
								
								sucess();
							}
					}
					else if ( mySwiper.activeIndex == 3 )
					{
						//最新的位置
							$(this).css({x:x3,y:y3});
						//判断是否摄合成功
							if ( ( ( $(this).offset().left + w ) < ( $(this).next().offset().left ) + 40 ) || ( ( $(this).offset().top + h ) < $(this).next().offset().top +40 ) || ( $(this).offset().top + 40 > ( $(this).next().offset().top + $(this).next().height() ) ) || ( $(this).offset().left + 40 > ( $(this).next().offset().left + $(this).next().width() ) ) )
							{
							}
							else
							{
								
								sucess();
							}
					}
					else if ( mySwiper.activeIndex == 4 )
					{
						//最新的位置
							$(this).css({y:y3});
						//判断是否摄合成功
							if ( $(this).offset().top >= $(this).next().offset().top - 20 )
							{
								changeSlide.children().filter(":first").off("touchstart touchmove").next().off("touchstart touchmove");
								
								$(this).transition({x:($(this).next().offset().left-$(this).offset().left-w),y:($(this).next().offset().top-y),complete:function(){	
									setTimeout(function(){mySwiper.swipeTo(mySwiper.activeIndex+1,1);},300);
								}},100)
							}
					}
					else if ( mySwiper.activeIndex == 5 )
					{
						//最新的位置
							$(this).css({x:x3});
						//判断是否摄合成功
							if ( $(this).offset().left >= $(this).next().offset().left - w + 20 )
							{
								
								clearInterval(bolang);
								changeSlide.children().filter(":first").off("touchstart touchmove").next().off("touchstart touchmove");
								setTimeout(function(){mySwiper.swipeTo(mySwiper.activeIndex+1,1);},300);
							}
					}
		}
		var x0,y0,x10,y10,x20,y20,x30,y30,w0,h0,sw0,sh0;
	//撮合成功
		function sucess()
		{
			changeSlide.children().filter(":first").off("touchstart touchmove").next().off("touchstart touchmove");
			if ( mySwiper.activeIndex == 0 )
			{
				$(".tip").hide();
			}
			changeSlide.children().filter(":lt(2)").children().each(function(){
				$(this).css({"left":$(this).offset().left,"top":$(this).offset().top,"margin":0,"position":"absolute"});
				sui($(this));
			})
			changeSlide.children().filter(":lt(2)").removeAttr("style").css({"position":"static","opacity":1});
			setTimeout(function(){mySwiper.swipeTo(mySwiper.activeIndex+1,1);},300);
		}
	//打散元素
		function sui(suipian)
		{
			suipian.transition({x:suipianLeft(),y:suipianTop(),scale:suipianSize(),rotate:suipianRotate()},suipianSpeed());
		}
		//打散位置
			function suipianLeft(a,b) {
				return (Math.random() * ( 200 ) - 100)
			}
			function suipianTop(a,b) {
				return (Math.random() * ( 600 ) - 300)
			}
		//打散速度
			function suipianSpeed() {
				return ((Math.random() * 4 + 4) * 200 )
			}
		//打散大小
			function suipianSize() {
				return (Math.random() * 5 + 5) / 10
			}
		//打散旋转
			function suipianRotate() {
				return (Math.random() * 360 -180)
			}
	//文字掉落
		var textTime = 0;
		var textAuto = true;
		screenWidth = document.documentElement.clientWidth;
		screenHeight = document.documentElement.clientHeight;
		var zhudang = $(".swiper-wrapper .swiper-slide:eq(6) .animate1");
		function textGo(text) {
			if ( textAuto )
			{
				zhudang = $(".swiper-wrapper .swiper-slide:eq(6) .animate1");
				setTimeout(function() {
					var textX = Math.floor(Math.random() * (screenWidth - text.width()));
					if ( textX > ( zhudang.offset().left - 10 ) && textX < ( zhudang.offset().left + zhudang.width() - 10 ) ) 
					{
						if ( text.hasClass("stop") )
						{
							text.css({x:textX,y:0,rotate:0}).transition({y:(zhudang.offset().top+54-text.height())},textSpeed()/6,'linear');
						}
						else
						{
							text.css({x:textX,y:0,rotate:0}).transition({y:(zhudang.offset().top+54-text.height()),complete:function(){
								if ( textX < ( zhudang.offset().left - 10 + zhudang.width()/2 ) )
								{
									text.transition({x:(zhudang.offset().left - 10),rotate:'-'+textRotate(),complete:function(){
										text.transition({y:(screenHeight + text.height()+50),rotate:'-'+textRotate2(),complete:function(){
											textGo(text);
										}},textSpeed()/3,'linear');
									}},textSpeed()/12,'linear');
								}
								else
								{
									text.transition({x:(zhudang.offset().left + zhudang.width() - 10),rotate:textRotate(),complete:function(){
										text.transition({y:(screenHeight + text.height()+50),rotate:textRotate2(),complete:function(){
											textGo(text);
										}},textSpeed()/3,'linear');
									}},textSpeed()/12,'linear');
								}
							}},textSpeed()/6,'linear');
						}
						textTime = 0;
					}
					else
					{
						text.css({x:textX,y:0,rotate:0}).transition({y:(screenHeight + text.height()+50),complete:function(){textGo(text);}},textSpeed(),'linear');
					}
				}, textTime);
				textTime += 100;
				if (text.index() == 1) {
					textTime = 0;
				}
			}
		}
		//文字位置
			function textLeft() {
				return Math.floor(Math.random() * (screenWidth - rainmanWidth) + 1)
			}
		//文字速度
			function textSpeed() {
				return (Math.random() * 4 + 4) * 1000
			}
		//文字角度
			function textRotate() {
				return (Math.random() * 50 + 40)
			}
			function textRotate2() {
				return (Math.random() * 90 + 180)
			}
		//提示翻屏
			function goNext()
			{
				$(".goNext").css({x:-15,opacity:0}).transition({x:0,opacity:1,complete:function(){$(".goNext").transition({x:15,opacity:0,complete:function(){setTimeout(goNext,500)}},600);}},600)
			}
			goNext();
			function showNext()
			{
				$(".goNext").show();
			}
			function hideNext()
			{
				$(".goNext").hide();
			}
})