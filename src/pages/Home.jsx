import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="main">
        <Sidebar />
        <Content />
      </div>
    </React.Fragment>

  )
}

export default Home