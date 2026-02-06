import './Banner.css'

function Banner({ color, category }) {

  return (
    <div 
    className='banner'
    style={{ backgroundColor: color }}
    >
      <div className='text'>
        <p className='category'>
          {category}
        </p>
        <p className='elements'>
          Hello, Hola, three, four, super duper, yeah
         </p>
      </div>
    </div>
  )
}

export default Banner