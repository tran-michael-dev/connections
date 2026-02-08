const GROUPS = [
  {
    difficulty: "trivial",
    category: "INCLUDING",
    words: ["AND", "ALSO", "PLUS", "WITH"],
  },
  {
    difficulty: "easy",
    category: "SECTION",
    words: ["CLASS", "DIVISION", "RANK", "TIER"],
  },
  {
    difficulty: "medium",
    category: "DOG BREEDS, INFORMALLY",
    words: ["BOSTON", "GOLDEN", "LAB", "PIT"],
  },
  {
    difficulty: "hard",
    category: "FAMOUS POEMS",
    words: ["DADDY", "HARLEM", "HOWL", "IF"],
  },
];

const WORDS = GROUPS.flatMap((group, groupIndex) =>
  group.words.map((name, wordIndex) => ({
    id: groupIndex * 4 + wordIndex + 1,
    name,
    difficulty: group.difficulty,
    category: group.category,
  }))
);

export default WORDS;