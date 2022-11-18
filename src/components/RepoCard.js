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
          <div className='flex justify-center'>
            <div className='rounded-lg shadow-lg bg-white max-w-sm'>
              <img
                className='rounded-t-lg'
                src={repo.image}
                alt='GitHub social media preview'
              />
              <div className='p-6'>
                <h5 className='text-gray-900 text-xl font-medium mb-2'>
                  {repo.title}
                </h5>
                <p className='text-gray-700 text-base mb-4'>
                  {repo.description}
                </p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </>
  )
}
