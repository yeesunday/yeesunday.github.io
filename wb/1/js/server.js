//全局 Ajax 设置
//$.ajaxSetup({
//  timeout : 30000,
//  error: function(jqXHR, exception) {
//    if (jqXHR.status === 0) {
//      alert('连接失败，请稍后重试~');
//    } else if (jqXHR.status == 401) {
//      alert('连接服务器出了些问题，重新登录也许能解决哦，灰常抱歉 >_<');
//    } else if (jqXHR.status == 404) {
//      alert('请求 url 无法找到。[404]');
//    } else if (jqXHR.status >= 500 && jqXHR.status < 600) {
//      alert('十分抱歉，服务器内部发生错误。' + jqXHR.status);
//    } else if (exception === 'parsererror') {
//      alert('JSON 解析失败！请尝试切换网络。');
//    } else if (exception === 'timeout') {
//      alert('连接超时，请稍后重试~');
//    } else {
//      alert('发现未知错误。(' + jqXHR.responseText + ', ' + exception + ')');
//    }
//  }
//});

//var root = 'http://walk.ledongli.cn:8090/v2/rest/open';
var root = 'http://test.ledongli.cn:7080/v2/rest/open';
var Server = {
  getToken: root + '/web_access_token',
  getTask: root + '/buick/get_task',
  getStatus: root + '/buick/get_pics'
}

var openId, token;
var uid = getUid();

function getAuthen (callback) {
  //if (!uid) {
  //  alert('请先登录哦！');
  //  return false;
  //}

  //$.ajax({
  //  type: "get",
  //  url: Server.getToken,
  //  data: {
  //    appid: 'BuickIllumiRun',
  //    appsecret: 'b403716b6435ca9f3491272ddd94217f'
  //  },
  //  cache: false,
  //  success: function(res){
  //    openId = res.ret.openid;
  //    token = res.ret.access_token;
  //
  //    if (callback) {
  //      callback();
  //    }
  //  }
  //});
  openId = 123;
  token = 'test';
  callback();
}

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
function getUid () {
  if (android) {
    return window.web && web.getUserId().uid;
  } else if (ios) {
    connectWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('getUserId', {}, function(response) {
        return response.uid;
      })
    });
  }
}
function setShare (conf) {
  if (android) {
    return window.web && web.setWebViewShare(conf);
  } else if (ios) {
    connectWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('setWebViewShare', conf, function() {});
    });
  }
}

function getUserInfo () {
  if (android) {
    return window.web && web.getUserInfo();
  } else if (ios) {
    connectWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('getUserInfo', {}, function(response) {
        return response;
      })
    });
  }
}

function getDistance(callback) {
  var start = new Date();
  start.setHours(0);
  start.setMinutes(0);
  start.setSeconds(0);
  start = Math.floor(start.getTime());
  var now = new Date();
  now = Math.floor(now.getTime());

  alert(2);
  if (android) {
    callback(web.getDailyStatsWithData({startDate: start, endDate: now}));
  } else if (ios) {
    connectWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('getDailyStatsWithData', {startDate: start, endDate: now}, function(response) {
        alert('response ' + JSON.stringify(response))
        callback(response);
      })
    });
  }
}