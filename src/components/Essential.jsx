// "use client"
// import React, { useLayoutEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const Essential = () => {

//     const bg1 = useRef(null)
//     const img_container = useRef(null)
//     const img = useRef(null)

//     useLayoutEffect(() => {
//         let ctx = gsap.context(() => {
//             ScrollTrigger.create({
//                 trigger: bg1.current,
//                 pin: bg1.current,
//                 pinSpacing: false,
//                 start: 'top top',
//                 endTrigger: ".list",
//                 end: 'bottom bottom'
//             })

//             gsap.timeline({
//                 scrollTrigger: {

//                     trigger: img_container.current,
//                     pin: img_container.current,
//                     scrub: 1,
//                     start: "0% 0%"
//                 }
//             }).to(img.current, { transform: "translateZ(2200px)" })
//         })
//         return () => ctx.revert()
//     }, [])

//     return (
//         <div className='relative'>
//             <div ref={bg1} className="bg absolute h-screen w-screen z[-1]"></div>
//             <section>

//                 <div ref={img_container} className="perspective flex items-center justify-center h-screen w-screen">
//                 <h1 className='text-[120px]' ref={img}>
//                             <span>Essential Services We provide</span>
//                         </h1>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Essential
