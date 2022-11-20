// paceOptions = {
//     ajax: true, 
//     document: true, 
// }

// Pace.on('done',() => {
//     gsap.timeline()
//     .to('pace',{
//         transform: 'scale(10,1)',
//         duration: 4
//     },'+=.2')


//     .to('pace',{
//         duration: 1,
//         height:'100%'
//     },'-=.5')

//     .to('.loading__text',{
//         delay: .2,
//         duration: 2,
//         opacity: 0,
//         yPercent: -200,
//         ease:'BezierEasing(0.19,1,0.22,1)'
//     })
//     .to('#preloader',{
//         opacity:0,
//     })

//     .to('.title',{
//         delay: .2,
//         duration: 1,
//         y: -10,
//         opacity: 1,
//         ease: Expo.EaseInout,
//     },'-=1.5')

//     .to('.title',{
//         opacity: 0,
//     },'+=2')
   
// })

const tl =  gsap.timeline();

tl.to('.loading__text',{
    delay: .8,
    duration: 2,
    opacity: 0,
    yPercent: -400,
    ease:'BezierEasing(0.19,1,0.22,1)'
})
tl.to('.title',{
    delay: .3,
    duration: 1,
    opacity: 1,
    y: -10,
    ease: Expo.EaseInout,
})
tl.to("#preloader",{
    delay: 2,
    opacity: 0,
})
