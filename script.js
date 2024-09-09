//your code here
let themebtn = document.querySelector("#swap");
let Tmode = "light" 

themebtn.addEventListener("click", mode)
function mode() {
	if (Tmode==="light") {
		Tmode = "dark"
		 document.querySelector("body").style.backgroundColor = "black"
	}
	else{
		Tmode="light"
		 document.querySelector("body").style.backgroundColor = "white"
	}
}
