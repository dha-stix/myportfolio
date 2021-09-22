const hamburger =  document.querySelector(".fa-bars")
const navBar = document.querySelector("#hamburger__menu")
hamburger.addEventListener("click", ()=> {
    navBar.classList.toggle('active')
})