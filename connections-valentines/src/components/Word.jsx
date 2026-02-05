import './Word.css'

function Word({ word, selected, selectWord }) {
	return (
		<>
			<button 
			className={`word-btn ${selected ? '--active' : ''}`}
			onClick={selectWord}
			>
				{word.name}
			</button>
		</>
	)
}

export default Word