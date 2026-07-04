// ====================
// STORA SCRIPT
// ====================

window.onload = function () {
    document.documentElement.style.scrollBehavior = "smooth";
};

function dropShoe() {

    const screen = document.getElementById("dropScreen");
    const shoe = document.getElementById("fallingShoe");
    const splash = document.querySelector(".splash");

    // show animation screen
    screen.style.display = "flex";

    // reset
    shoe.style.animation = "none";
    splash.style.animation = "none";

    void shoe.offsetWidth;

    // STEP 1
    // shoe falls
    shoe.style.animation = "fall 2s forwards";

    // STEP 2
    // splash
    setTimeout(() => {
        splash.style.animation =
            "splashEffect 0.7s forwards";
    }, 1500);

    // STEP 3
    // first tap
    setTimeout(() => {
        shoe.style.transform =
            "rotate(30deg)";
    }, 2200);

    // STEP 4
    // second tap
    setTimeout(() => {
        shoe.style.transform =
            "rotate(10deg)";
    }, 2600);

    setTimeout(() => {
        shoe.style.transform =
            "rotate(30deg)";
    }, 2900);

    // STEP 5
    // slide left
    setTimeout(() => {

        shoe.style.transition =
            "all 1s ease";

        shoe.style.left =
            "-500px";

    }, 3400);

    // STEP 6
    // enter from right
    setTimeout(() => {

        shoe.style.transition =
            "none";

        shoe.style.left =
            "120%";

        void shoe.offsetWidth;

        shoe.style.transition =
            "all 1s ease";

        shoe.style.left =
            "40%";

    }, 4500);

    // STEP 7
    // buy now button
    setTimeout(() => {

        const btn =
            document.createElement("button");

        btn.innerHTML =
            "BUY NOW";

        btn.style.position =
            "absolute";

        btn.style.bottom =
            "80px";

        btn.style.padding =
            "15px 40px";

        btn.style.fontSize =
            "20px";

        btn.style.borderRadius =
            "40px";

        btn.style.cursor =
            "pointer";

        btn.id =
            "buyBtn";

        screen.appendChild(btn);

    }, 5700);

}
