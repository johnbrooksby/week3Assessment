let restaurant = document.querySelector(".findRest");

function randRest (){
    let placesArr = ["Kneaders at Riverwoods Provo", "Maria Bonita Mexican Grill at State St and 800 N", "Apollo Burgers at State St and 400 N", "Sushi 38 at 800 N and 800 E"]
    let random = Math.floor(Math.random() * placesArr.length)
    alert(`You should eat at ${placesArr[random]}`)
}

restaurant.addEventListener("click", randRest)