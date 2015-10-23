var android = false;
var ua = navigator.userAgent.toLowerCase();
if (/(android)/i.test(ua)) {
  android = true;
}

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
  var start = new Date();
  start.setHours(0);
  start.setMinutes(0);
  start.setSeconds(0);
  start = Math.floor(start.getTime()/1000);
  var now = new Date();
  now = Math.floor(now.getTime()/1000);
  var data = JSON.stringify({startDate: start, endDate: now});

  if (android) {
    callback(web.getDailyStatsWithData(data));
  } else {

    connectWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('getDailyStatsWithData', data, function(res) {
        alert('bridge ' + res);
        if (res + '' != 'null') {
          var re = JSON.parse(res),
              dailystats = JSON.parse(re.DailyStats[0]);
          callback(dailystats);
        }
      })
    });
    ldl.getUserDataInapp().done(function() {
      ldl.app.getDailyStatsWithData(data).done(function(res) {
        //alert(d);
        //d = d.replace('"DailyStats":["', '"DailyStats":[').replace('}"]}', '}]}');
        //alert(d);
        //callback(d);
        alert(3 + ' ' + res);
        if (res + '' != 'null') {
          var re = JSON.parse(res),
            dailystats = JSON.parse(re.DailyStats[0]);
          callback(dailystats);
        }
      });
    });
  }
}