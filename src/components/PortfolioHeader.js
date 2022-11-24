import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export function PortfolioHeader() {
  return (
    <>
      <span className='flex flex-col items-center'>
        <h1 className='animate-delay-0_5s animate__animated animate__fadeInDown animate__delay-1s font-Lato mt-10 lg:mt-16 text-3xl lg:text-7xl font-normal lg:leading-normal '>
          Welcome, I'm Aldo Meza...
        </h1>
        <h1 className='animate-delay-1_5s animate__animated animate__fadeInDown animate__delay-1s font-Lato text-2xl lg:text-7xl font-normal lg:leading-normal '>
          and I'm a&nbsp;
          <span
            className='bg-cover bg-clip-text bg-center text-transparent sm:text-7xl font-normal tracking-wide antialiased'
            style={{
              backgroundImage:
                'url(https://media3.giphy.com/media/o3xQOiMLNgHUaRoRof/giphy.gif?cid=790b7611f1df83550393021dfcff02d5decdc69e893e09f1&rid=giphy.gif&ct=g)',
            }}
          >
            <Typewriter
              loop
              cursor
              delaySpeed={3000}
              words={['web', 'embeded', 'mobile']}
            />
          </span>
          &nbsp;developer!
        </h1>
      </span>
    </>
  )
}
