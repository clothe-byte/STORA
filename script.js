window.onload = function(){
    document.body.style.scrollBehavior = "smooth";
};
function dropShoe(){

    const screen =
        document.getElementById("dropScreen");

    const shoe =
        document.getElementById("fallingShoe");

    screen.style.display = "flex";

    shoe.style.animation =
        "fall 2s forwards";
}
