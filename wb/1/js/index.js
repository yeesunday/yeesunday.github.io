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
  var last = localStorage.getItem('last');
  var shareData;
  var claimedFirst = localStorage.getItem('claimedFirst');

  if (last) {
    last = JSON.parse(last);
  } else {
    last = {
      level: 0,
      finished: false,
      claimed: false
    };
  };

  getDistance(main);

  function main (distanceData) {
    if (claimedFirst) {
      if (distanceData) {
        var data;
        var hasRun = false;

        if(android) {
          distanceData = JSON.parse(distanceData);
          data = distanceData.dailystats[0];
        } else {
          data = distanceData;
        }
        alert(7 + data.distance);
        currentLevel = Math.floor(data.distance / 3000);
        if(!hasRun) {currentLevel = 0;}
      } else {
        currentLevel = 0;
      }

      if (currentLevel > 4) {
        currentLevel = 4;
      }

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
        localStorage.setItem('last', JSON.stringify({
          level: 4,
          claimed: true,
          finished: true
        }));
      }
    } else {
      currentLevel = 0;
    }

    nextLevel = currentLevel + 1;
    refreshView(currentLevel);

    $('.btn-pick').click(function () {
      if (currentLevel == 0) {
        alert('setClaimedFirst');
        localStorage.setItem('claimedFirst', true);
      }

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

    $('body').delegate('.btn-go', 'click', function() {
      $(this).removeClass('btn-go').addClass('btn-run');
      localStorage.setItem('last', JSON.stringify({
        level: currentLevel,
        claimed: true,
        finished: false
      }));
    }).delegate('.btn-modal-share', 'click', function() {
      $('.share-mask').show();
      setShare(shareData);
    });
    $('.btn-lucky').click(function () {
      Modal.normal({
        title: '',
        content:
        '<img class="f_1" src="../img/f_1.png"/>' +
        '<h3 class="f_2 text-c">但是，炫彩夜色已属于你！</h3>' +
        '<a class="btn-modal-share"></a>' +
        '<a href="http://m.buick.com.cn/v3/testdrive.html?utm_source=ledongli&utm_medium=app&utm_term=SP-BU1500860_HS201504335_YGPTH5_426748&utm_content=SGMMRK2015000135&utm_campaign=H5-ledongli-APP" class="btn-experience"></a>'
      });
      //Modal.normal({
      //  title: '',
      //  content:
      //  '<img src="../img/s_1.png" class="s_1">' +
      //  '<p class="s_2">恭喜您获得了活动奖品！请留下你的联系信息，我们将在活动结束后统一发出奖品。</p>' +
      //  '<input type="text" placeholder="姓名" class="modal-input lucky-name">' +
      //  '<input type="tel" placeholder="电话" class="modal-input lucky-mobile">' +
      //  '<a class="btn-submit"></a>'
      //});
    });
  }

  function refreshView(level) {
    $('.car').attr('src', '../img/car-' + level + '.png');
    if (level == 4) {
      shareData = {
        'image_url': imgUrl,
        'link_url': linkUrl,
        'title':'和别克一起，拼出炫彩夜色！',
        'content':'我已成功点亮炫彩夜色，大奖马上来！不要眼红，一起来玩！',
        'shared_to':'0'
      };
      $('.btn-pick').hide();
      $('.btn-lucky').show();
    } else {
      shareData = {
        'image_url': imgUrl,
        'link_url': linkUrl,
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
  $('.btn-share').click(function () {
    $('.share-mask').show();
    setShare(shareData);
  });
  $('.share-mask').click(function () {
    $(this).toggle();
  });
  //Modal.normal({
  //  title: '',
  //  content:
  //  '<img class="s_2_1" src="../img/s_2.png"/>' +
  //  '<a class="btn-modal-share"></a>' +
  //  '<a class="btn-experience"></a>'
  //});
})