import React from 'react'

// const fetchData = () => {
//   fetch('/getRepoData')
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data)
//       setData(data)
//     })
//     .catch((err) => {
//       console.log(err.message)
//     })
// }

export function RepoCard() {
  const [data, setData] = React.useState([])

  async function fetchRepoMetaTags() {
    let response = await fetch('/getRepoData')
    let data = await response.json()
    setData(data)
  }

  React.useEffect(() => {
    fetchRepoMetaTags()
  }, [])

  return (
    <>
      {data.map((repo, index) => (
        <a key={index} href={repo.url}>
          <figure className='RepoCard'>
            <img
              height='320px'
              width='640px'
              alt='GitHub social media preview'
              src={repo.image}
            ></img>
            <h3>{repo.title}</h3>
            <p>{repo.description}</p>
          </figure>
        </a>
      ))}
    </>
  )
}
