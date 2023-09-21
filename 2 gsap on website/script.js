let t1 = gsap.timeline()
t1.from("#nav1, #nav2, #nav3",{
    y:20,
    top: 5,
    opacity:0,
    delay:1,
    duration:1,
    stagger:0.5
})
t1.from("#center h1,#center img",{
    opacity: 0,
    scale:0.5,
    stagger:0.3
})
t1.from("p",{
    y:4,
    repeat:-1,
    opacity:0,
    yoyo:true,
})