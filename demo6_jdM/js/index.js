window.onload = function () {
    search();
    banner();
    downTime();
}
var search = function () {
    var searchBox = document.querySelector('.jd_search_box');
    var banner = document.querySelector('.jd_banner');
    var height = banner.offsetHeight;
    window.onscroll = function () {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop ;
        var opacity = 0;
        if (scrollTop < height) {
            opacity = scrollTop / height * 0.85;
        } else {
            opacity = 0.85;
        }
        searchBox.style.backgroundColor = 'rgba(201,21,35,'+ opacity + ')';
        console.log(scrollTop+new Date());
    };
}
var banner = function () {
    var banner = document.querySelector('.jd_banner');
    var width = banner.offsetWidth;
    var imageBox = banner.querySelector('ul:first-child');
    var pointsBox = banner.querySelector('ul:last-child');
    var points = pointsBox.querySelectorAll('li');
    var addTransition = function () {
        imageBox.style.transition = 'all 0.2s';
        imageBox.style.webkitTransition = 'all 0.2s';
    }
    var removeTransition = function () {
        imageBox.style.transition = 'none';
        imageBox.style.webkitTransition = 'none';
    }
    var setTranslateX = function (transitionX) {
        imageBox.style.transform = 'translateX('+ transitionX+'px)';
        imageBox.style.webkitTransform = 'translateX('+ transitionX+'px)';
    }

    var index =1 ;
    var timer = setInterval(function () {
        index++;
        addTransition()
        setTranslateX(-index * width);

    },1000);

    imageBox.addEventListener('transitionend', function () {
        /*自动滚动的无缝*/
        if (index >= 9) {
            index = 1;
            /*瞬间定位*/
            /*清过渡*/
            removeTransition();
            /*做位移*/
            setTranslateX(-index * width);
        }
        /*滑动的时候也需要无缝*/
        else if (index <= 0) {
            index = 8;
            /*瞬间定位*/
            /*清过渡*/
            removeTransition();
            /*做位移*/
            setTranslateX(-index * width);
        }
        /*根据索引设置点*/
        /*此时此刻  index  的取值范围  1-8（0,8--1,9）*/
        /*点索引  index - 1 */
        setPoints();
    });

    var setPoints= function () {
        for (var i=0;i<points.length;i++) {
            var obj = points[i];
            obj.classList.remove('now');
        }
        points[index-1].classList.add('now');
    }

    var startX = 0;
    var distanceX =0;
    var isMove = 0;
    imageBox.addEventListener('touchstart',function (e) {
        clearInterval(timer);
        startX = e.touches[0].clientX;
    });
    imageBox.addEventListener('touchmove', function (e) {
        distanceX = startX - e.touches[0].clientX;
        var translateX = -index * width - distanceX;
        removeTransition();
        setTranslateX(translateX);
        isMove = 1;
    });
    imageBox.addEventListener('touchend',function (e) {
        if (isMove) {
            if (Math.abs(distanceX) < width / 3) {
                addTransition();
                setTranslateX(-index * width);
            } else {
                if (distanceX > 0) {
                    index++;
                } else {
                    index--;
                }
                addTransition();
                setTranslateX(-index * width);
            }
        }
            startX = 0;
            distanceX = 0;
            isMove = 0;
            clearInterval(timer);
            timer = setInterval(function () {
                index++;
                addTransition();
                setTranslateX(-index * width);
            }, 1000);
    });
}
var downTime = function () {
    var time = 4 * 60 * 60;
    var spans = document.querySelectorAll('.time span');
    timer = setInterval(function () {
        var hh = time / 60 / 60;
        var mm = time % 3600 / 60;
        var ss = time % 60;
        time--;

        spans[0].innerHTML = Math.floor(hh / 10);
        spans[1].innerHTML = Math.floor(hh % 10);
        spans[3].innerHTML = Math.floor(mm / 10);
        spans[4].innerHTML = Math.floor(mm % 10);
        spans[6].innerHTML = Math.floor(ss / 10);
        spans[7].innerHTML = Math.floor(ss % 10);
        if (time < 0) {
            clearInterval(time);
        }
    }, 1000);
};