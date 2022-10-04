import './App.css'
import 'animate.css'
import { Typewriter } from 'react-simple-typewriter'

function App() {
  return (
    <div className='App'>
      <div className='flex flex-col items-center'>
        <h1 className='mainTittle1 font-Quicksand animate__animated animate__fadeInDown animate__delay-1s mt-10 lg:mt-16 text-3xl lg:text-7xl font-normal lg:leading-normal text-transparent bg-clip-text bg-gradient-to-r from-medium-slate-purple to-munsell-blue'>
          Welcome, I'm Aldo Meza...
        </h1>
        <h1 className='mainTittle2 font-Quicksand animate__animated animate__fadeInDown animate__delay-1s text-2xl lg:text-7xl font-normal lg:leading-normal text-transparent bg-clip-text bg-gradient-to-r from-medium-slate-purple to-munsell-blue'>
          and I'm a&nbsp;
          <span>
            <Typewriter
              loop
              cursor
              delaySpeed={2500}
              words={['web', 'embeded', 'mobile']}
            />
          </span>
          &nbsp;developer!
        </h1>
      </div>
    </div>
  )
}

export default App
