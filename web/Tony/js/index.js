window.onload = function () {
    var T_one = document.getElementById("T-one"),
        dropD = document.getElementById("dropD"),
        CT = 0,
        cart = document.getElementsByClassName("cartBU"),
        cartBD = document.getElementById("cartBD"),
        sp1 = document.getElementById("sp1"),
        sp2 = document.getElementById("sp2"),
        sp3 = document.getElementById("sp3"),
        spVW = document.getElementById("spVW");
    /*-whatsapp-head-*/
    function Pscroll() {
        var oldSCH = window.scrollY;
        window.onscroll = function () {
            if (window.innerWidth <= 480) {
                window.scrollY > oldSCH ? T_one.style.display = "none" : T_one.style.display = "flex";
            } else {

            }
            oldSCH = window.scrollY;

        }
    }
    Pscroll();
    /*-close-list-*/
    for (CT; CT < cart.length; CT++) {
        cart[CT].onclick = function () {
            if (cartBD.style.display == "block") {
                cartBD.style.display = "none";
            } else {
                cartBD.style.display = "block";
            }
        }
    }
}
