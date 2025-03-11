
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
  useNowPlayingMovies()
  
  return (
    <>
    <Header />
    <MainContainer />
    <SecondaryContainer />
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