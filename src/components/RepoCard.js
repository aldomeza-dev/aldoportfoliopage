import React from 'react'

export function RepoCard({ data }) {
  async function fetchRepoMetaTags() {
    let response = await fetch('/getRepos')
    let data = await response.json()
    return data
  }

  fetchRepoMetaTags().then((data) => {
    console.log(data)
  })
  return (
    <>
      <figure className='RepoCard'>
        <img alt='GitHub social media prewview' src={'data.image'}></img>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </figure>
    </>
  )
}
