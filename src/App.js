import './App.css'
import 'animate.css'
import { RepoCard } from './components/RepoCard'
import { PortfolioHeader } from './components/PortfolioHeader'

function App() {
  return (
    <div className='App'>
      <div className='Portfolio-header'>
        <PortfolioHeader />
      </div>
      <div className='Portfolio-Repos'>
        <RepoCard />
      </div>
    </div>
  )
}

export default App
