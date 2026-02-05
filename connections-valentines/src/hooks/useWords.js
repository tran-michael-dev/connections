import { useState } from "react"
import WORDS from "../data/words"

function useWords() {
	const [ words, setWords ] = useState(WORDS)
	const [ selectedWords, setSelectedWords ] = useState([])

	const selectWord = (word) => {
		setSelectedWords(prev => {
			if (prev.includes(word)) {
				return prev.filter(w => w !== word)
			}
			if (prev.length >= 4) {
				return prev;
			}

			return [...prev, word]
		})
	}

	return {
		words,
		selectedWords,
		selectWord
	};
}

export default useWords