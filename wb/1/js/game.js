$(function () {
  $('.btn-more').click(function () {
    Modal.normal({
      title:'活动规则',
      content:'<h3>STEP 1</h3>' +
      '<p>领到神秘碎片后前往乐动力跑步页面，每次完成3公里任务，回到活动页面，碎片立刻为你点亮。一共4张碎片，需要手动领取哦。' +
      '<h3>STEP2</h3>' +
      '<p>点亮至少一块碎片并分享至朋友圈有更大机会赢取帅跑奖品哦。</p>' +
      '<h3>STEP3</h3>' +
      '<p>当你点亮全部碎片时可要站稳咯，五彩酷炫的颜色风暴即将向你袭来！</p>' +
      '<p class="interpretation">活动最终解释权归 BUICK 所有</p>'
    });
  });
})