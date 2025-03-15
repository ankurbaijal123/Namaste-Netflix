import React from 'react'
import VideoPlay from './videoPlay';
import { useParams } from 'react-router-dom';
const MovieVideo = () => {
    const { id } = useParams();
  return (
    <div><VideoPlay movieid={id}/>  </div>
  )
}

export default MovieVideo