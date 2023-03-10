const button = document.querySelector(".button")
const submit = document.querySelector(".submit")
const toggleclass=()=>{
    this.classList.toggle("active");
}
const addClass=()=>{
    this.classList.add("finished");
}
 
 
button.addEventListener("click", toggleclass)
button.addEventListener("transitionend",toggleclass)
 