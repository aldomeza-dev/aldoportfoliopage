//Express and basic modules imports
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const apicache = require('apicache')

let cache = apicache.middleware

//Meta data grabber import
const grabity = require('grabity')

//Node-fetch import
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args))

//Static directory for public files
app.use(express.static(path.join(__dirname, 'build')))

//1 - Fetch the repos from the github api and return them in JSON with repoFetcher function ------------------ PENDING APROVAL
function repoFetcher() {
  let fetchOptions = {
    method: 'GET',
    headers: {
      Accept: '*/*',
      'User-Agent': 'Aldo Meza dev',
    },
  }

  return fetch('https://api.github.com/users/aldomeza-dev/repos', fetchOptions)
    .then((res) => res.json())
    .then((data) => repoArraySlicer(data))
}

//2 - Create an array of only the repo urls from the fetched repos using the repoArraySlice function ------------------ PENDING APROVAL
function repoArraySlicer(array) {
  let reposUrls = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index]

    if (element.html_url == 'https://github.com/aldomeza-dev/aldomeza-dev') {
      continue
    } else {
      reposUrls.push(element.html_url)
    }
  }
  return reposUrls
}

//3 - Fetch the meta tags from each of the repo urls with metaTagsFetcher funtion ------------------ WORK IN PROGRESS

async function metaTagsFetcher(repoUrlArray) {
  let metaTagsArray = []
  for (let index = 0; index < repoUrlArray.length; index++) {
    const element = repoUrlArray[index]
    let it = await grabity.grabIt(element)
    metaTagsArray.push(it)
  }
  return metaTagsArray
}

//? - Send the meta tags to the front end through a get request to "/getRepos" endpoint ------------------ WORK IN PROGRESS
app.get('/getRepos', (req, res) => {
  repoFetcher().then((repos) => {
    metaTagsFetcher(repos).then((metaTags) => {
      res.send(metaTags)
    })
  })
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT || 8080)
