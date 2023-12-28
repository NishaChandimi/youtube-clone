import React from 'react'
import Header from '../components/Header/Header'
import VideoSearchResults from '../components/VideoSearchResults/VideoSearchResults'
import Sidebar from '../components/Sidebar/Sidebar'
import ScrollMenu from '../components/ScrollMenu/ScrollMenu'
import { useParams } from 'react-router-dom'

const SearchResults = () => {
    const {searchQuery} = useParams();
    return (
        <div>
            <Header searchQuery={searchQuery} />
            <div className="main">
                <Sidebar />
                <div className="content">
                    <ScrollMenu />
                    <VideoSearchResults />
                </div>

            </div>
        </div>
    )
}

export default SearchResults