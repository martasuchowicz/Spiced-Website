(function () {
    var hamburger = document.getElementById("hamburgermenu-img");
    console.log(hamburger);
    var xButton = document.getElementById("x-button");
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("overlay");

    hamburger.addEventListener("click", function () {
        overlay.style.display = "block";
        menu.classList.add("open");
    });

    overlay.addEventListener("click", function () {
        menu.classList.remove("open");
        overlay.style.display = "none";
    });

    xButton.addEventListener("click", function () {
        menu.classList.remove("open");
        overlay.style.display = "none";
    });
    var popup = $("#pop-up");

    $("#x-Button").on("click", function () {
        popup.hide();
    });

    $(document).ready(function () {
        popup.css({
            display: "flex",
        });
        popup.hide().delay(1500).show(1);
    });
})();
