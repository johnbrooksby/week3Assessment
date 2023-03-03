let colorBtn = document.getElementById("color");
let placeBtn = document.getElementById("place");
let ritBtn = document.querySelector("#ritual");

function favColorBtn (){
    alert("My favorite color is blue. No, AAAAAAAGGGHHHH!!");
}

function favPlaceBtn (){
    alert("My favorite place is home");
}

function favRitualBtn (){
    alert("My favorite ritual is trying to cram enough rest into as little sleep as possible");
}

colorBtn.addEventListener("click", favColorBtn);
placeBtn.addEventListener("click", favPlaceBtn);
ritBtn.addEventListener("click", favRitualBtn);