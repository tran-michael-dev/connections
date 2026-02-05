import Word from "./components/Word"
import './App.css'
import useWords from "./hooks/useWords"

// App function that holds main jsx code
function App() {
  const {
    words,
    selectedWords,
		selectWord
  } = useWords();

  return (
    <>
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
    </>
  )
}
export default App