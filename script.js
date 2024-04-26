
var tl = gsap.timeline();
tl.from(".navbar h2",{
    y:-20,
    opacity:0,
    duration:0.5,
    delay:0.5
})
tl.from(".nav-list h4",{
    y:-20,
    opacity:0,
    duration:0.5,
    stagger:0.2
})
tl.from(".main h1",{
    y:20,
    opacity:0,
    scale:0.5,
    duration:0.5
})
