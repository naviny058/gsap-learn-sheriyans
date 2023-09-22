let t1 =gsap.timeline()
t1.from(" #nav1, #nav2, #nav3",{
    y:-80,
    opacity:0,
    duration:1,
    stagger:0.3
})

t1.from("#up-left h1, #up-left img",{
    x:-80,
    opacity:0,
    duration:0.5,
    stagger:0.3
})
t1.from("#up-right img",{
    opacity:0,
    scale:0.2,
    duration:1
})

gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroll:"body"
    }
})