// Smooth scrolling
window.onload = function () {
    document.documentElement.style.scrollBehavior = "smooth";
};

// Adidas Samba Drop Animation
function dropShoe() {

    const screen = document.getElementById("dropScreen");
    const shoe = document.getElementById("fallingShoe");
    const splash = document.querySelector(".splash");

    // Agar elements na milen to error dikhao
    if (!screen || !shoe || !splash) {
        alert("Animation elements not found!");
        return;
    }

    // Screen show karo
    screen.style.display = "flex";

    // Purani animation reset karo
    shoe.style.animation = "none";
    splash.style.animation = "none";

    // Browser ko refresh karne par majboor karo
    void shoe.offsetWidth;

    // Shoe ko shuru ki position par lao
    shoe.style.top = "-500px";

    // Shoe drop animation start
    shoe.style.animation = "fall 2s forwards";

    // Splash animation
    setTimeout(() => {
        splash.style.animation = "splashEffect 0.8s forwards";
    }, 1500);

    // 4 second baad sab band
    setTimeout(() => {
        screen.style.display = "none";
        shoe.style.animation = "none";
        splash.style.animation = "none";
        splash.style.transform = "scale(0)";
    }, 4000);
}
