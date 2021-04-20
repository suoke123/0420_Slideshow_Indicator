/* eslint-disable */

$(function(){

    /* 번호 표기 이미지 */
    for (var i = 0; i<4; i++) {
        $("#pic div").eq(i).children("a").append("<span class='idxing'>"+ (i+1) +"</span>");
    }
    $("span.idxing").css({
        "color": "#f80",
        "font-size": "80px",
        "font-weight": "bold",
        "position": "absolute",
        "right": "10%",
        "top": "10%"
    });
    /* 번호 표기 이미지 */

    $("#control a").click(function(){

        var num = Number($(this).text()) -1;    // 인덱스번호 0, 1, 2, 3
        $(this).addClass("on").siblings().removeClass("on");

    //    $("#pic>div").filter(":visible").stop(true).fadeOut(350).end().eq(num).stop(true).fadeIn(350);
        $("#pic>div").filter(":visible").stop(true).fadeOut(350);
        $("#pic>div").eq(num).stop(true).fadeIn(350);

    });

    $("#control a:first").addClass("on").add("#pic>div:first").show();

});
