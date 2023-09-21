gsap.from("#page1 .square",{
    duration:2,
    rotate:360,
    opacity:0,
    scale:2,
    scrollTrigger: "#page1 .square"
})
gsap.from("#page2 .square",{
    duration:8,
    rotate:360,
    opacity:0,
    scale:2,
    scrollTrigger:{
        trigger:"#page2 .square",
        scroller:"body",
        markers:true,       //remove this in production
        start:"top 50%",
        end:"bottom 50%",
        scrub:1            //follow the scroll action
    }
})
gsap.from("#page3 .square",{
    duration:2,
    rotate:360,
    opacity:0,
    scale:2,
    scrollTrigger: "#page3 .square"
})