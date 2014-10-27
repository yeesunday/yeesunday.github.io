/**
 * Created by Sunday on 25/10/14.
 */
//评论框弹窗
function CommentWindow(config){
    $.extend(this,{
        content:'',
        callback:null
    },config);
    this.$mask=$('<div class="w_mask"></div>');
    this.$panel=$(
            '<div class="cw_panel">' +
                '<div class="comment-window_content">' +
                    '<textarea placeholder="输入评论内容..."></textarea>' +
                '</div>' +
                '<div class="cw_option">' +
                    '<div class="cw_btn_cancel btn btn-default btn-normal">取消</div>' +
                    '<div class="cw_btn_confirm btn btn-success btn-normal">确定</div>' +
                '</div>' +
            '</div>').css({
            visibility:'hidden'
        });
    this.$mask.append(this.$panel);
    $(document.body).append(this.$mask);
    this.$closer = this.$panel.find('.cw_btn_cancel');
    this.$confirm = this.$panel.find('.cw_btn_confirm');
    this.$panel.css({
        visibility:'visible'
    }).hide().fadeIn();
    this._init();
}
CommentWindow.prototype={
    constructor:  CommentWindow,
    close:function(){
        this.$mask.fadeOut();
        this.$panel.fadeOut();
    },
    _init:function(){
        var that=this;
        this.$closer.on('click',function(){
            that.close();
        });
        this.$confirm.click(function(){
            if(that.callback){
                that.callback();
            }
            that.close();
        });
    },
    show:function(){
        this.$panel.show();
        this.$mask.show();
    },
    hide:function(){
        this.$panel.hide();
        this.$mask.hide();
    }
};

//确认框
function ConfirmWindow(config){
    $.extend(this,{
        content:'',
        callback:null
    },config);
    this.$mask=$('<div class="w_mask"></div>');
    this.$panel=$(
            '<div class="cw_panel">' +
            '<div class="cw_content"><p>' + this.content + '</p></div>' +
            '<div class="cw_option">' +
                '<div class="cw_btn_cancel btn btn-default btn-normal">取消</div>' +
                '<div class="cw_btn_confirm btn btn-success btn-normal">确定</div>' +
            '</div>' +
            '</div>').css({
            visibility:'hidden'
        });
    this.$mask.append(this.$panel);
    $(document.body).append(this.$mask);
    this.$closer = this.$panel.find('.cw_btn_cancel');
    this.$confirm = this.$panel.find('.cw_btn_confirm');
    this.$panel.css({
        visibility:'visible'
    }).hide().fadeIn();
    this._init();
}
ConfirmWindow.prototype={
    constructor:  ConfirmWindow,
    close:function(){
        this.$mask.fadeOut();
    },
    _init:function(){
        var that=this;
        this.$closer.click(function(){
            that.close();
        });
        this.$confirm.click(function(){
            if(that.callback){
                that.callback();
            }
            that.close();
        });
    },
    show:function(){
        this.$mask.show();
    },
    hide:function(){
        this.$mask.hide();
    }
};

function TipWindow(){
    var tipCC = document.createElement('div');
    tipCC.innerHTML =
        '<div style="position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0,0,0,0.7);z-index: 1000000;">'+
        '<div style="position: relative;height: 120px;border-radius: 0 0 15px 15px;-webkit-border-radius: 0 0 15px 15px;z-index: 1000001;margin: 0 10px;max-width: 960px;background: #f1f1f1;text-align: center;">' +
        '<div style="height: 30px;"></div>' +
        '<h3 style="margin-top: 20px;">点击右上角分享到朋友圈或好友</h3>' +
        '</div>' +
        '</div>';
    document.body.appendChild(tipCC);
    tipCC.onclick = function(){
        document.body.removeChild(tipCC);
    };
}
function FollowTip(){
    var tipCC = document.createElement('div');
    var parent = document.getElementById('ng-view');
    var position = document.getElementById('view-content');
    tipCC.innerHTML =
        '<div style="color:#fff;position: relative;line-height:40px;height: 40px;max-width: 960px;background: #f84e4e;text-align: left;font-size: 16px;">' +
        '<i style="height: 20px;width: 20px;margin: 10px;float: left;" class="gift-icon"></i>' +
        '<p>关注公众账号，即可向好友<span style="font-weight: bold">“求礼物”</span></p>' +
        '<p style="position: absolute;top: 0px;right: 10px;font-weight: bold;">></p>' +
        '</div>';
    parent.insertBefore(tipCC, position);
//    position.appendChild(tipCC);
}
function DownloadTip(){
    var tipCC = document.createElement('div');
    var position = document.getElementById('ng-view');

    tipCC.style.marginBottom = '15px';
    tipCC.innerHTML =
        '<div class="download-tip">' +
            '<p class="grey-text" style="margin-left: 10px;">相关推荐</p>' +
            '<div class="download-bar">' +
                '<i class="logo-icon"></i>' +
                '<div class="logo-name">' +
                    '<h3>礼物说</h3>' +
                    '<p class="grey-text">礼物攻略精选</p>' +
                '</div>' +
                '<button class="btn btn-default">下载</button>' +
            '</div>' +
        '</div>';
    position.appendChild(tipCC);
}
