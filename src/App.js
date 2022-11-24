import './App.css'
import 'animate.css'
import { RepoCard } from './components/RepoCard'
import { PortfolioHeader } from './components/PortfolioHeader'
import { SplineBackground } from './components/SplineBackground'

function App() {
  return (
    <div className='App'>
      <div className='Portfolio-background'>
        <SplineBackground />
      </div>
      <div className='Portfolio-header'>
        <PortfolioHeader />
      </div>
      {/* <div className='Portfolio-Repos'>
        <RepoCard />
      </div> */}
    </div>
  )
}

export default App
