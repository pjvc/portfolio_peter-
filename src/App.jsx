import { useState } from 'react'
import SideBar from './components/sidebar/sidebar'
import Home from './components/home/home'
import About from './components/about/about'
import Service from './components/service/service'
import Resume from './components/resume/resume'
import Portfolio from './components/portfolio/portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <SideBar/>
        <div className='main'>
          <Home/>
          <Resume/>
          <Portfolio/>
          <Service/>
        </div>
    </div>
  )
}

export default App
