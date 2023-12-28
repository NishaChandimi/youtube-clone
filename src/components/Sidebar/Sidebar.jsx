import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
            <div className="sidebar-menu-home">
                <div className="sidebar-menu-items">
                    <img src="assets/home-icon.svg" alt="Home-icon" className="sidebar-menu-icons" />
                    <p className="sidebar-menu-item">Home</p>
                    
                </div>
                <div className="sidebar-menu-items">
                    <img src="assets/shorts-icon.svg" alt="shorts-icon" className="sidebar-menu-icons" />
                    <p className="sidebar-menu-item">Shorts</p>
                </div>
                <div className="sidebar-menu-items">
                    <img src="assets/subscriptions-icon.svg" alt="Subscription-icon" className="sidebar-menu-icons" />
                    <p className="sidebar-menu-item">Subscriptions</p>
                </div>
            </div>
            <div className="horizontal-line"></div>
            <div className="sidebar-menu-options">
                <div className="sidebar-menu-items">
                    <img src="assets/library-icon.svg" alt="library-icon" className="sidebar-menu-icons" />
                    <p className="sidebar-menu-item">Library</p>
                </div>
                <div className="sidebar-menu-items">
                    <img src="assets/history-icon.svg" alt="history-icon" className="sidebar-menu-icons" />
                    <p className="sidebar-menu-item">History</p>
                </div>
                <div className="sidebar-menu-items">
                    <img src="assets/your-videos-icon.svg" alt="history-icon" className="sidebar-menu-icons" />
                    <p className="sidebar-menu-item">Your Videos</p>
                </div>
                <div className="sidebar-menu-items">
                    <img src="assets/watch-later-icon.svg" alt="history-icon" className="sidebar-menu-icons" />
                    <p className="sidebar-menu-item">Watch Later</p>
                </div>
                <div className="sidebar-menu-items">
                    <img src="assets/myPlaylist-icon.svg" alt="history-icon" className="sidebar-menu-icons" />
                    <p className="sidebar-menu-item">My</p>
                </div>
                <div className="sidebar-menu-items">
                    <img src="assets/like-icon.svg" alt="history-icon" className="sidebar-menu-icons" />
                    <p className="sidebar-menu-item">Liked Videos</p>
                </div>
            </div>
            <div className="horizontal-line"></div>
            <div className="sidebar-menu-subscriptions">
                <p className="text"> Subscriptions</p>
                <div className="sidebar-menu-subscription">
                    <img src="https://yt3.ggpht.com/OtB--dcR_oNUZUaUsuyk2ShT5nFYjEcj9Yxx50-Nner03vXKt4IWXtP--JrnSGQbwRSHYuVb38g=s88-c-k-c0x00ffffff-no-rj" alt="subscribed-img" className="sidebar-menu-icon" />
                    <div className="sidebar-menu-text">Edureka</div>
                    <div  className="sidebar-menu-notification"> 
                        <div className="sidebar-menu-notification-icon"></div>
                    </div>
                </div>
                <div className="sidebar-menu-subscription">
                    <img src="https://yt3.ggpht.com/bgNhp3LNVBSzdbloDwDC17aF_TRoQprWBMDrdI8cycx-FTpIyyHiNRFwVikZgQZs46xJInkdLw=s88-c-k-c0x00ffffff-no-rj" alt="subscribed-img" className="sidebar-menu-icon" />
                    <div className="sidebar-menu-text">Abijeet D</div>
                    <div  className="sidebar-menu-notification"> 
                        <div className="sidebar-menu-notification-icon"></div>    
                    </div>
                </div>
                <div className="sidebar-menu-subscription">
                    <img src="https://yt3.ggpht.com/ytc/APkrFKZeCbUPD05Gh6QU6xgCoSm0spFDAFLAsfnxGrj9CQ=s88-c-k-c0x00ffffff-no-rj" alt="subscribed-img" className="sidebar-menu-icon" />
                    <div className="sidebar-menu-text">Wide Angle Pictures</div>
                    <div  className="sidebar-menu-notification"> 
                        <div className="sidebar-menu-notification-icon"></div> 
                    </div>
                </div><div className="sidebar-menu-subscription">
                    <img src="https://yt3.ggpht.com/En68RVYWsAMGdVeCDnNU2NGE6Oz40e-kXnSecvd0DhjyL33WPpO3itLZM7rBoZkFo2lBOLmK=s88-c-k-c0x00ffffff-no-rj" alt="subscribed-img" className="sidebar-menu-icon" />
                    <div className="sidebar-menu-text">Geetha Arts</div>
                    <div  className="sidebar-menu-notification"> 
                        <div className="sidebar-menu-notification-icon"></div> 
                    </div>
                </div>
                <div className="sidebar-menu-subscription">
                    <img src="https://yt3.ggpht.com/98zbRkvQV0L3QJQmnKWIiLObrGH5EAgVACw9J73I7Q2J-iyc1W7jxDLP7gMYUZnddwlfr4vQ=s88-c-k-c0x00ffffff-no-rj" alt="subscribed-img" className="sidebar-menu-icon" />
                    <div className="sidebar-menu-text">Jay Shetty</div>
                    <div  className="sidebar-menu-notification"> 
                        <div className="sidebar-menu-notification-icon"></div> 
                    </div>
                </div>
                <div className="sidebar-menu-subscription">
                    <img src="https://yt3.ggpht.com/ytc/APkrFKbuYOGp-TK6Ui5mHPkbcnNNZlhrMUVOa0C7sdPX=s88-c-k-c0x00ffffff-no-rj" alt="subscribed-img" className="sidebar-menu-icon" />
                    <div className="sidebar-menu-text">Neso Academy</div>
                    <div  className="sidebar-menu-notification"> 
                        <div className="sidebar-menu-notification-icon"></div> 
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Sidebar