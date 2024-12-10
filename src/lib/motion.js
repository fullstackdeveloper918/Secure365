export const FadeUp = (delay) => {
    return {
      initial: {
       opacity: 0,
       y: 50
      },
      animate: {
        opacity: 1,
        y:0, 
        transition: {
          type: 'string',
          stiffness: 100,
          duration: 0.5,
          delay: delay,
          ease: 'easeInOut'
        }
      }
    }
  }