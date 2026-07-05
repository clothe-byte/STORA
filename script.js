// =====================
// STORA SCRIPT
// =====================

window.onload = function () {
    document.documentElement.style.scrollBehavior = "smooth";
};

function dropShoe() {

    const screen =
        document.getElementById(
            "dropScreen"
        );

    const shoe =
        document.getElementById(
            "fallingShoe"
        );

    const splash =
        document.querySelector(
            ".splash"
        );

    // SHOW SCREEN
    screen.style.display = "block";

    // REMOVE OLD BUTTONS
    const oldBuy =
        document.getElementById(
            "buyBtn"
        );

    const oldBack =
        document.getElementById(
            "backBtn"
        );

    if (oldBuy)
        oldBuy.remove();

    if (oldBack)
        oldBack.remove();

    // RESET
    shoe.style.transition =
        "none";

    shoe.style.animation =
        "none";

    splash.style.animation =
        "none";

    shoe.style.left =
        "50%";

    shoe.style.top =
        "-500px";

    shoe.style.transform =
        "translateX(-50%) rotate(0deg)";

    splash.style.transform =
        "scale(0)";

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
            ".2s";

        shoe.style.transform =
            "translateX(-50%) rotate(30deg)";

    }, 2200);

    // ==================
    // TAP 2
    // ==================

    setTimeout(() => {

        shoe.style.transform =
            "translateX(-50%) rotate(10deg)";

    }, 2400);

    setTimeout(() => {

        shoe.style.transform =
            "translateX(-50%) rotate(30deg)";

    }, 2600);

    setTimeout(() => {

        shoe.style.transform =
            "translateX(-50%) rotate(10deg)";

    }, 2800);

    // ==================
    // LEFT SLIDE
    // ==================

    setTimeout(() => {

        shoe.style.transition =
            "1s ease";

        shoe.style.left =
            "-30%";

    }, 3400);

    // ==================
    // COME BACK
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

    }, 4700);

    // ==================
    // BUTTONS
    // ==================

    setTimeout(() => {

        // EXPLORE BUTTON

        const buy =
            document.createElement(
                "button"
            );

        buy.id =
            "buyBtn";

        buy.innerHTML =
            "EXPLORE COLLECTION";

        buy.style.position =
            "absolute";

        buy.style.bottom =
            "70px";

        buy.style.left =
            "50%";

        buy.style.transform =
            "translateX(-50%)";

        buy.style.padding =
            "15px 40px";

        buy.style.border =
            "none";

        buy.style.borderRadius =
            "40px";

        buy.style.fontSize =
            "18px";

        buy.style.cursor =
            "pointer";

        buy.style.background =
            "white";

        buy.style.color =
            "black";

        // PRODUCT PAGE OPEN

        buy.onclick =
            function () {

                window.location.href =
                    "product.html";

            };

        screen.appendChild(
            buy
        );

        // BACK BUTTON

        const back =
            document.createElement(
                "button"
            );

        back.id =
            "backBtn";

        back.innerHTML =
            "← BACK";

        back.style.position =
            "absolute";

        back.style.top =
            "30px";

        back.style.left =
            "30px";

        back.style.padding =
            "12px 25px";

        back.style.border =
            "none";

        back.style.borderRadius =
            "30px";

        back.style.background =
            "#111";

        back.style.color =
            "white";

        back.style.cursor =
            "pointer";

        back.style.fontSize =
            "16px";

        back.onclick =
            function () {

                screen.style.display =
                    "none";

                buy.remove();

                back.remove();

            };

        screen.appendChild(
            back
        );

    }, 6000);

}
