

const links = [
  {
    title: 'Card Hover',
    href: '/card-hover',
    description: 'I saw this trick on YouTube shorts and wanted to use it.'
  },
  {
    title: 'Move With Scroll',
    href: '/move-with-scroll',
    description: 'This is a CSS trick I\'ve been seeing on different websites, so I thought I would try to create it from scratch.'
  }
]

const Home = () => {
  return (
    <div>
      <h1 className='title'>Just some frontend practice.</h1>
      <div className="max-w-[1500px] mx-auto mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {links.map(link => (
          <div className="rounded-md px-5 py-7 border bg-neutral-700 hover:bg-sky-600 hover:scale-105 duration-200">
            <a href={link.href} className="w-full h-full text-left">
              <h2 className="text-3xl font-bold pb-3">{link.title}</h2>
              <p>{link.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home