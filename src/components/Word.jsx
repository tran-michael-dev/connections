import './Word.css'
import { motion } from 'framer-motion'

function Word({ word, selected, selectWord, canAnimate, submitting, isSubmitted, shuffling }) {
	const wordVariants = {
		idle: { y: 0},
		selected: { y: -2.5 },
		submitting: {
			y: [0, -20, 10, 0],
			transition: { duration: 0.5, ease: "easeInOut" },
		},
		shuffling: {
		opacity: [0, 1],
		y: [10, 0],
		transition: { duration: 0.4, ease: "easeOut" }
	}

	};

	return (
		<>
			<motion.button 
			className={`word-btn ${selected ? '--active' : ''}`}
			onClick={selectWord}
			variants={wordVariants}
			initial="idle"
			animate={
				submitting && isSubmitted
					? "submitting"
					: shuffling
					? "shuffling"
					: selected
					? "selected"
					: "idle"
			}
			whileHover={canAnimate || selected ? { scale: 1.1 } : undefined}
			whileTap={canAnimate || selected ? { scale: 0.95 }: undefined}
			onHoverStart={() => console.log('hover started!')}
			>
				{word.name}
			</motion.button>
		</>
	)
}

export default Word