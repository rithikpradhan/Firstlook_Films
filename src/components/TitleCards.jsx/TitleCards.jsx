import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom';
// import cards_data from '../../assets/cards/Cards_data'


const TitleCards = ({title, category}) => {

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTg4NGUwM2Y4MDVhODRlYjkxZTRiMzkyZWZkYjZjNyIsIm5iZiI6MTc0NjcwNzI2Ny4yODEsInN1YiI6IjY4MWNhMzQzODNkNTk4MDk1NWIxYzkwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wdbRL6KxIHzuxtGNzEOUeS1szHv6b6NyO6_u3kr3HNQ'
  }
 };

  const [apiData, setApiData] = useState([])
  const cardsRef = useRef();

  const handlewheel = (event) =>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
   cardsRef.current.addEventListener('wheel', handlewheel)
}, [])

  return (
    <div className='title-cards'>

      <h2>{title? title:"Popular on Netflix"}</h2>

      <div className='card-list' ref={cardsRef}>
        {
          apiData.map((card, index)=>{
            return <Link to={`/player/${card.id}`} className='card' key={index}>
              <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          })
        }

      </div>
      
      
    </div>
  )
}

export default TitleCards