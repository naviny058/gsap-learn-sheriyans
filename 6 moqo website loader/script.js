let t1 = gsap.timeline()

function play(){
let a =0
setInterval(() => {
     a =  a +Math.floor(Math.random()*15)
    
    if(a <100){
    console.log(a);
    document.querySelector("#loader p").textContent = a+"%"
    }else{
        a =100
        document.querySelector("#loader P").textContent = a+"%"
    }
 }, 120);
}

t1.to("#loader p",{
    duration:1,
    delay:0.5,
    onStart:play()
})
t1.to("#loader",{
    top:"-100vh",
    delay:0.5,
    duration:1.5
})
t1.to("#page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:100,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        marker:true,
        start:"top 0",
        end:"top -200%",
        scrub:2,
        pin:true
    }
})
t1.from("#page2 h2",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroll:"body"
    }
})