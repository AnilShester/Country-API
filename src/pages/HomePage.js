import React from 'react'
import Home from '../components/Home'

function HomePage() {
  return (
    <>
      <div className="flex gap-10 items-center p-5 font-bold md:text-xl">
        <p className="w-48">FLag</p>
        <div className="w-full flex justify-around items-center">
          <p className="w-1/5">Country</p>
          <p className="w-1/5">Region</p>
          <p className="hidden sm:w-1/5 sm:flex">Population</p>
          <p className="hidden sm:w-1/5 sm:flex">Languages</p>
          <p>Detail</p>
        </div>
      </div>
      <Home />
    </>
  )
}

export default HomePage
