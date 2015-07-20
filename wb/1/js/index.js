$(function () {
  var isFinished = false;
  var currentFragment;
  var shareData;

  getAuthen(function () {
    $.ajax({
      type: "get",
      url: Server.getStatus,
      data: {
        openid: openId,
        access_token: token
      },
      cache: false,
      success: function(res){
        isFinished = res.ret.is_finished;
        currentFragment = res.ret.img_url;

        if (isFinished) {
          shareData = {
            'image_url':'',
            'link_url':'http://www.baidu.com',
            'title':'和别克一起，拼出炫彩夜色！',
            'content':'我已成功点亮炫彩夜色，大奖马上来！不要眼红，一起来玩！',
            'shared_to':'0'
          }
        } else {
          shareData = {
            'image_url':'',
            'link_url':'http://www.baidu.com',
            'title':'和别克一起，拼出炫彩夜色！',
            'content':'我已开始拼色之旅，有木有一起夜跑的，约起！',
            'shared_to':'0'
          }
        }
        main();
      }
    });
  });

  $('.btn-rule').click(function () {
    Modal.normal({
      title:'活动规则',
      content:'<h3>STEP 1</h3>' +
      '<p>领到神秘碎片后前往乐动力跑步页面，每次完成3公里任务，回到活动页面，碎片立刻为你点亮。一共4张碎片，需要手动领取哦。' +
      '<h3>STEP2</h3>' +
      '<p>点亮至少一块碎片并分享至朋友圈有更大机会赢取帅跑奖品哦。</p>' +
      '<h3>STEP3</h3>' +
      '<p>当你点亮全部碎片时可要站稳咯，五彩酷炫的颜色风暴即将向你袭来！</p>'
    });
  });

  $('.btn-pick').click(function () {
    //var _img;
    //$.ajax({
    //  type: "post",
    //  url: Server.getTask,
    //  data: {
    //    openid: openId,
    //    access_token: token
    //  },
    //  cache: false,
    //  success: function(res){
    //    _img = res.ret.img_url;
        Modal.normal({
          title:'领取任务',
          content:'<img src="../img/fragment-2.png" >' +
                  '<h3>任务一奖励碎片</h3>' +
                  '<a class="btn btn-go">前往任务！</a>'
        });
      //}
    //});
  });
  function main() {
    $('.btn-share').click(function () {
      setShare(shareData);
    });

    


  }
})