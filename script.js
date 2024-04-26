gsap.to(".box1",{
    x:1000,
    duration:2,
    delay:1,
    backgroundColor:"blue",
    rotate:360,
    scale:0.5,
    borderRadius:"50%"
})
gsap.from(".box2",{
    x:1000,
    duration:2,
    delay:1
})
gsap.from("h1",{
    opacity:0,
    y:30,
    duration:2,
    delay:1,
    stagger:0.5,
    repeat:2
})