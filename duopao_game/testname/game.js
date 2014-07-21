var WIDTH = 500,
    HEIGHT = 700;

window.onload = function(){
    init('t_wape01Bg', WIDTH, HEIGHT);
    init('t_wape02Bg', WIDTH, HEIGHT);

    function init(container, width, height){
        this.container = document.getElementsByClassName(container)[0] || null;
        this.width = width;
        this.height = height;

        var _container = this.container,
            _width = this.width,
            _height = this.height;

        if (window.innerWidth > _width) {
            _container.style.left = (window.innerWidth - _width) / 2 + 'px';
        }else{
            _container.style.left = '0px';
        };
        if (window.innerHeight > _height) {
            _container.style.top = (window.innerHeight - _height) / 2 + 'px';
        }else{
            _container.style.top = '0px';
        };
        _container.style.position = 'absolute';
        _container.style.width = _width + 'px';
        _container.width = _width;
        _container.style.height = _height + 'px';
        _container.height = _height;
    }
}
function back(){
    $('#content').hide();
    $('#firstName').val('');
    $('#lastName').val('');
    $('#sort_home').show();
}
function calc(){
    var firstTmp =  $("#firstName").val().replace(/[\u3000]/g,'');
    var lastTmp =  $("#lastName").val().replace(/[\u3000]/g,'');
    var first =firstTmp.replace(/\s/g,'');
    var last =lastTmp.replace(/\s/g,'');
    if(!checkName(first,2)){
        $('.tips').html('姓最多两个汉字！').show()
        return false;
    }
    if(!checkName(last,3)){
        $('.tips').html('名最多三个汉字！').show()
        return false;
    }
    $.ajax({
        url:'',
        success:function(result){
            $('#sort_home').hide();
            $("#content").html($("#template")[0].innerHTML);
            $("#content").show();

//            var data = {
//                firstName: result['firstname'],
//                lastName: result['lastname'],
//                score: result['score'],
//                result: {
//                    sancai:'bj',
//                    tiange:'j',
//                    renge:'j',
//                    dige:'j',
//                    waige:'j',
//                    zongge:'x'
//                },
//                settle: result['settle'],
//                desc: result['desc']
//            };
//            var html = template('resultTemplate', data);
//            $("#content").html(html);
//            document.getElementById('content').innerHTML = html;
        }
    })
}

function checkName(str,n){
    if(str.length > n || str.length === 0){
        return false;
    }
    for(var i=0,l=str.length; i<l; i++){
        if(str.charCodeAt(i)>0 && str.charCodeAt(i)<255){
            return false;
        }
    }
    return true;
}

//(function(){
//    if(window.location.toString().indexOf('canvas_pos=search') === -1){
//        document.getElementById('addBor').className = 'addBor';
//    }
//})()

document.onkeydown = function(e){
    var e = window.event || e;
    if(e.keyCode == 13){
        calc();
    }
}