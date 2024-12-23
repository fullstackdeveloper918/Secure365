// import Image from 'next/image';
// import React from 'react';
// import styles from './TrustedSection.module.css'


// const TrustedSection = () => {
//   const logosTop = [
//     { src: '/logos/curry.svg', alt: 'Curry slide' },
//     { src: '/logos/tpm.svg', alt: 'Truck park management slide' },
//     { src: '/logos/globaltranz.svg', alt: 'Global Tranz slide' },
//     { src: '/logos/range-logistics.svg', alt: 'Range Logistics slide' },
//     { src: '/logos/ivia.svg', alt: 'Ivia slide' },
//     { src: '/logos/energy-transport-logistics.svg', alt: 'Energy Transport Logistics slide' },
//     { src: '/logos/nfi.svg', alt: 'NFI slide' },
//   ];

//   const logosBottom = [
//     { src: '/logos/omni-logistics.svg', alt: 'Omni Logistics slide' },
//     { src: '/logos/atlantic-freight.svg', alt: 'Atlantic Freight slide' },
//     { src: '/logos/gw-tool-group.svg', alt: 'GW Tool Group slide' },
//     { src: '/logos/icon-millhouse.svg', alt: 'Millhouse slide' },
//     { src: '/logos/becker-logistics.svg', alt: 'Becker Logistics slide' },
//     { src: '/logos/tangent.svg', alt: 'Tangent design/engineering slide' },
//     { src: '/logos/auto-logistics.svg', alt: 'Auto Logistics slide' },
//   ];

//   return (
//     <section className={styles.homeTrusted}>
//     <h5 className={`${styles.container} ${styles.trustedTitle}`}>
//       Rated 4.9 out of <mark>100+ reviews</mark> and trusted by
//     </h5>
//     <div className={`${styles.container} ${styles.trustedContainer}`}>
//       {/* Top Marquee */}
//       <div className={styles.trustedItemsWrapper}>
//         <div aria-hidden="true" className={`${styles.trustedItems} ${styles.marqueeLeft}`}>
//           {logosTop.map((logo, index) => (
//             <div key={index} className={styles.trustedItem}>
//               <Image src={logo.src} alt={logo.alt} width={100} height={50} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Marquee */}
//       <div className={styles.trustedItemsWrapper}>
//         <div aria-hidden="true" className={`${styles.trustedItems} ${styles.marqueeRight}`}>
//           {logosBottom.map((logo, index) => (
//             <div key={index} className={styles.trustedItem}>
//               <Image src={logo.src} alt={logo.alt} width={100} height={50} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </section>
//   );
// };

// export default TrustedSection;
