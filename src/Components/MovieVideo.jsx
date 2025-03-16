import React from 'react'
import VideoPlay from './videoPlay';
import { useNavigate, useParams } from 'react-router-dom';
const MovieVideo = () => {
    const { id } = useParams();
    
  return (
    <div>
      {/* Fixed Home Button */}
      

      {/* Video Play Component */}
      <VideoPlay movieid={id} />
    </div>
  )
}

export default MovieVideo