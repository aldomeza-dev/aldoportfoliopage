import './App.css'
import 'animate.css'
import { RepoCard } from './components/RepoCard'
import { PortfolioHeader } from './components/PortfolioHeader'

function App() {
  return (
    <div className='App'>
      <iframe
        className='absolute'
        src='https://my.spline.design/cloud-6eabc52448ff40d54c2a2e812a09dfaa/'
        frameborder='0'
        width='100%'
        height='100%'
        title='Spline Cloud Background'
      ></iframe>
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
