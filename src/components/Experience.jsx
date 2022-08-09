import React from 'react'
import html from '../img/html.png'
import css from '../img/css.png'
import javascript from '../img/javascript.png'
import github from '../img/github.png'
import java from '../img/java.png'
import mysql from '../img/mysql.png'
import node from '../img/node.png'
import reactImage from '../img/react.png'
import tailwind from '../img/tailwind.png'

const Experience = () => {

  const skills = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JAVASCRIPT',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: reactImage,
      title: 'REACT',
      style: 'shadow-sky-500'
    },
    {
      id: 5,
      src: java,
      title: 'JAVA',
      style: 'shadow-orange-700'
    },
    {
      id: 6,
      src: mysql,
      title: 'MySQL',
      style: 'shadow-orange-400'
    },
    {
      id: 7,
      src: github,
      title: 'GITHUB',
      style: 'shadow-gray-500'
    },
    {
      id: 8,
      src: node,
      title: 'NODE JS',
      style: 'shadow-green-500'
    },
    {
      id: 9,
      src: tailwind,
      title: 'TAILWIND',
      style: 'shadow-sky-500'
    },
  ]

  return (
    <div name='experiencia' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
          <p className='py-6'>Mi sección de tecnologías</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

          {
            skills.map(({ id, src, title, style }) => (
              <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg ' + style}>
                <img src={src} alt="" className='w-20 mx-auto' />
                <p className='mt-4'>{title}</p>
              </div>
            ))
          }


        </div>

      </div>
    </div>
  )
};

export default Experience;