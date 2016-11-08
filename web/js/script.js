(function () {
    $('#home').fadeIn(1500);
})();

(function () {
    this.DB = {}
}).call(this),
    function () {
        this.DB.clickout = function (t) {
            return $(document).on("click", function () {
                return t.run()
            }), t.element.on("click", function (t) {
                return t.stopPropagation()
            })
        }
    }.call(this),
    function () {
        this.DB.headingLinks = function (t) {
            return t.elements.each(function () {
                var t, e;
                return t = $(this), e = DB.slugify(t.text()), t.attr("id", e), t.prepend("<a class='post-anchor' href='#" + e + "'><b class='srt'>#</b></a>")
            })
        }
    }.call(this),
    function () {
        jQuery(function (t) {
            return DB.clickout({
                element: t(".sidebar-toggle"),
                run: function () {
                    return t("html").removeClass("is-sidebar-open")
                }
            }), DB.headingLinks({
                elements: t(".post h2, .post h3, .post h4")
            }), t(".post img").parent("p").addClass("post-img"), t(".sidebar-toggle").on("click", function (e) {
                return e.preventDefault(), t("html").toggleClass("is-sidebar-open")
            }), t(document).on("keyup", function (e) {
                switch (e.which) {
                    case 83:
                        return t(".sidebar-toggle").trigger("click")
                }
            }), t(".post-meta-twitter").on("click", function (e) {
                var n, i, r, c, o, s;
                return e.preventDefault(), n = 400, s = 575, i = 0, c = 0, o = t(this).attr("href"), r = "url=/,status=1,width=" + s + ",height=" + n + ",top=" + c + ",left=" + i, window.open(o, "twitter", r)
            })
        })
    }.call(this);

(function () {
    $('#homeButton').click(function () {
        $("#about").fadeOut();
        $("#contact").fadeOut();
        $("#projects").fadeOut();
        setTimeout(function () {
            $("#home").fadeIn();
        }, 200);
    });
    $('#aboutButton').click(function () {
        $("#home").fadeOut();
        $("#contact").fadeOut();
        $("#projects").fadeOut();
        setTimeout(function () {
            $("#about").fadeIn();
        }, 200);
    });
    $('#projectsButton').click(function () {
        $("#home").fadeOut();
        $("#contact").fadeOut();
        $("#about").fadeOut();
        setTimeout(function () {
            $("#projects").fadeIn();
        }, 200);
    });
    $('#contactButton').click(function () {
        $("#home").fadeOut();
        $("#about").fadeOut();
        $("#projects").fadeOut();
        setTimeout(function () {
            $("#contact").fadeIn();
        }, 200);
    });
})();

(function () {
    var x = document.getElementsByClassName("flex-item");
    for (var i = 0; i < x.length; i++) {
        x[i].style['background-image'] = "url(web/media/bg" + (i + 1) + ".PNG)";
    }
})();
//
// (function () {
//     $(".flex-item").bind("mouseenter", function (event) {
//         $(event.target).find(".modal").fadeIn().css({'display': 'flex'});
//     });
//     $(".modal").bind("mouseleave", function (event) {
//         $(event.target).fadeOut();
//     })
// })();