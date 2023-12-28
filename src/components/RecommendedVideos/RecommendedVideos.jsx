import React, { useEffect, useCallback } from 'react';
import './RecommendedVideos.css';
import { useVideoStore } from '../../store';
import { ReactComponent as Verified } from '../../assets/verified-icon.svg';
import { Link } from 'react-router-dom';
// import useFunctions from '../../hooks/useFunctions';

const API_KEY = "AIzaSyDRhE5jQKPm1WlvtKhCmUgYwkBnSAsNdGY";

const RecommendedVideo = (video) => {
  // console.log("Reached here -->", video.video.snippet.thumbnails.high.url);
  return (
    <Link to={`/watch/${video.video.id}`} className="video-container">
      <img src={video.video.snippet.thumbnails.high.url}
        alt="video-thumbnail" className="video-img" />
      <div className="video-description">
        <div className="video-profile-img">
          <img src="https://yt3.ggpht.com/dosOwzVMOvfQzmmw9ghUIe83zdpEXRRF67zAnL4qAwJ0SRGVpwY6sZNbIHaudxExl99QCZvj=s68-c-k-c0x00ffffff-no-rj"
            alt="channel" className="profile-img" />
        </div>
        <div className="video-desc">
          <p className="description">{video.video.snippet.title}</p>
          <div className="video-channel-name">
            <div className="channel-name">{video.video.snippet.channelTitle}</div>
            <Verified className="channel-verified" />
          </div>
          <div className="video-reach">
            <div className="video-views">9.8K views</div>
            <div className="dot"></div>
            <div className="video-update-time">{new Date(video.video.snippet.publishedAt).toLocaleDateString()}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

const fetchRecommendedVideos = (setVideos) => {
  fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&key=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      setVideos(data.items);
      console.log(data.items);
    })
    .catch((error) => {
      console.error('Error fetching suggested videos:', error);
    });
};

const RecommendedVideos = () => {

  const { videos, setVideos } = useVideoStore();
  const memoizedFetchRecommendedVideos = useCallback(() => {
    fetchRecommendedVideos(setVideos);
  }, [setVideos]);

  useEffect(() => {
    memoizedFetchRecommendedVideos();
  }, [memoizedFetchRecommendedVideos]);


  return (
    <div className="videos-container">
      {
        videos?.map((video) => (
          <RecommendedVideo key={video.id} video={video} />
        ))
      }
    </div>
  )
}

export default RecommendedVideos