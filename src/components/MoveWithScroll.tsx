import React from 'react'


const content = [
  {
    title: 'Content 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas voluptatem obcaecati maxime sint, asperiores reiciendis cupiditate, consequuntur laborum ullam quae non accusamus autem. Enim veniam suscipit illo maiores quod.',
  },
  {
    title: 'Content 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas voluptatem obcaecati maxime sint, asperiores reiciendis cupiditate, consequuntur laborum ullam quae non accusamus autem. Enim veniam suscipit illo maiores quod.',
  },
  {
    title: 'Content 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas voluptatem obcaecati maxime sint, asperiores reiciendis cupiditate, consequuntur laborum ullam quae non accusamus autem. Enim veniam suscipit illo maiores quod.',
  }
]

const MoveWithScroll = () => {
  const movingContentRef = React.useRef<HTMLDivElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const moveContentWithScroll = (ev: Event) => {
      if (!movingContentRef.current || !wrapperRef.current) return;
  
      if (window.scrollY + movingContentRef.current.offsetHeight >= wrapperRef.current.offsetTop + wrapperRef.current.offsetHeight) { 
        movingContentRef.current.style.width = '';
        movingContentRef.current.style.position = 'absolute';
        movingContentRef.current.style.top = '';
        movingContentRef.current.style.bottom = '0';
      } else if (window.scrollY >= wrapperRef.current.offsetTop) {
        movingContentRef.current.style.width = `${movingContentRef.current.offsetWidth}px`;
        movingContentRef.current.style.position = 'fixed';
        movingContentRef.current.style.top = '0';
        movingContentRef.current.style.bottom = '';
      } else {
        movingContentRef.current.style.width = '';
        movingContentRef.current.style.position = '';
        movingContentRef.current.style.top = '';
        movingContentRef.current.style.bottom = '';
      }
    }

    addEventListener('scroll', moveContentWithScroll)

    return () => {
      removeEventListener('scroll', moveContentWithScroll)
    }
  }, [])

  return (
    <>
      <h1 className='title'>Move With Scroll</h1>
      <div ref={wrapperRef} id='move-with-scroll' className='max-w-7xl mx-auto flex gap-12'>
        <div className='w-1/2'>
          {content.map(c => (
            <div className='h-screen last:h-[50vh] p-6 flex flex-col justify-center last:justify-end gap-6 text-left'>
              <h2 className='text-xl font-semibold'>{c.title.toUpperCase()}</h2>
              <p>{c.description}</p>
            </div>
          ))}
        </div>
        <div className='relative w-1/2'>
          <div ref={movingContentRef} className='h-[65vh] flex flex-col justify-end'>
            <img src="https://www.indy100.com/media-library/image.jpg?id=55395759&width=1200&height=600&coordinates=1%2C0%2C1%2C0" className='rounded-lg' />
          </div>
        </div>
      </div>
      <div className='h-screen mt-30 flex justify-center items-center'>
        This is some filler content
      </div>
    </>
  )
}

export default MoveWithScroll