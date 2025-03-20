
import './styles/card-hover.css';

const CardHover = () => {
  return (
    <>
      <h1 className='title'>Card Hover</h1>
      <div id='card-hover' className='mt-15'>
        <div className='card'>
          <img src='https://cdn.thewirecutter.com/wp-content/media/2021/03/dogharnesses-2048px-6907-1024x682.webp' />
        </div>
        <div className="card">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg' />
        </div>
        <div className="card">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/1200px-Labrador_Retriever_portrait.jpg' />
        </div>
        <div className="card">
          <img src='https://media.npr.org/assets/img/2023/12/12/gettyimages-1054147940-627235e01fb63b4644bec84204c259f0a343e35b.jpg?s=1100&c=50&f=jpeg' />
        </div>
      </div>
    </>
  )
}

export default CardHover