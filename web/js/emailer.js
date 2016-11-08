(function () {
    var f = document.querySelector("#myForm"), a = f.querySelectorAll("[data-error]");

    function d(h) {
        return h.value !== ""
    }

    function e(h) {
        return h.value.indexOf("@") !== -1
    }

    function g(i, h) {
        return i.value.length > h
    }

    function c(i) {
        var h = document.querySelector("ul.errors");
        if (!h) {
            h = document.createElement("ul");
            h.classList.add("errors")
        }
        h.innerHTML = "";
        i.forEach(function (k) {
            var j = document.createElement("li");
            j.textContent = k;
            h.appendChild(j)
        });
        f.parentNode.insertBefore(h, f)
    }

    f.addEventListener("submit", function b(l) {
        l.preventDefault();
        var m = [];
        for (var h = 0; h < a.length; h++) {
            var k = a[h], j = false;
            if (k.type === "text") {
                j = d(k)
            } else {
                if (k.type === "email") {
                    j = e(k)
                } else {
                    if (k.type === "select-one") {
                        j = d(k)
                    } else {
                        if (k.type === "textarea") {
                            j = g(k, 2)
                        }
                    }
                }
            }
            if (!j) {
                m.push(k.dataset.error);
                k.classList.add("error");
                break
            } else {
                k.classList.remove("error")
            }
        }
        if (m.length) {
            c(m)
        } else {
            $.post("mail.php", {
                "your-name": $("#name").val(),
                "your-email": $("#mail").val(),
                "your-message": $("#area").val(),
                "your-subject": $("#sub").val()
            }).done(function () {
                $(".errors").remove();
                document.getElementById("info").innerHTML = "Message sent.";
                $("#name,#mail,#area,#sub").val("");
                setTimeout(function () {
                    document.getElementById("info").innerHTML = ""
                }, 2000)
            })
        }
    }, false)
})();
