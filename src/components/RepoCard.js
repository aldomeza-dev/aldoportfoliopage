import React from 'react'

export function RepoCard() {
  return (
    <>
      <figure className='RepoCard'>
        <img src={require('./hqdefault.jpg')}></img>
        <h3>Repositorie/Tittle</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet corrupti
          veritatis quo laudantium earum eaque.
        </p>
      </figure>
    </>
  )
}
