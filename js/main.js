

let home=document.getElementById("home")

let about=document.getElementById("about")

let skills=document.getElementById("skills")

let work=document.getElementById("work")


let contact=document.getElementById("contact")

let bottonChangeMode=document.querySelector(".change-theme")

let sections=document.querySelectorAll("section")

let allLinkOfNav=document.querySelectorAll("header ul li a")

let mode=false

window.onscroll=function(e){

    //console.log(this.pageYOffset)

    sections.forEach((element,index) => {

        if(this.pageYOffset >= element.offsetTop && this.pageYOffset < (element.getBoundingClientRect().height+element.offsetTop)  ){
            removeAllActive()
            allLinkOfNav[index].classList.add("active_link")
            console.log(index)


        }
        
    });

}

function removeAllActive(){
    allLinkOfNav.forEach(element => {


        element.classList.remove("active_link")
        
    });
}


function toggleDarkMode(){
    mode=!mode

    document.body.classList.toggle('light')
    bottonChangeMode.setAttribute("class", `${mode ?"bx bx-moon" :"bx bx-sun" } change-theme`);

}

bottonChangeMode.onclick=function(){
    toggleDarkMode()
}


