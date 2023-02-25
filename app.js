let navBar = document.querySelector(".navBar")
let MenuBtn = document.querySelector(".MenuBtn")
let exitMenuBtn = document.querySelector(".exitMenuBtn")
let StudyAbroadNav = document.querySelector(".StudyAbroadNav")
let studyAbroadDropDown = document.querySelector(".studyAbroadDropDown")

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

function showSAdropDown(){
    studyAbroadDropDown.classList.remove("hidden")
    studyAbroadDropDown.classList.add("flex")
    // alert("i work")
}
function closeSAdropDown(){
    studyAbroadDropDown.classList.add("hidden")
    studyAbroadDropDown.classList.remove("flex")
}
