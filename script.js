        // ====================
// STORA SCRIPT
// ====================

window.onload = function () {
    document.documentElement.style.scrollBehavior = "smooth";
};

function dropShoe() {

    const screen =
        document.getElementById("dropScreen");

    const shoe =
        document.getElementById("fallingShoe");

    const splash =
        document.querySelector(".splash");

    // Show screen
    screen.style.display = "flex";

    // Remove old button
    const oldBtn =
        document.getElementById("buyBtn");

    if (oldBtn)
        oldBtn.remove();

    // Reset
    shoe.style.animation = "none";
    splash.style.animation = "none";
    shoe.style.transition = "none";

    shoe.style.left = "50%";
    shoe.style.top = "-500px";

    shoe.style.transform =
        "translateX(-50%) rotate(0deg)";

    void shoe.offsetWidth;

    // ==================
    // FALL
    // ==================
    shoe.style.animation =
        "fall 2s forwards";

    // ==================
    // SPLASH
    // ==================
    setTimeout(() => {

        splash.style.animation =
            "splashEffect .7s forwards";

    }, 1500);

    // ==================
    // TAP 1
    // ==================
    setTimeout(() => {

        shoe.style.transition =
            ".25s";

        shoe.style.transform =
            "translateX(-50%) rotate(30deg)";

    }, 2200);

    // ==================
    // TAP 2
    // ==================
    setTimeout(() => {

        shoe.style.transform =
            "translateX(-50%) rotate(10deg)";

    }, 2500);

    setTimeout(() => {

        shoe.style.transform =
            "translateX(-50%) rotate(30deg)";

    }, 2800);

    setTimeout(() => {

        shoe.style.transform =
            "translateX(-50%) rotate(10deg)";

    }, 3100);

    // ==================
    // LEFT SLIDE
    // ==================
    setTimeout(() => {

        shoe.style.transition =
            "1s ease";

        shoe.style.left =
            "-30%";

    }, 3600);

    // ==================
    // COME FROM RIGHT
    // ==================
    setTimeout(() => {

        shoe.style.transition =
            "none";

        shoe.style.left =
            "130%";

        void shoe.offsetWidth;

        shoe.style.transition =
            "1s ease";

        shoe.style.left =
            "50%";

    }, 5000);

    // ==================
    // BUTTON
    // ==================
    setTimeout(() => {

        const btn =
            document.createElement("button");

        btn.id =
            "buyBtn";

        btn.innerHTML =
            "EXPLORE COLLECTION";

        screen.appendChild(btn);

    }, 6200);

}
