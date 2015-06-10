$(function() {
    // 团队页面, 根据鼠标移动显示不同头像

    // 1. 获取鼠标座标
    // 2. 获取 div 在窗口的位置座标
    // 3. 根据以上座标返回图片偏移 ID (即 offsetMultiples)
    // 4. 根据偏移 ID 对背景图进行具体的偏移 (即 finalOffset)
    // 5. 根据鼠标移动等事件触发

    var a, b, g, i, j, offsetMultiples, finalOffset, displayPersonalIntroduction, eventAttach;
    // a 代表 DOM 所有头像所在容器
    // b 代表 DOM 某个单个头像所在容器
    // j 代表 对象, 内含图片尺寸和角度

    return a = $(".members-list"), b = a.find(".member"), j = {
        imageSize: 190,
        lookStraight: 30,
        blocks: 8,
        blockAdjustment: 2
    }, offsetMultiples = function(a, b, c, d) {
        // 核心代码!
        // a, b 为鼠标座标
        // c, d 为单个头像座标

        var e, f, g, x, y;
        // x 为 X 轴差值
        // y 为 Y 轴差值
        // e 为鼠标与对象中心的距离

        // 可能存在的角度为 180° ~ -180°. 通过 Atan2 将角度相应的对应值放在 -PI ~ PI 之间.
        // 除以 PI 后将对应值放在 -1 ~ 1 之间. 乘以 4 后将其对应值放在 -4 ~ 4 之间.
        // 使用 round 进行四舍五入让取值必定是整数. 对应值放在 -4 ~ 4 之间的整数.
        // 为了调整顺序. 对应值放在 -6 ~ 2 之间的整数. g = g -10, g = g + 6 和此例有同等效果.
        // g = (8 - g) % 8 是为了让数字段无论处于哪个区间都能输入 0 ~ 7 这几个值. % 是取余数.

        return y = a - c, x = b - d, e = Math.sqrt(x * x + y * y), e < j.lookStraight ? g = j.blocks : (f = Math.PI / j.blocks * 2, g = Math.round(Math.atan2(y, x) / f), g -= j.blockAdjustment, g = (j.blocks - g) % j.blocks), g
    }, finalOffset = function(a, c) {
        var e;
        return e = j.imageSize, $.each(b, function(b, g) {
            var h, i, j, k, l;
            return g = $(g), h = g.offset(), i = h.left + e / 2, j = h.top + e / 2, l = 1, k = -e * offsetMultiples(a, c, i, j) - l, g.css("background-position", "0px " + k + "px")
        })
    }, i = function(a) {
        // 在单击后重置并再次触发事件
        var b, c;
        return b = a.height(), c = a.offset().top, finalOffset(a.offset().left + b / 2, c + b / 2)
    }, g = function(a) {
        // 实施偏移
        return finalOffset(a.pageX, a.pageY)
    }, displayPersonalIntroduction = function(a) {
        var b;
        return b = $($(this).hasClass("member") ? this : "#" + $(this).data("target")), b.hasClass("back") ? (b.removeClass("back"), b.hasClass("supporter") || b.find(".full-name").addClass("transparent")) : (b.siblings(".member").removeClass("back"), b.hasClass("supporter") || (b.siblings(".member:not('.supporter')").find(".full-name").addClass("transparent"), b.find(".full-name").removeClass("transparent")), b.addClass("back")), b.hasClass("back") ? ($(window).unbind("mousemove"), i(b)) : ($(window).mousemove(g), g(a))
    }, eventAttach = function() {
        return $(window).on("mousemove", g), b.click(displayPersonalIntroduction)
    }, a.length ? eventAttach() : void 0
})(window, document);