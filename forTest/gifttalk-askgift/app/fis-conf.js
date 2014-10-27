fis.config.merge({
    roadmap : {
        path : [
            {
                reg : 'scripts/**.js',
                release : '$&'
            },
            {
                //所有的css文件
                reg : 'styles/**.css',
                release : '$&'
            },
            {
                //所有image目录下的.png，.gif文件
                reg : /^\/images\/(.*\.(?:png|jpg|jpeg|gif))/i,
                release : 'images/$1'
            },
            {
                reg : /^\/views\/(.*\.(?:html))/i,
                release : 'views/$1'
            },
            {
                reg : 'index.html',
                release : '$&'
            },
            {
                //前面规则未匹配到的其他文件编译的时候不要产出了
                reg : /.*/,
                release : false
            }
        ]
    }
});