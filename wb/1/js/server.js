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

function getDistance(callback) {
  if (startTime) {
    var _start = new Date();
    var _now = new Date();
    startTime = Number(startTime);
    _start.setTime(startTime);

    while (_start.getDate() <= _now.getDate()) {
      calDistanceByDay(_start, _now);
      startTime += 1000*60*60*24;
      _start.setTime(startTime);
    }

    setTimeout(function () {
      callback(runningDistance);
    }, 1000)
  } else {
    callback(0);
  }
}

function calDistanceByDay(start, end) {
  var data = JSON.stringify({startDate: start.getTime() / 1000, endDate: end.getTime() / 1000});

  if (android) {
    var delta = JSON.parse(web.getDailyStatsWithData(data));
    alert(1);
    runningDistance += delta.dailystats[0].distance;
  } else {
    connectWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('getDailyStatsWithData', data, function(res) {
        if (res + '' != 'null') {
          var re = JSON.parse(res);
          var dailystats = JSON.parse(re.DailyStats[0]);
          alert(2);
          runningDistance += dailystats.distance;
        }
      });
    });
  }
}
ldl.getUserDataInapp().done(function() {
  ldl.app.getDailyStatsWithData(data).done(function(res) {});
});