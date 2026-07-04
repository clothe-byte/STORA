window.onload = function () {
    document.body.style.scrollBehavior = "smooth";
};
function dropShoe() {

    alert("dropShoe started");

    const screen = document.getElementById("dropScreen");
    const shoe = document.getElementById("fallingShoe");
    const splash = document.querySelector(".splash");

    screen.style.display = "flex";

    shoe.style.animation = "fall 2s forwards";
}


    /
    
    // Splash after 1.5 sec
    setTimeout(() => {
        splash.style.animation =
            "splashEffect 0.7s forwards";
    }, 1500);

    // Close after 4 sec
    setTimeout(() => {
        screen.style.display = "none";
        shoe.style.animation = "none";
        splash.style.animation = "none";
    }, 4000);
}
