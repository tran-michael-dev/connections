import Banner from "./components/Banner";
import BANNERS from "./data/banners";
import Word from "./components/Word"
import Button from "./components/Button";
import './App.css'
import useWords from "./hooks/useWords"
import Life from "./components/Life";
import { motion } from 'framer-motion';

// App function that holds main jsx code
function App() {
  const {
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
    submitWords
  } = useWords();

  const valentineSubmitted = activeBanners.length === 5;
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = new Date().toLocaleDateString('en-US', options);
  const valentineDate = new Date("2026-02-014").toLocaleDateString('en-US', options);

  return (
    <>
      <div className={`connections ${valentineSubmitted ? '--valSubmitted' : ''}`}>
        <div className="header">
          <h1 className="title">{`${valentineSubmitted ? "Valentines" : "Connections"}`}</h1>
          <p className="date">{valentineSubmitted ? valentineDate : currentDate}</p>
        </div>
        <div className="body">
          {activeBanners.length === 0 ? undefined :
            <div className="banners">
              {activeBanners.map((banner, index) => (
                <Banner 
                key={banner.id}
                color={banner.color}
                category={banner.category}
                wordList={banner.wordList}
                valSubmitted={valentineSubmitted}
                index={index}
                />
              ))}
            </div>
          }
          <div 
          className={`words ${win ? '--win' : ''}`}
          >
            {words.map(word => (
                <Word 
                key={word.id} 
                word={word}
                selected={selectedWords.includes(word)}
                selectWord={() => selectWord(word)}
                canAnimate={!win ? selectedWords.length < 4 : true}
                submitting={submitting}
                isSubmitted={submittedWords.includes(word)}
                shuffling={shuffling}
                win={win}
                />
            ))}
          </div>
          <div className="lives">
            <p>Mistakes Remaining:</p>
            {Array.from({ length: 4 }).map((_, index) => (
              <Life
                key={index}
                isAlive={index < lives.length}
                animateLoss={index === lostLifeIndex}
              />
            ))}
          </div>
          <div className="buttons">
            <Button name={"Shuffle"} func={() => shuffleWords()}/>
            <Button name={"Deselect All"} func={() => deselectAll()}/>
            <Button name={"Submit"} func={() => submitWords()} canPress={selectedWords.length === 4 || win}/>
          </div>
        </div>
      </div>
    </>
  )
}
export default App