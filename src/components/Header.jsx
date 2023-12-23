import React, { useState } from 'react';
import { ReactComponent as Hamburger } from '../assets/hamburger.svg';
import { ReactComponent as YoutubeLogo } from '../assets/youtube-logo.svg';
import { ReactComponent as SearchIcon } from '../assets/search-icon.svg';
import { ReactComponent as Mic } from '../assets/mic.svg';
import { ReactComponent as VideoUpdate } from '../assets/video-update.svg';
import { ReactComponent as Notifications } from '../assets/notifications.svg';
import { useVideoStore } from '../store';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const { setVideos } = useVideoStore();
    const navigate = useNavigate();

    const API_KEY = "AIzaSyDRhE5jQKPm1WlvtKhCmUgYwkBnSAsNdGY";
    // let url =""
    const searchVideos = (searchQuery) =>{
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&key=${API_KEY}`

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json()
            })
            .then((data) => {
                setVideos(data.items);
                navigate("/");
                // console.log(data.items);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
        // setSearchQuery("");
    }
    const onSubmit = (event) => {
        event.preventDefault();
        searchVideos(searchQuery);
        // console.log("OnSubmit called..!");
        
    }
    return (
        <div className="header">
            <div className="logo-container">
                <div className="hamburger">
                    <Hamburger />
                    {/* <img src="../assets/hamburger.svg" alt="hamburger" class="hamburger"/> */}
                </div>
                <div className="youtube-logo">
                    <YoutubeLogo />
                </div>
            </div>
            <div className="search-container">
                <div className="search-bar">
                    <input className="input" type="search" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <button onClick={onSubmit} className="search-btn">
                        {/* <img src="assets/search-icon.svg" alt="search-icon" class="search-icon" /> */}
                        <SearchIcon />
                    </button>

                </div>
                <div className="mic">
                    {/* <img src="assets/mic.svg" alt="mic-icon" /> */}
                    <Mic />
                </div>
            </div>
            <div className="options">
                {/* <img src="assets/video-update.svg" alt="post-icon" class="option" /> */}
                <VideoUpdate className='option' />
                {/* <img src="assets/notifications.svg" alt="notifications" /> */}
                <Notifications />
                <img src="https://yt3.ggpht.com/yti/ADpuP3NO6uBJ_ZU9i2EMD20ufBuA5wW6JpzRpMOZXfqyzw=s88-c-k-c0x00ffffff-no-rj" alt="profile-dp" className="option" />
            </div>
        </div>
    )
}

export default Header