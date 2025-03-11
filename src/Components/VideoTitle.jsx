import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black ">
    <h1 className="text-6xl font-bold">{title}</h1>
    <p className="py-6 text-lg w-1/4">{overview}</p>
    <div className="">
    <button className="p-4 bg-white text-black font-bold px-12 text-xl rounded-lg hover:bg-gray-300 cursor-pointer">
    ▶ Play
  </button>
  <button className="mx-2 p-4 bg-white text-black font-bold px-12 text-xl rounded-lg hover:bg-gray-300 cursor-pointer">
    ℹ More Info
  </button>
  
    </div>
    </div>
  )
}

export default VideoTitle