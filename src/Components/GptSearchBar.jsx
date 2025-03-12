import React, { use } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
const GptSearchBar = () => {
    const language = useSelector(store => store.config.lang);

  return (
    <div className ="pt-[8%] flex justify-center">
    <form className="w-1/2 bg-black grid grid-cols-12 text-white">
    <input type="text" className="p-4 m-4 col-span-9 border border-gray-300"
    placeholder={lang?.[language].gptSearchPlaceHolder}></input>

    <button className="col-span-3 m-4 py-2 px-4 bg-red-600 rounded-3xl text-white cursor-pointer">{lang?.[language].search}</button>
    </form>
    </div>
  )
}

export default GptSearchBar