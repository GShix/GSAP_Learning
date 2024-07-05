var tl = gsap.timeline()

tl.from(".navbar",{
    y:-20,
    duration:1,
    opacity:0,
    delay:1
})

tl.from(".nav-list h4",{
    scale:0,
    duration:0.5,
    opacity:0,
    stagger:0.3
})

tl.from(".box1 h2",{
    y:10,
    scale:0,
    duration:2
})


gsap.from(".box2 h1",{
    y:-30,
    scale:0,
    duration:2,
    scrollTrigger:{
        trigger:".box2 h1",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 60%",
        scrub:2
    }
})