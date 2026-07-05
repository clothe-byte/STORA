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

    // Show animation screen
    screen.style.display = "block";

    // Remove old button
    const oldBtn =
        document.getElementById(
            "buyBtn"
        );

    if (oldBtn)
        oldBtn.remove();

    // Reset everything
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
        "translateX(-50%) scale(0)";

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
            "splash .7s forwards";

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
    // SLIDE LEFT
    // ==================

    setTimeout(() => {

        shoe.style.transition =
            "1s ease";

        shoe.style.left =
            "-30%";

    }, 3400);

    // ==================
    // RETURN RIGHT
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
    // SHOW BUTTON
    // ==================

    setTimeout(() => {

        const btn =
            document.createElement(
                "button"
            );

        btn.id =
            "buyBtn";

        btn.innerHTML =
            "EXPLORE COLLECTION";

        screen.appendChild(
            btn
        );

    }, 6000);
}
// ==================
// CLOSE BUTTON
// ==================

setTimeout(() => {

    const closeBtn =
        document.createElement("button");

    closeBtn.innerHTML = "BACK";

    closeBtn.id = "backBtn";

    closeBtn.onclick = function () {

        screen.style.display = "none";

        const old =
            document.getElementById(
                "buyBtn"
            );

        if(old) old.remove();

        closeBtn.remove();
    };

    screen.appendChild(closeBtn);

}, 6000);
