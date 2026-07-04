window.onload = function(){
    document.body.style.scrollBehavior = "smooth";
};
function dropShoe(){

    const screen =
        document.getElementById("dropScreen");

    const shoe =
        document.getElementById("fallingShoe");

    const splash =
        document.querySelector(".splash");

    // Screen show karo
    screen.style.display = "flex";

    // Shoe girana
    shoe.style.animation =
        "fall 1.5s forwards";

    // Splash chalana
    setTimeout(function(){

        splash.style.animation =
            "splashEffect 1s forwards";

    },1200);

    // 3 second baad sab reset
    setTimeout(function(){

        screen.style.display = "none";

        shoe.style.animation = "";

        splash.style.animation = "";

    },3000);
}
