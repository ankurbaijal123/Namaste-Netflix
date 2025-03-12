
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRated from '../Hooks/useTopRated'
import useUpcomming from '../Hooks/useUpcomming'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRated()
  useUpcomming()

  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  
  return (
    <>
    <Header />
    {showGptSearch ?  <GptSearch /> : 
      <>
      <MainContainer />
    <SecondaryContainer />
      </>
    }
    
    {/*
      
      MainContainer
        - VideoBackground
        - VideoTitle
      SecondaryContainer
        - MovieList
          - Cards
      
    
      */}
    </>
  )
}

export default Browse