import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export function PortfolioHeader() {
  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='animate-delay-0_5s animate__animated animate__fadeInDown animate__delay-1s font-Quicksand mt-10 lg:mt-16 text-3xl lg:text-7xl font-normal lg:leading-normal text-transparent bg-clip-text bg-gradient-to-r from-medium-slate-purple to-munsell-blue'>
          Welcome, I'm Aldo Meza...
        </h1>
        <h1 className='animate-delay-1_5s animate__animated animate__fadeInDown animate__delay-1s font-Quicksand text-2xl lg:text-7xl font-normal lg:leading-normal text-transparent bg-clip-text bg-gradient-to-r from-medium-slate-purple to-munsell-blue'>
          and I'm a&nbsp;
          <span>
            <Typewriter
              loop
              cursor
              delaySpeed={2500}
              words={['web', 'embeded', 'mobile']}
            />
          </span>
          &nbsp;developer!
        </h1>
      </div>
    </>
  )
}
