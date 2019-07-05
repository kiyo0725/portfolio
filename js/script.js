$(function () {

    // メニューバーの開閉、 開閉した際の、marginの調節
    $(".button").click(function () {
        $(this).toggleClass("open");
        if ($(this).hasClass("open")) {
            $("header")
                .stop()
                .animate({
                    left: "-135px"
                }, 500, "easeOutBack");
            $("main").css("margin-left", 65);
            $("footer").css("margin-left", 50);
            $("header span").css("display", "none");
            $("header li a").css("text-align", "right");
            $(this).html(
                '<p><i class="fas fa-chevron-circle-right"></i>OPEN</p>'
            );
        } else {
            $("header")
                .stop()
                .animate({
                    left: "0"
                }, 500, "easeInBack");
            $("main,footer").css("margin-left", 200);
            $("header span").css("display", "inline-block");
            $("header li a").css("text-align", "left");
            $(this).html(
                '<p><i class="fas fa-chevron-circle-left"></i>CLOSE</p>'
            );
        }
    });

    // PCからSPに画面サイズ変更した際の処理
    $(window).resize(function () {
        var width = $(window).outerWidth();
        if (width <= 768) {
            $("main,footer").css("margin-left", 0);
        }
    });


    // Scrollボタン押した際の、スムーススクロール
    $("a.scroll").click(function () {
        var work = $("#work").offset().top;
        work -= 80;
        $("html,body")
            .stop()
            .animate({
                scrollTop: work
            }, 500);
        return false;
    });

    // PC、該当箇所にスムーススクロール
    $("header a").click(function () {
        var position = $($(this).attr("href")).offset().top;
        position -= 30;
        $("html,body")
            .stop()
            .animate({
                scrollTop: position
            }, 500);
        return false;
    });

    // SP、該当箇所にスムーススクロール
    $(".spNav a").click(function () {
        var position = $($(this).attr("href")).offset().top;
        position -= 80;
        $("html,body")
            .stop()
            .animate({
                scrollTop: position
            }, 500);
        return false;

    });

    // PC、スクロールした際のハイライト
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        scrollTop += 100;
        for (var i = 1; i <= 5; i++) {
            var position = $("section:nth-of-type(" + i + ")").offset().top;
            if (scrollTop >= position) {
                $("header nav li").removeClass("current");
                $("header nav li:nth-of-type(" + i + ")").addClass("current");
            }
        }
    });

    // SP、スクロールした際のハイライト
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        scrollTop += 200;
        for (var i = 1; i <= 4; i++) {
            var position = $("section:nth-of-type(" + (i + 1) + ")").offset().top;
            if (scrollTop >= position) {
                $(".spNav li").removeClass("current");
                $(".spNav li:nth-of-type(" + i + ")").addClass("current");
            } else if (scrollTop <= 865) {
                $(".spNav li").removeClass("current");
            }
        }
    });

    // スキル、ホバーした際のテキストの表示
    $(".circleInner").hover(function () {
            $(this).children("p").stop().fadeIn(700);
        }, function () {
            $(this).children("p").stop().fadeOut(700);
        }

    );

    // 作品一覧モーダル
    $(".moreButton1").click(function () {
        $(".modalContents1,.masking1").fadeIn();
        return false;
    });

    $(".moreButton2").click(function () {
        $(".modalContents2,.masking2").fadeIn();
        return false;
    });

    $(".moreButton3").click(function () {
        $(".modalContents3,.masking3").fadeIn();
        return false;
    });

    $(".masking1,.closeButton").click(function () {
        $(".modalContents1,.masking1").fadeOut();
        return false;
    });

    $(".masking2,.closeButton").click(function () {
        $(".modalContents2,.masking2").fadeOut();
        return false;
    });

    $(".masking3,.closeButton").click(function () {
        $(".modalContents3,.masking3").fadeOut();
        return false;
    });

    // スキルの項目、スクロールした時に作動
    var windowWidth = $(window).width();
    var windowSm = 768;
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var skill = $("section:nth-of-type(4)").offset().top;
        if (windowWidth <= windowSm) {
            skill -= 450;
            if (scrollTop >= skill) {
                $(".html .circleLeft").css("animation", "htmlLeft 7s linear forwards 1");
                $(".html .circleRight").css("animation", "htmlRight 7s linear forwards 1");
                $(".css .circleLeft").css("animation", "cssLeft 7s linear forwards 1");
                $(".css .circleRight").css("animation", "cssRight 7s linear forwards 1");
            }

            skill += 250;
            if (scrollTop >= skill) {
                $(".javascript .circleRight").css("animation", "javascriptRight 7s linear forwards 1");
                $(".jquery .circleLeft").css("animation", "jqueryLeft 7s linear forwards 1");
                $(".jquery .circleRight").css("animation", "jqueryRight 7s linear forwards 1");
            }

            skill += 250;
            if (scrollTop >= skill) {
                $(".gulp .circleRight").css("animation", "gulpRight 7s linear forwards 1");
                $(".sass .circleRight").css("animation", "sassRight 7s linear forwards 1");
            }

            skill += 250;
            if (scrollTop >= skill) {
                $(".photoshop .circleRight").css("animation", "photoshopRight 7s linear forwards 1");
                $(".illustrator .circleRight").css("animation", "illustratorRight 7s linear forwards 1");
            }

            skill += 250;
            if (scrollTop >= skill) {
                $(".adobexd .circleRight").css("animation", "adobexdRight 7s linear forwards 1");
                $(".wordpress .circleLeft").css("animation", "wordpressLeft 7s linear forwards 1");
                $(".wordpress .circleRight").css("animation", "wordpressRight 7s linear forwards 1");
            }
        } else {
            skill -= 700;
            if (scrollTop >= skill) {
                $(".html .circleLeft").css("animation", "htmlLeft 7s linear forwards 1");
                $(".html .circleRight").css("animation", "htmlRight 7s linear forwards 1");
                $(".css .circleLeft").css("animation", "cssLeft 7s linear forwards 1");
                $(".css .circleRight").css("animation", "cssRight 7s linear forwards 1");
                $(".javascript .circleRight").css("animation", "javascriptRight 7s linear forwards 1");
            }

            skill += 300;
            if (scrollTop >= skill) {
                $(".jquery .circleLeft").css("animation", "jqueryLeft 7s linear forwards 1");
                $(".jquery .circleRight").css("animation", "jqueryRight 7s linear forwards 1");
                $(".gulp .circleRight").css("animation", "gulpRight 7s linear forwards 1");
                $(".sass .circleRight").css("animation", "sassRight 7s linear forwards 1");
            }

            skill += 300;
            if (scrollTop >= skill) {
                $(".photoshop .circleRight").css("animation", "photoshopRight 7s linear forwards 1");
                $(".illustrator .circleRight").css("animation", "illustratorRight 7s linear forwards 1");
                $(".adobexd .circleRight").css("animation", "adobexdRight 7s linear forwards 1");
            }

            skill += 300;
            if (scrollTop >= skill) {
                $(".wordpress .circleLeft").css("animation", "wordpressLeft 7s linear forwards 1");
                $(".wordpress .circleRight").css("animation", "wordpressRight 7s linear forwards 1");
            }
        }
    });
});