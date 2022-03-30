import React from 'react'
import Card from '../Components/Card/Card'
import Layout from './Layout'
import './HomePage.css'


function HomePage() {
  return (
    <>
      <Layout />
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </>

  )
}

export default HomePage