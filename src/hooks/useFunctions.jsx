// import React from 'react'
import { useState } from 'react';
import { useVideoStore } from '../store';
import { useNavigate, useParams } from 'react-router-dom';

export const useFunctions = () => {

    const { setVideos } = useVideoStore();
    const [videoDetails, setVideoDetails] = useState({});
    const {videoId} = useParams();
    const navigate = useNavigate();
    const API_KEY = "AIzaSyDRhE5jQKPm1WlvtKhCmUgYwkBnSAsNdGY";
    const fetchRecommendedVideos = () => {
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
    }

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
            console.log(data.items[0]);
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

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
                navigate(`/search-results/${searchQuery}`);
                console.log(data.items);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
        // setSearchQuery("");
    }

    return {
        fetchRecommendedVideos,
        fetchVideoDetails,
        videoDetails,
        searchVideos
    }

   
}

export default useFunctions