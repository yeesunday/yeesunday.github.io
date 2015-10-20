$(function () {
  var numCn = ['一', '二', '三', '四'];
  var levelData = [
    {
      level: 0,
      finished: false,
      claimed: false
    },
    {
      level: 1,
      finished: false,
      claimed: false
    },
    {
      level: 2,
      finished: false,
      claimed: false
    },
    {
      level: 3,
      finished: false,
      claimed: false
    },
    {
      level: 4,
      finished: false,
      claimed: false
    }
  ];
  var currentLevel = 0;
  var nextLevel = 0;
  var last;
  var shareData;
  var userData = getUserInfo();

  if (cookie.get('last')) {
    last = JSON.parse(cookie.get('last'));
  } else {
    last = {
      level: 0,
      finished: false,
      claimed: false
    };
  };

  getDistance(main);

  function main (distanceData) {
    alert(1+ ' ' + JSON.stringify(distanceData));
    if (distanceData && distanceData.report) {
      currentLevel = Math.floor(distanceData.report.runningdistance / 4);
    } else {
      currentLevel = 0;
    }

    if (currentLevel > 4) {
      currentLevel = 4;
    }
    nextLevel = currentLevel + 1;

    if (last.level == currentLevel) {
      levelData[currentLevel] = last;
    } else {
      for (var i = 0; i < currentLevel; i++) {
        levelData[i] = {
          level: i,
          finished: true,
          claim: true
        }
      }
    }

    for (var i = last.level; i < currentLevel; i++) {
      alert('恭喜完成第' + numCn[i] + '关挑战！获得碎片一枚');
    }
    if (currentLevel == 4) {
      cookie.set('last', JSON.stringify({
        level: 4,
        claimed: true,
        finished: true
      }));
    }

    refreshView(currentLevel);

    $('.btn-pick').click(function () {
      if (!levelData[currentLevel].claimed) {
        Modal.normal({
          title: '第' + numCn[nextLevel - 1] + '个任务',
          content: '<img class="fragment" src="../img/fragment-' + nextLevel + '.png" >' +
          '<p class="fragment-text">完成' + 3*nextLevel + '公里跑步<br>即可点亮第' + numCn[nextLevel - 1] + '个碎片！</p>' +
          '<a class="btn-go"></a>'
        });
      } else {
        Modal.normal({
          title: '第' + numCn[nextLevel - 1] + '个任务',
          content: '<img class="fragment" src="../img/fragment-' + nextLevel + '.png" >' +
          '<p class="fragment-text">完成' + 3*nextLevel + '公里跑步<br>即可点亮第' + numCn[nextLevel - 1] + '个碎片！</p>' +
          '<a class="btn-run"></a>'
        });
      }
    });

    $('.btn-share').click(function () {
      setShare(shareData);
    });
    $('body').delegate('.btn-go', 'click', function() {
      $(this).removeClass('btn-go').addClass('btn-run');
      cookie.set('last', JSON.stringify({
        level: currentLevel,
        claimed: true,
        finished: false
      }));
    })
    $('.btn-lucky').click(function () {
      Modal.normal({
        title: '',
        content:
        '<img src="../img/s_1.png" class="s_1">' +
        '<p class="s_2">恭喜您获得了活动奖品！请留下你的联系信息，我们将在活动结束后统一发出奖品。</p>' +
        '<input type="text" placeholder="姓名" class="modal-input lucky-name">' +
        '<input type="tel" placeholder="电话" class="modal-input lucky-mobile">' +
        '<a class="btn-submit"></a>'
      });
    });
  }

  function refreshView(level) {
    $('.car').attr('src', '../img/car-' + level + '.png');
    if (level == 4) {
      shareData = {
        'image_url':'',
        'link_url':'http://www.baidu.com',
        'title':'和别克一起，拼出炫彩夜色！',
        'content':'我已成功点亮炫彩夜色，大奖马上来！不要眼红，一起来玩！',
        'shared_to':'0'
      };
      $('.btn-pick').hide();
      $('.btn-lucky').show();
    } else {
      shareData = {
        'image_url':'',
        'link_url':'http://www.baidu.com',
        'title':'和别克一起，拼出炫彩夜色！',
        'content':'我已开始拼色之旅，有木有一起夜跑的，约起！',
        'shared_to':'0'
      };
    }
  }

  $('.btn-rule').click(function () {
    Modal.normal({
      title:'',
      content:'<img src="../img/rule_bg.png" class="rule-bg">'
    });
  });
  //Modal.normal({
  //  title: '',
  //  content:
  //  '<img class="f_1" src="../img/f_1.png"/>' +
  //  '<h3 class="f_2 text-c">但是，炫彩夜色已属于你！</h3>' +
  //  '<a class="btn-modal-share"></a>' +
  //  '<a class="btn-experience"></a>'
  //});


  //Modal.normal({
  //  title: '',
  //  content:
  //  '<img class="s_2_1" src="../img/s_2.png"/>' +
  //  '<a class="btn-modal-share"></a>' +
  //  '<a class="btn-experience"></a>'
  //});

  //getAuthen(function () {
  //  $.ajax({
  //    type: "get",
  //    url: Server.getStatus,
  //    data: {
  //      openid: openId,
  //      access_token: token
  //    },
  //    cache: false,
  //    success: function(res){
  //      res = JSON.parse(res);
  //      isFinished = res.ret.complete;
  //      currentFragment = res.ret.image_url;
  //
  //      main();
  //    }
  //  });
  //});
})