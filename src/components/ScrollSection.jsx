import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

// const ScrollSection = ({ children }) => {
//   const sectionRef = useRef(null);
//   const triggerRef = useRef(null);

//   gsap.registerPlugin(ScrollTrigger);

//   useEffect(() => {
//     const pin = gsap.fromTo(
//       sectionRef.current,
//       {
//         translateX: 0,
//       },
//       {
//         translateX: "-300vw",
//         ease: "none",
//         duration: 1,
//         scrollTrigger: {
//           trigger: triggerRef.current,
//           start: "top top",
//           end: "2000 top",
//           scrub: 0.6,
//           pin: true,
//         },
//       }
//     );

//     return () => {
//       pin.kill();
//     };
//   }, []);

//   return (
//     <>
//       <section className="scroll-section-outer">
//         <div ref={triggerRef}>
//           <div ref={sectionRef} className="scroll-section-inner">
//             <div className="scroll-section">
//               <Image
//                 src="/Images/coreValue.png"
//                 width={300}
//                 height={300}
//                 alt="bsd"
//               />
//             </div>
//             <div className="scroll-section">
//               <Image
//                 src="/Images/coreValue.png"
//                 width={300}
//                 height={300}
//                 alt="bsd"
//               />
//             </div>
//             <div className="scroll-section text-black">
//               <Image
//                 src="/Images/coreValue.png"
//                 width={300}
//                 height={300}
//                 alt="bsd"
//               />
//             </div>
//             <div className="scroll-section text-black">
//               <Image
//                 src="/Images/coreValue.png"
//                 width={300}
//                 height={300}
//                 alt="bsd"
//               />
//             </div>
//             {/* {children} */}
//             {/* <div className='scroll-section text-black'>
//                    <h3>Section 1</h3>
//                 </div>
//                 <div className='scroll-section'>
//                    <h3>Section 2</h3>
//                 </div>
//                 <div className='scroll-section'>
//                    <h3>Section 3</h3>
//                 </div>
//                 <div className='scroll-section'>
//                    <h3>Section 4</h3>
//                 </div> */}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ScrollSection;
