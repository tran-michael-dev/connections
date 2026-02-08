import './Banner.css'
import { motion } from 'framer-motion'

function Banner({ color, category, wordList, valSubmitted, index }) {

  return (
    <motion.div 
    className='banner'
    initial= {{ scale: 0 }}
    animate={{
        scale: 1,
        backgroundColor: !valSubmitted
          ? color
          : index % 2 === 0
          ? ["#e5a4c6", "#f6c1da", "#e5a4c6"] // alternate
          : ["#f6c1da", "#e5a4c6", "#f6c1da"]
      }}
    transition={{
      scale: { duration: 0.5, ease: "easeInOut" },
      backgroundColor: valSubmitted
        ? { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
        : { duration: 0 }
    }}
    >
      <div className='text'>
        <p className='category'>
          {valSubmitted ? "VALENTINES" : category}
        </p>
        {
          !valSubmitted
          ? <p className='elements'>
              {wordList.map(word => word.name).join(`${category === "VALENTINES" ? " " : ", "}`)}
            </p>
          : <p className='elements'>
              WILL YOU BE MY VALENTINE
            </p>
        }
      </div>
    </motion.div>
  )
}

export default Banner