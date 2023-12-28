import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import ScrollMenu from '../components/ScrollMenu/ScrollMenu'
import RecommendedVideos from '../components/RecommendedVideos/RecommendedVideos'

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="main">
        <Sidebar />
        <div className="content">
          <ScrollMenu />
          <RecommendedVideos />
        </div>

      </div>
    </React.Fragment>

  )
}

export default Home