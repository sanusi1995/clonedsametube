import React from 'react'
import './PlayVideo.css'

import Like from '../../Assets/like.png'
import dislike from '../../Assets/dislike.png'
import share from '../../Assets/share.png'
import save from '../../Assets/save.png'
import jack from '../../Assets/jack.png'
import user_profile from '../../Assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>

        <h3>The Return Of The Panda</h3>
        <div className="play-video-info">
          <p>1000 Views &bull; 4 days ago</p>
          <div>
            <span><img src={Like} alt="" />150</span>

          </div>
        </div>

    </div>
  )
}

export default PlayVideo
