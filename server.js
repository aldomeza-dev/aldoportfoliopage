//Express and basic modules imports
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

//Apicache setup
const apicache = require('apicache')
let cache = apicache.middleware

//Meta data grabber setup
const grabity = require('grabity')

//Node-fetch setup
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args))

//Static directory for public files
app.use(express.static(path.join(__dirname, 'build')))

//1 - Fetch the repos from the github api and return them in JSON with repoFetcher function ------------------ DONE
function repoFetcher() {
  let fetchOptions = {
    method: 'GET',
    headers: {
      Accept: '*/*',
      'User-Agent': 'Aldo Meza dev',
    },
  }

  return fetch(
    'https://api.github.com/users/aldomeza-dev/repos',
    fetchOptions
  ).then((res) => res.json())
}

//2 - Create an array of only the repo urls from the fetched repos excluding "aldomeza-dev" repository ------------------ DONE
async function repoArraySlicer(array) {
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

//3 - Fetch the meta tags from each of the repo urls with metaTagsFetcher funtion ------------------ DONE
async function metaTagsFetcher(repoUrlArray) {
  let metaTagsArray = []
  for (let index = 0; index < repoUrlArray.length; index++) {
    const element = repoUrlArray[index]
    let it = await grabity.grabIt(element)
    it.url = element
    metaTagsArray.push(it)
  }
  return metaTagsArray
}

//4 - Send the meta tags to the front end through a get request to "/getRepos" endpoint ------------------ DONE
app.get('/getRepoData', cache('5 minutes'), (req, res) => {
  repoFetcher().then((response) => {
    repoArraySlicer(response).then((repoUrls) => {
      metaTagsFetcher(repoUrls).then((repoMetaTags) => {
        res.send(repoMetaTags)
      })
    })
  })
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT || 8080)
