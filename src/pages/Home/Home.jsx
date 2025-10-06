import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import TitleCards from '../../components/TitleCards.jsx/TitleCards'
import hero_img from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play from '../../assets/play_icon.png'
import info from '../../assets/info_icon.png'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
     <Navbar/>

     <div className='hero'>
      <img src={hero_img} alt="" className='banner_img'/>
      <div className='hero_caption'>
        <img src={hero_title} alt=""  className='caption_img'/>
        <p>Discovering his ties to a secret ancient order , a young man living in modern Istanbul embarks on a guest to save the city from an immortal enemy.</p>
        <div className='hero-btn'>
          <button className='btn'><img src={play} alt="" />Play</button>
           <button className='btn dark-btn'><img src={info} alt="" />More Info</button>

        </div>
        <TitleCards/>
      </div>
     </div>

     <div className="more_cards">
      <TitleCards title={'Top Movies'} category={"now_playing"}/>
      <TitleCards title={'Top TV Shows'} category={"upcoming"}/>
      <TitleCards title={'Only on Netflix'} category={"top_rated"}/>
      <TitleCards title={'Blockbuster Movies'} category={"popular"}/>

     </div>

    <Footer/>
        
    </div>
  )
}

export default Home