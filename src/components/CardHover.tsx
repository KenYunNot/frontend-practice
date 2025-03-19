
import './styles.css';

const CardHover = () => {
  return (
    <>
      <div className='heading'>
        <h1 className='title'>Card Hover</h1>
        <p className='description'>
          I saw this CSS trick in a <a href='https://www.youtube.com/watch?v=Uwcf06elDIA&list=PLVOXfoQ_x6wcFJ8b122nEVC0jnDjoqKlk&index=5' target='_blank'>YouTube short</a> and I wanted to try implementing it. 
          Pretty simple overall. I didn't bother too much with the image styling so please ignore how poorly aligned they are :)
        </p>
      </div>
      <div className='wrapper'>
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