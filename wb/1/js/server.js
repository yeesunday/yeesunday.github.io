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
    startTime -= 1000;
    _start.setTime(startTime);
    _start.setDate(23);
    startTime = _start.getTime();

    function foo (start) {
      var dfd = $.Deferred();
      setTimeout(function () {
        calDistanceByDay(new Date(start), _now);
        dfd.resolve();
      }, 1000);
      return dfd.promise();
    }

    var _functionStr = '';
    _functionStr = 'foo(' + _start.getTime() + ')';
    startTime += 1000*60*60*24;
    _start.setTime(startTime);
    while (_start.getDate() < _now.getDate()) {
      _functionStr += '.then(function(){ return foo(' + _start.getTime() + ');})';
      startTime += 1000*60*60*24;
      _start.setTime(startTime);
    }

    eval(_functionStr);
  } else {
    main(0);
  }
}

function calDistanceByDay(start, end) {
  console.log(start)
  var data = JSON.stringify({startDate: start.getTime() / 1000, endDate: end.getTime() / 1000});
  if (android) {
    var delta = JSON.parse(web.getDailyStatsWithData(data));
    alert(JSON.stringify(delta));
    if (delta.dailystats[0].distance) {
      runningDistance += delta.dailystats[0].distance;
    }
    if (start.getDate() == (end.getDate()-1)) {
      alert('你跑了' + runningDistance/1000 + '公里');
      main(runningDistance);
    }
  } else {
    connectWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('getDailyStatsWithData', data, function(res) {
        if (res + '' != 'null') {
          var re = JSON.parse(res);
          var dailystats = JSON.parse(re.DailyStats[0]);
          if (dailystats.distance) {
            runningDistance += dailystats.distance;
          }
          if (start.getDate() == (end.getDate()-1)) {
            alert('你跑了' + runningDistance/1000 + '公里');
            main(runningDistance);
          }
        }
      });
    });
  }
}