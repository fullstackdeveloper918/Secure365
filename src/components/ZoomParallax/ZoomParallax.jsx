import styles from './styles.module.scss';
import Picture1 from '../../../public/cash/1.png'
import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function Index() {

  useEffect( () => {
    const lenis = new Lenis()
   
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
},[])

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                <motion.div style={{scale}} className={styles.el}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={Picture1}
                            fill
                            alt="image"
                            placeholder='blur'
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}