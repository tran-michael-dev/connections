import WORDS from "./words"

const makeBanner = (id, difficulty, color) => {
  const wordList = WORDS.filter(w => w.difficulty === difficulty);

  return {
    id,
    difficulty,
    color,
    wordList,
    category: wordList[0]?.difficulty
  };
};

const BANNERS = [
  makeBanner(1, "trivial", "#fadf6d"),
  makeBanner(2, "easy", "#a0c35a"),
  makeBanner(3, "medium", "#b2c4f0"),
  makeBanner(4, "hard", "#ba81c6"),
];

export default BANNERS;