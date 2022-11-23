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
        <a className='inline-block' key={index} href={repo.url}>
          <div className='flex justify-center'>
            <div className='rounded-lg shadow-sm bg-white max-w-lg'>
              <img
                className='rounded-t-lg'
                src={repo.image}
                alt='GitHub social media preview'
              />
              <div className='p-3'>
                <h5 className='text-gray-900 font-Alexandria text-base font-normal mb-2'>
                  {repo.title}
                </h5>
              </div>
            </div>
          </div>
        </a>
      ))}
    </>
  )
}
