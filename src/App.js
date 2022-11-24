import './App.css'
import 'animate.css'
import { RepoCard } from './components/RepoCard'
import { PortfolioHeader } from './components/PortfolioHeader'
import { SplineModel } from './components/SplineModel'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <div className='App'>
      <div className='Portfolio-nav'>
        <NavBar />
      </div>
      <div className='flex justify-around'>
        <div className='Portfolio-header w-3/5'>
          <PortfolioHeader />
        </div>
        <div className='Portfolio-model w-2/5 mt-36'>
          <SplineModel />
        </div>
      </div>
      <div
        id='projects'
        className='flex justify-around flex-wrap gap-4 Portfolio-Repos mt-[30%]'
      >
        <h2 className='animate-delay-0_5s animate__animated animate__fadeInDown animate__delay-1s font-Lato mt-10 lg:mt-16 text-3xl lg:text-7xl font-normal lg:leading-normal drop-shadow-xl text-space-cadet-black'>
          My projects!
        </h2>
        <RepoCard />
        <RepoCard />
      </div>
    </div>
  )
}

export default App
