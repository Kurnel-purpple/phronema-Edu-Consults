let navBar = document.querySelector(".navBar")
let MenuBtn = document.querySelector(".MenuBtn")
let exitMenuBtn = document.querySelector(".exitMenuBtn")

function openMenu(){
    navBar.classList.add("blockMenu");
    navBar.classList.remove("hidden")
    MenuBtn.style.display = "none";
    // console.log(menuBtn.style.display)
}
function closeMenu(){
    navBar.classList.remove("blockMenu");
    navBar.classList.add("hidden")
    MenuBtn.style.display = "flex";
}