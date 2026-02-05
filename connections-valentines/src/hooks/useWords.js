import { useState } from "react"
import WORDS from "../data/words"
import shuffle from "../functions/shuffle"

function useWords() {
	const [ words, setWords ] = useState(WORDS)
	const [ selectedWords, setSelectedWords ] = useState([])
	const [ lives, setLives ] = useState([4])

	// Select a word, only up to four words can be selected
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

	// Shuffle the array of words. Must copy array for shuffle or it won't reload state
	const shuffleWords = () => {
		setWords(prev => shuffle([...prev]));
	}

	// Deselect all selected words
	const deselectAll = () => {
		setSelectedWords(prev => []);
	}

	// If selected 4 words, submit and check if they belong in they same category. If so delete them
	// If not, take off a life.
	const submitWords = () => {
		setSelectedWords(prev => {
			if (selectedWords.length < 4) return prev;
			if (selectedWords.length === 4) {

				return [];
			};
		})
	}

	return {
		words,
		selectedWords,
		selectWord,
		shuffleWords,
		deselectAll,
		submitWords
	};
}

export default useWords