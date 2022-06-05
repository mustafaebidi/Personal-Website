

let home = document.getElementById("home")

let about = document.getElementById("about")

let skills = document.getElementById("skills")

let work = document.getElementById("work")


let contact = document.getElementById("contact")

let bottonChangeMode = document.querySelector(".change-theme")

let sections = document.querySelectorAll("section")

let allLinkOfNav = document.querySelectorAll("header ul li a")
let allLiOfNav = document.querySelectorAll("header ul li ")
let ulNav=document.querySelector("header ul ")

let preloaderWidget=document.querySelector(".preloader")
let mode = false

let toggleHeader=document.querySelector(".toggle-header")

let click = new Audio('../audio/Mouse Click 01.mp3');


toggleHeader.addEventListener("click",(e)=>{

    if(e.target !== toggleHeader){
        if(e.target.classList.contains("hide")){

            document.querySelector(".toggle-header .show").style.transform ="scale(1)"
            ulNav.classList.add("hide")

        }
        else{
            document.querySelector(".toggle-header .hide").style.transform ="scale(1)"
            ulNav.classList.remove("hide")

        }
    
        e.target.style.transform ="scale(0)"

    }


    
})




allLiOfNav.forEach((element)=>{
    element.addEventListener("click",()=>{
        click.play();

    })

})
document.querySelector(".preloader .loader-title h2:last-of-type").addEventListener('transitionend', (e) => {
    e.target.parentNode.classList.add("is-done")
    preloaderWidget.classList.add("is-done")
});


window.onload=function(){
    preloaderWidget.classList.add("active")

}

window.onscroll = function (e) {

    //console.log(this.pageYOffset)

    sections.forEach((element, index) => {

        if (this.pageYOffset >= element.offsetTop && this.pageYOffset < (element.getBoundingClientRect().height + element.offsetTop)) {
            removeAllActive()
            allLinkOfNav[index].classList.add("active_link")


        }

    });

}

function removeAllActive() {
    allLinkOfNav.forEach(element => {


        element.classList.remove("active_link")

    });
}


function toggleDarkMode() {
    mode = !mode

    document.body.classList.toggle('light')
    bottonChangeMode.setAttribute("class", `${mode ? "bx bx-moon" : "bx bx-sun"} change-theme`);

}

bottonChangeMode.onclick = function () {
    toggleDarkMode()
}


