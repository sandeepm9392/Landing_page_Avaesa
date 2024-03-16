import React from 'react'
import build from '../assets/holding_micks.jpg'
import explore from '../assets/explore.jpg'
import connect from '../assets/connect.jpg'
const Programe = () => {
    return (
        <div className="programe wrapper" name="program">
            <div className="program">
                <div className="text">
                    <h4>Build</h4>
                    <p>Transform ideas into reality through with Arun</p>
                </div>
                <img src={build} />
            </div>
            <div className="program">
                <div className="text">
                    <h4>Explore</h4>
                    <p>Embark on a journey of discovery and innovation</p>
                </div>
                <img src={explore} />
            </div>
            <div className="program">
                <div className="text">
                    <h4>Connect</h4>
                    <p>Forge meaningful relationships and collaborate with community</p>
                </div>
                <img src={connect} />
            </div>
        </div>
    )
}

export default Programe