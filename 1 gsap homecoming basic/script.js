// timeline use for play in sync mode ek ke bad ek move hona



// gsap.to("h1",{
//     x: 300,
//     color: "green",
//     duration:2
// })
// gsap.to("h2",{
//     x: 300,
//     color: "orange",
//     duration:2,
//     rotate: 360,
//     // repeat:-1,
//     // yoyo:true
// })
// gsap.to("h3",{
//     x: 300,
//     color: "red",
//     duration:2,
//     size:800,
// })

let t1 = gsap.timeline()
t1.to("h1",{
    x: 300,
    color: "green",
    duration:2
})
t1.to("h2",{
    x: 300,
    color: "orange",
    duration:2,
    rotate: 360,
    // repeat:-1,
    // yoyo:true
})
t1.to("h3",{
    x: 300,
    color: "red",
    duration:2,
    size:800,
})