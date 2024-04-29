
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
gsap.from(".main2 h2",{
    scale:0,
    delay:1,
    duration:2,
    scrollTrigger:{
        trigger:".main2 h2",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:true
    }
})
gsap.to(".main3 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:".main3",
        scroller:"body",
        start:"top 0%",
        end:"bottom center",
        // markers:true,
        scrub:2,
        pin:true
    },
})