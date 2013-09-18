; (function (window, $) {
    $.fn.extend({
        move: function (value) {
            var defaults = {
                box: '',
                progressbar: ''
            }
            value = $.extend(defaults, value);
            var $box = $('.' + value.box),
                $progressbar = $('.' + value.progressbar),
                $span = $progressbar.find('span'),
                $img = $box.find('img');
            var result = 0;
            //鼠标经过
            $box.on('mouseenter', function (event) {
                $progressbar.css('display', 'block');
                //鼠标移动
                $box.on('mousemove', function (event) {
                    var moveX = event.pageX - $box.offset().left;
                    //console.log(moveX+'........');
                    $span.css('width', moveX);
                    result = Math.floor(moveX / $progressbar.width() * $img.length);
                    //console.log(result);
                    $img.eq(result).css('display', 'block').siblings('img').css('display', 'none');
                });
            });
            //鼠标离开
            $box.on('mouseleave', function () {
                $progressbar.css('display', 'none');
            });
        }
    });



    $(document).ready(function () {
        $('.image').move({
            box: 'image',
            progressbar: 'progressbar'
        });
    });
})(window, jQuery);



//; (function (window,$) {
//    $(document).ready(function () {
//        var $box = $('.image'),
//            $progressbar = $('.progressbar'),
//            $span = $progressbar.find('span'),
//            $img = $box.find('img');
//        var result = 0;
//        //鼠标经过
//        $box.on('mouseenter', function (event) {
//            $progressbar.css('display', 'block');

//            //鼠标移动
//            $box.on('mousemove', function (event) {
//                var moveX = event.pageX - $box.offset().left;
//                console.log(moveX+'........');
//                $span.css('width', moveX);
//                result = Math.floor(moveX / $progressbar.width() * $img.length);
//                console.log(result);
//                $img.eq(result).css('display', 'block').siblings('img').css('display', 'none');

//            });
//        });

//        //鼠标离开
//        $box.on('mouseleave', function () {
//            $progressbar.css('display', 'none');
//        });
//    })

//})(window,jQuery)

