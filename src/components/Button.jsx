import './Button.css'

function Button({ name, func, canPress = true }) {

  return (
    <button 
    onClick={func}
    className={`btn ${!canPress ? '--unselectable' : ''}`}
    >
      <p 
      className='btn-name'
      >
        {name}
      </p>
    </button>
  )
}

export default Button