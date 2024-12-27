// "use client"
// import React, {  useEffect, useState } from 'react';

// const ZoomTextOnScroll = () => {
//   const [scalingFactor, setScalingFactor] = useState(5);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;

//       // Increase the scaling factor for more zoom, adjusting the zoom speed
//       let newScalingFactor = 1 + scrollPosition / 500;

//       // Cap the maximum scale to 100,000,000% for extreme zoom
//       if (newScalingFactor > 10000000) {
//         newScalingFactor = 10000000;
//       }

//       // Update the scaling factor state
//       setScalingFactor(newScalingFactor);
//     };

//     // Attach the scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Cleanup the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div style={{ height: '100vh', backgroundColor: '#fff', display: 'flex', alignContent: 'center' }}>
//       <div
//         className="we-know-your-pain-heading"
//         style={{
//           fontSize: '50px',
//           fontWeight: 'bold',
//           color: '#000',
//           textAlign: 'center',
//           transition: 'transform 0.3s ease-out', // Smooth transition
//           transform: `scale(${scalingFactor}) translateZ(0)`, // Apply the scaling
//           willChange: 'transform', // Optimize performance for transform changes
//         }}
//       >
//        Essential Services We Provide
//       </div>
//     </div>
//   );
// };

// export default ZoomTextOnScroll;
