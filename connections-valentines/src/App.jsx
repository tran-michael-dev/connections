import Banner from "./components/Banner";
import BANNERS from "./data/banners";
import Word from "./components/Word"
import Button from "./components/Button";
import './App.css'
import useWords from "./hooks/useWords"
import Life from "./components/Life";

// App function that holds main jsx code
function App() {
  const {
    activeBanners,
    words,
    selectedWords,
    lives,
		selectWord,
    shuffleWords,
    deselectAll,
    submitWords
  } = useWords();

  return (
    <>
      <div className="banners">
        {activeBanners.map(banner => (
          <Banner 
          key={banner.id}
          color={banner.color}
          category={banner.category}
          />
        ))}
      </div>
      <div className="words">
        {words.map(word => (
          <Word 
          key={word.id} 
          word={word}
          selected={selectedWords.includes(word)}
          selectWord={() => selectWord(word)}
          />
        ))}
      </div>
      <div className="lives">
        <p>Mistakes Remaining: </p>
        {Array.from({ length: lives }).map((_, index) => (
          <Life key={index} />
        ))}
      </div>
      <div className="buttons">
        <Button name={"Shuffle"} func={() => shuffleWords()}/>
        <Button name={"Deselect All"} func={() => deselectAll()}/>
        <Button name={"Submit"} func={() => submitWords()}/>
      </div>
    </>
  )
}
export default App