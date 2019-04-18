window.onload = function () {
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body);
        }, false);
    }

    document.querySelector('.jd_cateLeft').addEventListener('touchmove',function(e){

        e.preventDefault();

    });
    document.querySelector('.jd_cateRight').addEventListener('touchmove',function(e){

        e.preventDefault();

    });

    new IScroll(document.querySelector('.jd_cateLeft'),{
        scrollX:false,
        scrollY:true
    });
    new IScroll(document.querySelector('.jd_cateRight'),{
        scrollX:false,
        scrollY:true
    });
}
