

let click = new Audio('../audio/Mouse Click 01.mp3');


let sections = document.querySelectorAll("section")

let allLinkOfNav = document.querySelectorAll("header ul li a")
let allLiOfNav = document.querySelectorAll("header ul li ")
let ulNav=document.querySelector("header ul ")

let preloaderWidget=document.querySelector(".preloader")
let mode = false




window.onload=function(){
    preloaderWidget.classList.add("active")

}

window.onscroll = function (e) {

    //console.log(this.pageYOffset )
    sections.forEach((element, index) => {

        if (this.pageYOffset >= element.offsetTop && this.pageYOffset < (element.getBoundingClientRect().height + element.offsetTop)) {
            removeAllActive()
            allLinkOfNav[index].classList.add("active_link")


        }

    });

}


///After text fill End of preloader Page This Will Fire 
document.querySelector(".preloader .loader-title h2:last-of-type").addEventListener('transitionend', (e) => {
    e.target.parentNode.classList.add("is-done")
    preloaderWidget.classList.add("is-done")
});


let hideHeader = document.querySelector(".toggle-header .hide");
let showHeader = document.querySelector(".toggle-header .show");
let hidenElemntsUl=document.querySelectorAll(".toggle-header > i ")

hidenElemntsUl.forEach(element => {
    element.addEventListener("click",(e)=>{

        if(e.target.classList.contains("hide")){

            showHeader.style.transform ="scale(1)"
            ulNav.classList.add("hide")

        }
        else{
            hideHeader.style.transform ="scale(1)"
            ulNav.classList.remove("hide")

        }
    
        e.target.style.transform ="scale(0)"

    })
    
});



allLiOfNav.forEach((element)=>{
    element.addEventListener("click",()=>{
        let sectionName=element.querySelector("a").getAttribute("section").replace("#","")
        let secationElemet=document.getElementById(sectionName)
        
        window.scrollTo(0, secationElemet.offsetTop);

        
        ///Sound When i Clcik at Li on UL
        click.play();

    })

})


function removeAllActive() {
    allLinkOfNav.forEach(element => {
        element.classList.remove("active_link")

    });
}


let bottonChangeMode = document.querySelector(".change-theme")
function toggleMode() {
    mode = !mode

    document.body.classList.toggle('light')
    bottonChangeMode.setAttribute("class", `${mode ? "bx bx-moon" : "bx bx-sun"} change-theme`);

}

bottonChangeMode.onclick = function () {
    toggleMode()
}


