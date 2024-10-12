import React from 'react'
import './Sidebar.css'
import home from '../../Assets/home.png'
import game_icon from '../../Assets/game_icon.png'
import automobiles from '../../Assets/automobiles.png'
import sport from '../../Assets/sports.png'
import entertaiment from '../../Assets/entertainment.png'
import tech from '../../Assets/tech.png'
import music from '../../Assets/music.png'
import blog from '../../Assets/blogs.png'
import news from '../../Assets/news.png'
import jack from '../../Assets/jack.png'
import simon from '../../Assets/simon.png'
import tom from '../../Assets/tom.png'
import megan from '../../Assets/megan.png'
import cameron from '../../Assets/cameron.png'

const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar ? "":"small-sidebar"}`}>
        <div className="shortcut-link">
            <div className="side-link">
                <img src={home} alt="home" /> <p>Home</p>
            </div>

            <div className="side-link">
                <img src={game_icon} alt="game_icon" /> <p>Gaming</p>
            </div>

            
            <div className="side-link">
                <img src={automobiles} alt="automobiles" /> <p>Automobiles</p>
            </div>

            <div className="side-link">
                <img src={sport} alt="sport" /> <p>Sports</p>
            </div>

            <div className="side-link">
                <img src={entertaiment} alt="entertaiment" /> <p>Entertainments</p>
            </div>

            <div className="side-link">
                <img src={tech} alt="tech" /> <p>Technology</p>
            </div>

            <div className="side-link">
                <img src={music} alt="music" /> <p>Music</p>
            </div>

            
            <div className="side-link">
                <img src={blog} alt="blog" /> <p>Blogs</p>
            </div>

            
            <div className="side-link">
                <img src={news} alt="news" /> <p>News</p>
            </div>

            <hr />

        </div>

        <div className="subscribed-List">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src={jack} alt="" /> <p>HikPen</p>
            </div>

            <div className="side-link">
                <img src={simon} alt="" /> <p>MrBeast</p>
            </div>

            <div className="side-link">
                <img src={tom} alt="" /> <p>Micheal</p>
            </div>

            <div className="side-link">
                <img src={megan} alt="" /> <p>Jolah</p>
            </div>

            <div className="side-link">
                <img src={cameron} alt="" /> <p>Tinuade</p>
            </div>
        </div>

    </div>
  )
}

export default Sidebar