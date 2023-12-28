import React from 'react'
import Header from '../components/Header/Header'
import WatchVideo from '../components/WatchVideo/WatchVideo'
import VideoSuggestions from '../components/VideoSuggestions/VideoSuggestions'


const VideoPlay = () => {

  return (
    <div className="video-watch">
      <Header />
      <div className="watch-videos">
        <WatchVideo />
        <VideoSuggestions />
      </div>

    </div>


  )
}

export default VideoPlay