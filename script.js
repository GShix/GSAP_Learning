function page1Animation() {
    var tl = gsap.timeline()

    tl.from("nav h1, nav h2, nav button", {
        y: -40,
        opacity: 0,
        duration: .5,
        delay: 1,
        stagger: .12
    })

    tl.from(".center-part1 h1", {
        x: -200,
        opacity: 0,
        duration: .5
    }, "-=.5")
    tl.from(".center-part1 p", {
        x: -200,
        opacity: 0,
        duration: 0.4
    })
    tl.from(".center-part1 button", {
        scale: 0,
        opacity: 0
    }, "-=.2")
    tl.from(".center-part2 img", {
        scale: 0.5,
        opacity: 0,
        duration: .6
    }, "-=.7")
    tl.from(".section-bottom1 img", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: .5
    })
}

function page2Animation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scoller: "body",
            markers: true,
            start: "top 50%",
            end: "top -30%",
            scrub: 2
        }
    })

    tl2.from(".services", {
        y: 30,
        opacity: 0,
        duration: .5
    })

    //line1
    tl2.from(".elm.left.line1", {
        x: -200,
        opacity: 0,
        duration: 1
    }, "one")
    tl2.from(".elm.right.line1", {
        x: 200,
        opacity: 0,
        duration: 1
    }, "one")

    //lin2
    tl2.from(".elm.left.line2", {
        x: -200,
        opacity: 0,
        duration: .6
    }, "two")
    tl2.from(".elm.right.line2", {
        x: 200,
        opacity: 0,
        duration: 1
    }, "two")
}

page1Animation();
page2Animation();