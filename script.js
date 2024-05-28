// gsap.to("#box1", {
//     x:1200,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "blue",
//     scale: 2,
//     borderRadius: "50%"
// })

// gsap.to("#box2", {
//     x:500,
//     y:500,
//     duration: 2,
//     delay: 1
// })
// gsap.from("h1", {
//     // color: "red",
//     opacity: 0,
//     duration: 2,
//     delay:1,
//     y:20,
//     stagger: 1
// })

// gsap.to("#box", {
//     x: 1200,
//     duration: 4,
//     delay: 1,
//     rotate: 360,
//     repeat: 1,
//     yoyo: true
// })

// gsap.to("#box1", {
//     x: 1500,
//     rotate: 360,
//     duration: 1.5,
//     delay: 1
// })
// gsap.to("#box2", {
//     x: 1500,
//     backgroundColor: "yellow",
//     duration: 1.5,
//     delay: 1
// })

// var timeLine = gsap.timeline();

// timeLine.to("#box1", {
//     x: 1500,
//     rotate: 360,
//     duration: 1.5
// })
// timeLine.to("#box2", {
//     x: 1500,
//     duration: 1.5
// })
// timeLine.to("#box3", {
//     x: 1500,
//     duration: 1.5
// })

var timeLine = gsap.timeline();

timeLine.from("h2", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.2
})

timeLine.from("h4", {
    y: -30,
    opacity: 0,
    duration: 1,
    stagger: 0.1
})