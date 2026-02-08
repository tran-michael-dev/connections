import WORDS from "./words"
import VALENTINES from "./valentine-words";

const makeBanner = (id, difficulty, color, array) => {
  const wordList = array.filter(w => w.difficulty === difficulty);

  return {
    id,
    difficulty,
    color,
    wordList,
    category: wordList[0]?.category
  };
};

const BANNERS = [
  makeBanner(1, "trivial", "#fadf6d", WORDS),
  makeBanner(2, "easy", "#a0c35a", WORDS),
  makeBanner(3, "medium", "#b2c4f0", WORDS),
  makeBanner(4, "hard", "#ba81c6", WORDS),
  makeBanner(5, "valentines", '#e5a4c6', VALENTINES)
];

export default BANNERS;