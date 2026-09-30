import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Sections/Hero'
import Intro from './Sections/Intro'
import Showcase from './Sections/Showcase'

export default function App() {
  return (
    <>
      <Navbar />

      <main style={{minHeight: '100px'}}>
        <Hero />
        <Intro />
        <Showcase />
      </main>


    </>
  )
}
