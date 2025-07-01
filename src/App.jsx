import { useState } from 'react'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero title= "Jack Donohoe"
     subtitle="Full-stack Developer, MSc student in Advanced Computer Science"
     linkedin_link="https://www.linkedin.com/in/jack-donohoe-9a004a263/"
     github_link="https://github.com/JDonohoe101"
     />
    </>
  )
}

export default App
