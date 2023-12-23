import React from 'react';
import { ReactComponent as Arrow } from '../assets/right-arrow.svg';
import SearchResults from './SearchResults';

//Recommended-Videos-UI
//
// <div className="videos-container">
//     <div className="video-container">
//         <img src="https://i.ytimg.com/vi/O5myIndBEig/hq720.jpg?sqp=-oaymwEpCNAFEJQDSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIGhACGAYgATgBQAE=&rs=AOn4CLBon6kI8Z_Ve341MmKrmP-yIXRmDA"
//             alt="video-thumnail" className="video-img" />
//         <div className="video-description">
//             <div className="video-profile-img">
//                 <img src="https://yt3.ggpht.com/dosOwzVMOvfQzmmw9ghUIe83zdpEXRRF67zAnL4qAwJ0SRGVpwY6sZNbIHaudxExl99QCZvj=s68-c-k-c0x00ffffff-no-rj"
//                     alt="channel" className="profile-img" />
//             </div>
//             <div className="video-desc">
//                 <p className="description">Sisters | E08 - Ghar Ki Yaad ft. Ahsaas Channa & Namita Dubey | Girliyapa</p>
//                 <div className="video-channel-name">
//                     <div className="channel-name">Girliyapa</div>
//                     <img className="channel-verified"
//                         src="assets/verified-icon.svg"
//                         alt="verified"
//                     />
//                 </div>
//                 <div className="video-reach">
//                     <div className="video-views">9.8K views</div>
//                     <div className="dot">•</div>
//                     <div className="video-update-time">4 hours ago</div>
//                 </div>
//             </div>
//         </div>
//     </div>
    
// </div> 
// 

const Content = () => {
    return (
        <div className="content">
            <div className="scroll-menu">
                <div className="scroll-options">
                    <div className="scroll-option"><p>All</p></div>
                    <div className="scroll-option"><p>Music</p></div>
                    <div className="scroll-option"><p>Mixes</p></div>
                    <div className="scroll-option"><p>Live</p></div>
                    <div className="scroll-option"><p>Bigg Boss</p></div>
                    <div className="scroll-option"><p>T-series</p></div>
                    <div className="scroll-option"><p>CSS</p></div>
                    <div className="scroll-option"><p>Tamil Cinema</p></div>
                    <div className="scroll-option"><p>Dhee</p></div>
                    <div className="scroll-option"><p>Computer Programming</p></div>
                    <div className="scroll-option"><p>Choreography</p></div>
                    <div className="scroll-option"><p>Story telling</p></div>
                    <div className="scroll-option"><p>Dramedy</p></div>
                </div>
                <div className="scroll-right">
                    <Arrow className='arrow' />
                    
                    {/* <img className="arrow" src="/assets/right-arrow.svg" alt="scroll-right" /> */}
                    
                </div>
            </div>
            <SearchResults />
        </div>
    )
}

export default Content