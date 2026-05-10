import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection.jsx'
import BestSellers from '../components/BestSellers.jsx'
const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSellers/>
    </div>
  )
}

export default Home