import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Content2 from './components/Content2'
import Content3 from './components/Content3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Header />
      <Content />
      <Content2 />
      <Content3 />

    </div>
  )
}

export default App
