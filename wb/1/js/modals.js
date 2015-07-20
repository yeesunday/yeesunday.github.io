/**
 * name: modals.js
 * intro: 各种弹框
 * author: Rain
 * modified: Rain
 * date: 2015/07/18
 */

var Modal = {};
Modal.normal = function (config) {
  var _config = {
    width: '86', //百分比
    height: '80',
    adaptive: false, //是否自适应高度，true 是，false 否
    title: '', //标题
    content: '',    //内容, html 格式字符串
    callback: null  //关闭窗口回调
  }
  $.extend(_config, config);

  if (!$('.modals-backdrop').length) {
    $(document.body).append('<div class="modals-backdrop"></div>');
  }
  var $modalsBg = $(".modals-backdrop");
  var _modalHtml = [
    '<div class="modal normal-modal">',
      '<div class="btn-close"></div>',
      '<div class="modal-body">',
        '<div class="title">', _config.title, '</div>',
        '<div class="content">', _config.content, '</div>',
      '</div>',
    '</div>'
  ].join('');
  $modalsBg.after(_modalHtml);

  var $modal = $('.normal-modal');
  var $closer = $modal.find('.btn-close');
  var $wrapper = $('.wrapper');
  var $modalBody = $modal.find('.modal-body');
  var wh = window.innerHeight;
  var ww = window.document.body.clientWidth;

  $modal.css({
    width: $wrapper.width() * _config.width / 100,
    height: _config.adaptive ? '' : wh * _config.height / 100
  });

  var gh  = $modal.outerHeight();
  var gw  = $modal.outerWidth();
  var top = (wh - gh) / 2;
  var left = (ww - gw) / 2;
  setTimeout(function () {
    $modalBody.css({maxHeight: $modal.height() + 'px'});

  }, 300);
  console.log($modal.height(),$modal.find('.title').outerHeight());
  $modal.css({"top":top + "px","left":left + "px"});

  $modalsBg.show();
  $modal.fadeIn(500);
  $closer.click(close);
  $modalsBg.click(close);
  function close () {
    if (_config.callback) {
      _config.callback();
    }
    $modalsBg.hide();
    $modal.fadeOut(500, function () {
      $modal.remove();
    });
  }
}