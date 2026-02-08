import { useEffect, useRef, useState } from "react"
import WORDS from "../data/words"
import shuffle from "../functions/shuffle"
import useBanners from "./useBanners";
import VALENTINES from "../data/valentine-words";

function useWords() {
	const [
		activeBanners,
		addBanner
	] = useBanners();

	const [ words, setWords ] = useState(shuffle([...WORDS]));
	const [ selectedWords, setSelectedWords ] = useState([]);
	const [submitting, setSubmitting] = useState(false);
	const [submittedWords, setSubmittedWords] = useState([]);
	const [ shuffling, setShuffling ] = useState(false);
	const [lives, setLives] = useState([0, 1, 2, 3]);
	const prevLivesRef = useRef(lives);
	const [lostLifeIndex, setLostLifeIndex] = useState(null);
	const [ win, setWin ] = useState(false);

	useEffect(() => {
		if (lives < prevLivesRef.current) {
			setLostLifeIndex(lives);
		}

		prevLivesRef.current = lives;
	}, [lives]);

	// Select a word, only up to four words can be selected
	const selectWord = (word) => {
		const MAX_SELECTION = win ? 5 : 4;
		setSelectedWords(prev => {
			if (prev.includes(word)) {
				return prev.filter(w => w !== word)
			}
			if (prev.length >= MAX_SELECTION) {
				return prev;
			}

			return [...prev, word]
		})
	}

	// Shuffle the array of words. Must copy array for shuffle or it won't reload state
	const shuffleWords = () => {
		if (shuffling || submitting) return;
		setShuffling(true);
		setWords(prev => shuffle([...prev]));

		setTimeout(() => {
			setShuffling(false);
		}, 600);
	}

	// Deselect all selected words
	const deselectAll = () => {
		setSelectedWords(prev => []);
	}

	// If selected 4 words, submit and check if they belong in they same category. If so delete them
	// If not, take off a life.
	const submitWords = () => {
		const MAX_SELECTION = win ? 5 : 4;
		if (selectedWords.length < MAX_SELECTION || submitting) return;

		setSubmitting(true);

		const correct =
			selectedWords.every(w => w.difficulty === selectedWords[0].difficulty);

		// Freeze the 4 words that should animate
		setSubmittedWords(selectedWords);

		setTimeout(() => {
			if (correct) {
				deleteWords(selectedWords);
				addBanner(selectedWords[0].difficulty);

				// Compute win based on what the new activeBanners length *will be*
				const futureBannerCount = activeBanners.length + 1;
				const newWin = futureBannerCount === 4;
				setWin(prev => prev || newWin);

				// Immediately set Valentine words if the player won
				if (newWin) {
					setWords([...VALENTINES]);
				}
			} else {
				removeLife();
			}

			setSelectedWords([]);
			setSubmittedWords([]);
			setSubmitting(false);
		}, 600);
	};

	// Deletes all words selected from words array
	const deleteWords = (toDelete) => {
  setWords(prev =>
    prev.filter(w => !toDelete.includes(w)));
	};

	const removeLife = () => {
		setLostLifeIndex(lives.length - 1);

		setTimeout(() => {
			setLives(prev => prev.slice(0, -1));
			setLostLifeIndex(null);
		}, 400); // matches animation duration
	};

	return {
		win,
		activeBanners,
		words,
		selectedWords,
		lives,
		submitting,
		submittedWords,
		shuffling,
		lostLifeIndex,
		selectWord,
		shuffleWords,
		deselectAll,
		submitWords,
	};
}

export default useWords