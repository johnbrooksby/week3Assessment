console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form Submitted Successfully");
}

function catMouseover(){
	alert("Good job! You put your mouse right on the cat!")
}


let form = document.querySelector('#contact');
let cat = document.querySelector("img");

form.addEventListener('submit', handleSubmit);
cat.addEventListener("mouseover", catMouseover)