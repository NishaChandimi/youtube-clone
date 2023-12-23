import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { ReactComponent as Like } from '../assets/like-button.svg';
import { ReactComponent as DisLike } from '../assets/dislike-button.svg';
import { ReactComponent as Share } from '../assets/share.svg';
import { ReactComponent as Download } from '../assets/download.svg';
// import { useVideoStore } from '../store';

const WatchVideo = () => {
 console.log("test");
  // const {videos} = useVideoStore();
  const { videoId } = useParams();
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  const API_KEY = "AIzaSyDRhE5jQKPm1WlvtKhCmUgYwkBnSAsNdGY";
  // const initialVideoDetails = videos.filter((video)=> video.id.videoId === videoId);
  const [videoDetails, setVideoDetails] = useState({});

  const fetchVideoDetails = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setVideoDetails(data.items[0]);
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  };

  useEffect(() => {
    fetchVideoDetails();
  }, []);

  console.log(videoDetails);
  return (
    <div className="watch-video">
      <div className="video">
        <iframe className="video-player"
          src={videoSrc}
          title="Video Player"
          frameBorder="0"
          allowFullScreen
        />
        <div className="video-watch-description">
          <div className="video-title">{videoDetails?.snippet?.title}</div>
          <div className="video-details">
            <div className="video-channel-info">
              <img className="video-channel-image" src="https://yt3.ggpht.com/b42QCAmVJ0kzNNi10_HmhsdfPEATQATS80hbLyHVJcVm6drn5pKtC6MY6wTluXi5iZ8_is5Q_Q=s88-c-k-c0x00ffffff-no-rj" alt="channel" />
              <div className="video-channel-details">
                <div className="video-channel-name">{videoDetails?.snippet?.channelTitle}</div>
                <div className="video-subscribers">500k</div>
              </div>
              <button className="video-channel-subscribe-button">Subscribe</button>
            </div>
            <div className="video-options">
              <div className="video-feedback">
                <Like className="video-like"/>
                <div>|</div>
                <DisLike className="video-dislike"/>
              </div>
              <div className="video-download"><Download /> Download</div>
              <div className="video-share"><Share />Share</div>
              <div className="video-more-options">...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WatchVideo