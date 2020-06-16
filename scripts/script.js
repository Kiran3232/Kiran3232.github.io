// (function ($, win) {
//     $.fn.inViewport = function (cb) {
//         return this.each(function (i, el) {
//             function visPx() {
//                 var H = $(this).height(),
//                     r = el.getBoundingClientRect(), t = r.top, b = r.bottom;
//                 return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
//             } visPx();
//             $(win).on("resize scroll", visPx);
//         });
//     };
// }(jQuery, window));



// $(".to-slide-from-left").inViewport(function (px) {
//     if (px){
//         $(this).addClass("from-left");
//     }
// });

// $(".to-slide-from-right").inViewport(function (px) {
//     if (px){
//         $(this).addClass("from-right");
//     }
// });

(function ($) {
    $.fn.visible = function (partial) {
        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };
})(jQuery);

var win = $(window);
var allFromLeft = $(".to-slide-from-left");

win.scroll(function (event) {
    $(".to-slide-from-right").each(function (i, el) {
        doAction('from-right', $(el));
    });
    $(".to-slide-from-left").each(function (i, el) {
        doAction('from-left', $(el));
    });
    $(".to-fade-in").each(function (i, el) {
        doAction('fade-in', $(el));
    });
    $(".to-slide-from-bottom").each(function (i, el) {
        doAction('from-bottom', $(el));
    });
});

function doAction(action, ele) {
    if (ele.visible(true)) {
        ele.addClass(action);
    }
}