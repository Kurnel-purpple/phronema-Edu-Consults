const menuBtn = document.getElementById("Harmburger-menu");
const navItems = document.getElementById("nav-list")
const menuExit = document.getElementById("exitMenuBtn")


menuBtn.addEventListener('click',()=>{
    navItems.classList.add("blockMenu");
    menuBtn.style.display = "none";
});

menuExit.addEventListener('click',()=>{
    navItems.classList.remove("blockMenu");
    menuBtn.style.display = "flex";
})
