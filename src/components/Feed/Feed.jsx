import React from 'react'
import './Feed.css'
import thumbnail1 from '../../Assets/thumbnail1.png'
import thumbnail2 from '../../Assets/thumbnail2.png'
import thumbnail3 from '../../Assets/thumbnail3.png'
import thumbnail4 from '../../Assets/thumbnail4.png'
import thumbnail5 from '../../Assets/thumbnail5.png'
import thumbnail6 from '../../Assets/thumbnail6.png'
import thumbnail7 from '../../Assets/thumbnail7.png'
import thumbnail8 from '../../Assets/thumbnail8.png'
import card1 from '../../Assets/card1.jpg'
import card2 from '../../Assets/card2.jpg'
import card4 from '../../Assets/card4.jpg'
import card5 from '../../Assets/card5.jpg'
import card8 from '../../Assets/card8.jpg'
import card9 from '../../Assets/card9.jpg'
import card10 from '../../Assets/card10.jpg'
import card11 from '../../Assets/card11.jpg'
import card12 from '../../Assets/card12.jpg'
import card13 from '../../Assets/card13.jpg'
import { Link } from 'react-router-dom'




const Feed = () => {
  return (
    <div className="feed">

        <Link to ={`Video/20/4521`} className='card'>
        <img src={card1} alt="" /> 
        <h2>A New Series Of Kung Fu Panda</h2>
        <h3>Star House</h3>
        <p> 456k Views &bull; 2 days ago</p>
        </Link>

        <div className='card'>
        <img src={card4} alt="" /> 
        <h2>Showing a new series Jawan </h2>
        <h3>Extended Shoot</h3>
        <p> 20k Views &bull; 13 days ago</p>
        </div>

        <div className='card'>
        <img src={thumbnail1} alt="" /> 
        <h2>Documentry Of The Seven Seas Of Lombala</h2>
        <h3>Jimmy Cherry</h3>
        <p> 100k Views &bull;  21 days aga</p>
        </div>

        <div className='card'>
        <img src={card9} alt="" /> 
        <h2>Sacred Games New Series</h2>
        <h3>Indian Wave</h3>
        <p> 10k Views &bull; 5 days ago</p>
        </div>

        <div className='card'>
        <img src={thumbnail2} alt="" /> 
        <h2>America On Foot</h2>
        <h3>Sun Production</h3>
        <p> 5k Views &bull; 3 days ago</p>
        </div>

        <div className='card'>
        <img src={card8} alt="" /> 
        <h2>This Boy Has A Photographic Brain</h2>
        <h3>Starshoot</h3>
        <p> 200k Views &bull; 1 hour ago</p>
        </div>

        <div className='card'>
        <img src={thumbnail3} alt="" /> 
        <h2>The Most Beautiful City In The World</h2>
        <h3>Allen J Sukky</h3>
        <p> 2k Views &bull; 15 days ago</p>
        </div>

        <div className='card'>
        <img src={card11} alt="" /> 
        <h2>How To Love On A First Date</h2>
        <h3>Sukhee</h3>
        <p> 90k Views &bull; 7 days ago</p>
        </div>

        <div className='card'>
        <img src={thumbnail4} alt="" /> 
        <h2>The Hidden Treasures Of The Sea</h2>
        <h3>Jacon Noah</h3>
        <p> 17k Views &bull; 2 days ago</p>
        </div>

        <div className='card'>
        <img src={card10} alt="" /> 
        <h2>Adipurush The Conqueror</h2>
        <h3>Next</h3>
        <p> 30k Views &bull; 10 days ago</p>
        </div>

        <div className='card'>
        <img src={thumbnail5} alt="" /> 
        <h2>High School Collections</h2>
        <h3>90's Jet</h3>
        <p> 450k Views &bull; 13 days ago</p>
        </div>

        <div className='card'>
        <img src={card2} alt="" /> 
        <h2>The Dead End (Squid Game)</h2>
        <h3>RainShow</h3>
        <p> 40k Views &bull; 5 days ago</p>
        </div>

        <div className='card'>
        <img src={thumbnail6} alt="" /> 
        <h2>The Fastest Car On Earth</h2>
        <h3>Gold Rush</h3>
        <p> 90k Views &bull; 6 days ago</p>
        </div>

        <div className='card'>
        <img src={card12} alt="" /> 
        <h2>Mission Raniganj The Greatest Beast</h2>
        <h3>Inks</h3>
        <p> 60k Views &bull; 16 days ago</p>
        </div>

        <div className='card'>
        <img src={thumbnail7} alt="" /> 
        <h2>Heaven (Mistry Behind The Cloud)</h2>
        <h3>ClueCloud</h3>
        <p> 100k Views &bull; 2 days ago</p>
        </div>

        <div className='card'>
        <img src={card13} alt="" /> 
        <h2>The Callers Demise</h2>
        <h3>Bestalin</h3>
        <p> 52k Views &bull; 7 days ago</p>
        </div>

        <div className='card'>
        <img src={thumbnail8} alt="" /> 
        <h2>Self Driven</h2>
        <h3>AdvancedTech</h3>
        <p> 1m Views &bull; 2 h agao</p>
        </div>

        <div className='card'>
        <img src={card5} alt="" /> 
        <h2>Pablo Emilio Escobar Gaviria</h2>
        <h3>Hacienda Nápoles</h3>
        <p> 10k Views &bull; 22 h ago</p>
        </div>
    </div>
   
  )
}

export default Feed