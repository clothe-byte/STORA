window.onload = function () {
    document.documentElement.style.scrollBehavior = "smooth";
};

function dropShoe() {

    const screen = document.getElementById("dropScreen");
    const shoe = document.getElementById("fallingShoe");
    const splash = document.querySelector(".splash");

    // Show screen
    screen.style.display = "flex";

    // Reset
    shoe.style.animation = "none";
    splash.style.animation = "none";

    shoe.style.left = "50%";
    shoe.style.top = "-500px";
    shoe.style.transform = "translateX(-50%) rotate(0deg)";

    void shoe.offsetWidth;

    // Fall animation
    shoe.style.animation = "fall 2s forwards";

    // Splash
    setTimeout(() => {
        splash.style.animation =
            "splashEffect 0.7s forwards";
    }, 1500);

    // Tap 1
    setTimeout(() => {
        shoe.style.transition = ".2s";
        shoe.style.transform =
            "translateX(-50%) rotate(30deg)";
    }, 2200);

    // Tap 2
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

    // Slide left
    setTimeout(() => {
        shoe.style.transition =
            "1s ease";
        shoe.style.left =
            "-30%";
    }, 3600);

    // Return from right
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

    // Buttons
    setTimeout(() => {

        const buy =
            document.createElement("button");

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

        buy.onclick =
            function () {
                window.location.href =
                    "product.html";
            };

        screen.appendChild(buy);

        const back =
            document.createElement("button");

        back.innerHTML =
            "← BACK";

        back.style.position =
            "absolute";

        back.style.top =
            "30px";

        back.style.left =
            "30px";

        back.onclick =
            function () {
                screen.style.display =
                    "none";

                buy.remove();
                back.remove();
            };

        screen.appendChild(back);

    }, 6200);
}
function showExplore(){

    const screen =
        document.getElementById(
            "exploreScreen"
        );

    screen.style.display =
        "block";

    setTimeout(() => {

        document.querySelector(
            ".left"
        ).style.left = "0";

        document.querySelector(
            ".right"
        ).style.right = "0";

    },100);

    setTimeout(() => {

        document.querySelector(
            ".explore-box"
        ).style.opacity = "1";

    },1000);
}

function closeExplore(){

    document.getElementById(
        "exploreScreen"
    ).style.display = "none";

    document.querySelector(
        ".left"
    ).style.left = "-50%";

    document.querySelector(
        ".right"
    ).style.right = "-50%";

    document.querySelector(
        ".explore-box"
    ).style.opacity = "0";
}

function openShoes(){

    document.getElementById(
        "products"
    ).scrollIntoView({
        behavior:"smooth"
    });

    closeExplore();
}

function openWatches(){

    alert(
        "⌚ Watches Collection Coming Soon"
    );
}
