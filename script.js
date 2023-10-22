var icons = document.querySelectorAll(".icon");
var shadow = document.querySelector("#shadow");
icons.forEach(function(val , index){
    val.addEventListener("click" , function(){
        dullandbright() ;
        gsap.to("#shadow" , {
            x: index*100,
            ease: Expo.easeInOut,
            duration: .1
        })
        gsap.to(this.children, {
            opacity: 1 
            
        }) ;
    })
})


function dullandbright(){
    gsap.to(".icon i", {
        opacity: .3
    })
}


// step 1 do tag ko do var me store kr lo 
// icons wale me node list ayegi to uske var me forEach method lgani pdegi
// use andr function me pass ki gae 2 variable val or index ka use kr na hai 
// val me  eventListener lgana   hai or 
// gsap ka use krke 100 px move krna hai 
