import React from 'react'
import { ReactComponent as Verified } from '../../assets/verified-icon.svg';
import { useVideoStore } from '../../store'
import { Link } from 'react-router-dom';
import './VideoSearchResults.css';

// Search Results UI
const VideoSearchResult = (video) => {
    console.log("Reached here --> ", video.video.id.videoId);
    return (
        <Link to={`/watch/${video.video.id.videoId}`} className="videos-search-result-container">
            <div className="video-search-result-container">
                <img className="video-search-result-container-img" src={video.video.snippet.thumbnails.high.url} alt="thumb-nail" />
                <div className="video-search-result-description">
                    <div className="video-search-result-short-description">{video.video.snippet.title}</div>
                    <div className="video-search-result-reach">
                        <div className="video-search-result-views">9.8K views</div>
                        <div className="dot"></div>
                        <div className="video-search-result-update-time">{new Date(video.video.snippet.publishedAt).toLocaleDateString()}</div>
                    </div>
                    <div className="video-search-result-channel-name">
                        <img className="search-result-channel-profile-picture"
                            src="https://yt3.ggpht.com/nOd4MDguLocyCgkOOs1YBF0xZfvafKP27Q_E6BwK85myVX9BWhSEBePoeIrhuil_PoYb5O-gOg=s68-c-k-c0x00ffffff-no-rj"
                            alt="channel-profile"
                        />
                        <div className="search-result-channel-name">{video.video.snippet.channelTitle}</div>
                        <Verified className="search-result-channel-verified" />
                    </div>
                    <div className="video-search-result-long-description">{video.video.snippet.description}</div>
                </div>
            </div>

        </Link>

    )
}

const VideoSearchResults = () => {

    const { videos } = useVideoStore();

    return (
        <div className="videos-search-result-container">
            {
                videos?.map((video) => (
                    <VideoSearchResult key={video.id.videoId} video={video} />
                ))
            }
        </div>

    )
}

export default VideoSearchResults