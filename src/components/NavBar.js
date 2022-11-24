import React from 'react'

export function NavBar() {
  return (
    <>
      <nav
        id='navbar'
        className='flex justify-between items-center h-16 bg-cultured text-space-cadet-black relative shadow-sm font-Lato'
      >
        <a href='#' className='pl-8'></a>
        <div className='pr-8 md:block hidden'>
          <a
            href='/Aldo_Meza_Resume.pdf'
            download='Aldo Meza Resume.pdf'
            className='p-4'
          >
            About me
          </a>
          <a href='#projects' className='p-4'>
            Projects
          </a>
          <a
            href=" mailto:aldomezamoreno@gmail.com?subject=Hi%2C%20I%20saw%20your%20portfolio%20page!&body=They%20there!%20I%20just%20saw%20your%20portfolio%20page%2C%20and%20I%20thought%20I'd%20get%20in%20touch%20with%20you... "
            className='p-4'
          >
            Contact me!
          </a>
        </div>
      </nav>
    </>
  )
}
