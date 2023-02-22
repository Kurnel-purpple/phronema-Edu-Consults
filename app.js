let navBar = document.querySelector(".navBar")
let MenuBtn = document.querySelector(".MenuBtn")
let exitMenuBtn = document.querySelector(".exitMenuBtn")

function openMenu(){
    navBar.classList.add("blockMenu");
    MenuBtn.style.display = "none";
    // console.log(menuBtn.style.display)
}
function closeMenu(){
    navBar.classList.remove("blockMenu");
    MenuBtn.style.display = "flex";
}