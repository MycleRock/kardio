!function(o){"use strict";o.fn.scrollProgress=function(){var s,n,i,t=o(this),e=function(){return o(document).height()-o(window).height()},r=function(){t.attr("value",(n=o(window).scrollTop(),100<(i=Math.ceil(n/s*100))?100:i))};s=e(),o(document).on("scroll",r),o(window).on("resize",function(){var n;(t.hasClass("fusion-fixed-top")||t.hasClass("fusion-fixed-top"))&&t.closest(".fusion-builder-row").css("z-index","11"),n=o("html"),t.hasClass("fusion-fixed-top")&&n.attr("style","margin-top:"+fusion.getAdminbarHeight()+"px!important;"),s=e(),r(),setTimeout(function(){s=e(),r()},700)})}}(jQuery),jQuery(window).on("load fusion-element-render-fusion_scroll_progress",function(o,s){var n=void 0!==s?jQuery('div[data-cid="'+s+'"]').find(".fusion-scroll-progress"):jQuery(".fusion-scroll-progress");setTimeout(function(){n.scrollProgress()},10)});