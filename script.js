
var tl = gsap.timeline();




tl.to(".loader",{
top:'-800',
duration:2,
delay:'5',
opacity:0,
ease:"expo.inOut"

});

















var icon = document.querySelector("i");
var sidenav= document.querySelector("#sidenav")
flag = 0
icon.addEventListener("click",function(){
    if (flag ===0){
    sidenav.style.left  = "0%",
    sidenav.style.transition = ".8s ease"
    

    flag = 1
    }
    else{
        sidenav.style.left  = "-100%"
    sidenav.style.transition = ".5s ease"

    flag = 0
    }
})