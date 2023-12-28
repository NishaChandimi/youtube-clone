import React from 'react'
import { ReactComponent as Arrow } from '../../assets/right-arrow.svg';
import './ScrollMenu.css';

const ScrollMenu = () => {
    return (
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
                {/* <div className="scroll-option"><p>Dhee</p></div> */}
                <div className="scroll-option"><p>Computer Programming</p></div>
                <div className="scroll-option"><p>Choreography</p></div>
                <div className="scroll-option"><p>Story telling</p></div>
                {/* <div className="scroll-option"><p>Dramedy</p></div> */}
            </div>
            <div className="scroll-right">
                <Arrow className='arrow' />

                {/* <img className="arrow" src="/assets/right-arrow.svg" alt="scroll-right" /> */}

            </div>
        </div>
    )
}

export default ScrollMenu