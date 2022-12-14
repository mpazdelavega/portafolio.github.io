import React from 'react'
import springbootReact from '../img/springbootReact.png'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: springbootReact
    },
    {
      id: 2,
      src: springbootReact
    },
    {
      id: 3,
      src: springbootReact
    },
    {
      id: 4,
      src: springbootReact
    },
    {
      id: 5,
      src: springbootReact
    },
    {
      id: 6,
      src: springbootReact
    },
    {
      id: 7,
      src: springbootReact
    },
  ]

  return (
    <div name='proyectos' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 pt-24 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>Proyectos</p>
          <p className='py-6'>Revisa algo de mi trabajo por aca</p>
        </div>



        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            portfolios.map(({ id, src }) => (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Demo</button>
                  <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Code</button>
                </div>
              </div>
            ))
          }

        </div>

      </div>
    </div>
  )
};

export default Portfolio;