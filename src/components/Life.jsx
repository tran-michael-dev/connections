import './Life.css'
import {motion} from 'framer-motion'

function Life({animateLoss, isAlive}) {
  const style = {
    borderRadius: '50px',
    width: '20px',
    position: 'relative',
    top: '22.5px'
  }

  return (
    <motion.div 
    className="circle"
    animate={{
        opacity: isAlive ? 1 : 0,
        scale: isAlive ? 1 : 0.6
      }}
    transition={{
      duration: animateLoss ? 0.3 : 0.15,
      ease: "easeOut"
    }}
    >
    </motion.div>
  )
}

export default Life