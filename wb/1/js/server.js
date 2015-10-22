var ios = false;
var android = false;
var ua = navigator.userAgent.toLowerCase();
if (/(iphone|ipod|ipad)/i.test(ua)) {
  ios = true;
} else if (/(android)/i.test(ua)) {
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
  ldl.app.setWebViewShare(conf);
  //if (android) {
  //  return window.web && web.setWebViewShare(conf);
  //} else if (ios) {
  //  ldl.getUserDataInapp().done(function() {
  //    ldl.app.setWebViewShare(conf);
  //  });

    //connectWebViewJavascriptBridge(function (bridge) {
    //  bridge.callHandler('setWebViewShare', conf, function() {});
    //});
  //}
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

  ldl.getUserDataInapp().done(function() {
    //获取当天运动数据
    ldl.app.getDailyStatsWithData(data).done(function(d) {
      callback(JSON.parse(d));
    });
  });

  //if (android) {
  //  callback(web.getDailyStatsWithData(data));
  //} else if (ios) {
    //connectWebViewJavascriptBridge(function (bridge) {
    //  bridge.callHandler('getDailyStatsWithData', data, function(response) {
    //    callback(response);
    //  })
    //});
  //  console.log(ldl);
  //  ldl.getUserDataInapp().done(function() {
  //    //获取当天运动数据
  //    ldl.app.getDailyStatsWithData(data).done(function(d) {
  //      callback(d);
  //    });
  //  });
  //}
}