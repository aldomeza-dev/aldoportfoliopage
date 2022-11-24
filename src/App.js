import './App.css'
import 'animate.css'
// import { RepoCard } from './components/RepoCard'
import { PortfolioHeader } from './components/PortfolioHeader'
import { SplineBackground } from './components/SplineBackground'

function App() {
  return (
    <div className='App'>
      <div className='Portfolio-background background w-screen h-screen p-0 m-0 inset-0 absolute'>
        <SplineBackground />
      </div>
      <div className='Portfolio-header '>
        <PortfolioHeader />
      </div>
      {/* <div className='Portfolio-Repos'>
        <RepoCard />
      </div> */}
    </div>
  )
}

export default App
