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
    duration:1,
    // repeat:-1
})


gsap.from(".box2 h1",{
    x:400,
    scale:0,
    duration:2,
    scrollTrigger:{
        trigger:".box2 h1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 60%",
        scrub:2
    }
})
gsap.from(".box2 p",{
    x:-400,
    scale:0,
    duration:2,
    scrollTrigger:{
        trigger:".box2 p",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 60%",
        scrub:2
    }
})

gsap.to(".box3 h1",{
    transform: "translateX(-70%)",
    scrollTrigger:{
        trigger:".box3",
        scroller:"body",
        // markers:true,
        start:"top 10%",
        end:"top -150%",
        scrub:2,
        pin:true
    }
})

//for string
var initialPath =`M 10 100 Q 255 100 490 100`
var finalPath =`M 10 100 Q 240 100 490 100`

var string = document.querySelector(".string")
string.addEventListener("mousemove",(dets)=>{
    path = `M 10 100 Q ${dets.x} ${dets.y} 490 100`

    gsap.to("svg path",{
        attr:{d:path},
        duration:0.3,
        ease:"power3.out"
    })
})
string.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr:{d:finalPath},
        ease:"elastic.out(1,0.2)",
        duration:1.3
    })
})

var navbar = document.querySelector(".nav-list");
var cursor = document.querySelector(".cursor");

navbar.addEventListener("mousemove",(dets)=>{
    cursor.innerHTML="Click"
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out",
        opacity:1,scale:1
    })
})
navbar.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        opacity:0,
        scale:0
    })
})