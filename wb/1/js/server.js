var linkUrl = 'http://h5.ledongli.cn/bieke/html/share.html';
//var imgUrl = 'http://h5.ledongli.cn/bieke/img/share_icon.jpg';
var imgUrl = 'http://yeesunday.github.io/wb/1/img/share_icon.jpg';
var android = false;
var ua = navigator.userAgent.toLowerCase();
if (/(android)/i.test(ua)) {
  android = true;
}
var runningDistance = 0;
var startTime = localStorage.getItem('startTime');

function connectWebViewJavascriptBridge (callback) {
  if (window.WebViewJavascriptBridge) {
    callback(WebViewJavascriptBridge)
  } else {
    document.addEventListener('WebViewJavascriptBridgeReady', function() {
      callback(WebViewJavascriptBridge)
    }, false)
  }
}
function setShare (conf) {
  conf = JSON.stringify(conf);
  if (android) {
    return window.web && web.setWebViewShare(conf);
  } else {
    ldl.app.setWebViewShare(conf);
  }
}

function getDistance() {
  if (startTime) {
    var _start = new Date();
    var _now = new Date();
    startTime = Number(startTime);
    startTime += 1000*60*60*24*3;
    _start.setTime(startTime);
    var i = 0;

    var foo = function (start, i) {
      setTimeout(function () {
        calDistanceByDay(start, _now);
      }, i*1000);
    }

    while (_start.getDate() <= _now.getDate()) {
      foo(new Date(_start.getTime()), i);
      i++;
      startTime += 1000*60*60*24;
      _start.setTime(startTime);
    }
  } else {
    main(0);
  }
}

function calDistanceByDay(start, end) {
  console.log(start.getDate());
  var data = JSON.stringify({startDate: start.getTime() / 1000, endDate: end.getTime() / 1000});
  if (android) {
    var delta = JSON.parse(web.getDailyStatsWithData(data));
    runningDistance += delta.dailystats[0].distance;
    if (start.getDate() == end.getDate()) {
      main(runningDistance);
    }
  } else {
    connectWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('getDailyStatsWithData', data, function(res) {
        if (res + '' != 'null') {
          var re = JSON.parse(res);
          var dailystats = JSON.parse(re.DailyStats[0]);
          alert(start.getDate() + ' ' + res);
          if (dailystats.distance) {
            runningDistance += dailystats.distance;
            alert(runningDistance + ' ' + start.getDate() + ' ' + end.getDate());
            if (start.getDate() == (end.getDate()-1)) {
              main(runningDistance);
            }
          }
        }
      });
    });
  }
}